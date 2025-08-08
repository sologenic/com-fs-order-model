package rqd

import (
	"fmt"
	"strings"
	"time"

	ordergrpc "github.com/sologenic/com-fs-order-model"
	ordergrpcdmn "github.com/sologenic/com-fs-order-model/domain"
	utilsdecimal "github.com/sologenic/com-fs-utils-lib/go/decimal"
	"github.com/sologenic/com-fs-utils-lib/models/metadata"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type RQDAccountDetails struct {
	CorrespondentID string      // Correspondent Identifier (MPID)
	OfficeID        string      // Office Identifier
	AccountNumber   string      // Account Identifier (12 alphanumeric characters, unique per corr and office)
	AccountType     AccountType // Type of account (C, M, P, etc.)
}

// ParseBrokerAccountDetails parses a broker account string into RQD account details.
// Format: "MPID-OFFICE-ACCOUNTNO-ACCOUNTTYPE"
// Example: "TXTR-001-USER123-C"
func ParseBrokerAccountDetails(accStr string) (*RQDAccountDetails, error) {
	if accStr == "" {
		return nil, fmt.Errorf("account ID is empty")
	}
	parts := strings.Split(accStr, "-")
	if len(parts) < 4 {
		return nil, fmt.Errorf("invalid RQD account ID format, expected 'MPID-OFFICE-ACCOUNT-TYPE', got: %s", accStr)
	}
	accountTypeStr := parts[3]
	switch t := AccountType(accountTypeStr); t {
	case Cash, Margin, PortfolioMargin, GeneralLedger, DVPRVP, CorrespondentFlip, HouseFirm, FullyPaidLending, FullyPaidOmnibus:
		return &RQDAccountDetails{
			CorrespondentID: parts[0],
			OfficeID:        parts[1],
			AccountNumber:   parts[2],
			AccountType:     t,
		}, nil
	default:
		return nil, fmt.Errorf("invalid account type '%s' in RQD account ID '%s'", accountTypeStr, accStr)
	}
}

/*
TODO:
The following fields are to be derived from somewhere (or from RQD):
  - AssetClass
  - OrderClass
  - Type
  - LimitPrice
  - StopPrice
  - TrailPrice
  - TrailPercent
  - HWM
*/
func RQDOrderToInternalBrokerOrderDetails(o GetOrderResponse, t GetTransactionsResponse, network metadata.Network) *ordergrpc.BrokerOrderDetails {
	coID, _ := ordergrpcdmn.ParseStrClientOrderIDToInternal(o.OriginalComment)
	bod := &ordergrpc.BrokerOrderDetails{
		BrokerAssignedID: o.OrderID,
		ClientOrderID:    coID,
		SubmittedAt:      strTimeToTimestamppb(o.OrderCreationTime),
		AssetID:          fmt.Sprintf("%d", t.SymbolNumber),
		Symbol:           o.Symbol,
		OrderClass:       ordergrpc.OrderClass_ORDER_CLASS_SIMPLE, // RQD only supports simple orders
		AssetClass:       0,                                       // TODO: request RQD to provide this?
		Type:             0,                                       // TODO: request RQD to provide this?
		Side:             mapSide(o.Side),
		TimeInForce:      mapTIF(o.TIF),
		OrderQty:         utilsdecimal.FromFloat64(o.OrderQty),
		FilledQty:        utilsdecimal.FromFloat64(t.Quantity),
		FilledAvgPrice:   utilsdecimal.FromFloat64(t.Price),
		ExtendedHours:    false,
		CreatedAt:        strTimeToTimestamppb(o.OrderCreationTime),
		UpdatedAt:        timestamppb.Now(),
		Status:           mapOrderStatus(o.Status),
		ClearingBroker:   ordergrpc.ClearingBroker_RQD,
	}

	if o.IsNotional {
		bod.Notional = utilsdecimal.FromFloat64(o.OriginalNotionalAmt)
	}

	switch o.Status {
	case Cancelled, Cxld:
		bod.CancelledAt = strTimeToTimestamppb(t.ExecutionDate)
	case Expired:
		bod.ExpiredAt = strTimeToTimestamppb(t.ExecutionDate)
	case Rejected:
		bod.FailedAt = strTimeToTimestamppb(t.ExecutionDate)
	default:
		bod.FilledAt = strTimeToTimestamppb(t.ExecutionDate)
	}

	return bod
}

func strTimeToTimestamppb(t string) *timestamppb.Timestamp {
	ts, err := time.Parse(time.RFC3339, t)
	if err != nil {
		return nil
	}
	return timestamppb.New(ts)
}

func mapSide(side string) ordergrpc.OrderType {
	switch side {
	case "B":
		return ordergrpc.OrderType_ORDER_TYPE_PURCHASE
	case "S":
		return ordergrpc.OrderType_ORDER_TYPE_SELL
	default:
		return ordergrpc.OrderType_NOT_USED_ORDER_TYPE
	}
}

func mapTIF(tif string) ordergrpc.TimeInForce {
	switch tif {
	case "DAY":
		return ordergrpc.TimeInForce_DAY
	case "GTC":
		return ordergrpc.TimeInForce_GOOD_TIL_CANCELED
	default:
		return ordergrpc.TimeInForce_NOT_USED_TIME_IN_FORCE
	}
}

func mapOrderStatus(s string) ordergrpc.BrokerOrderStatus {
	switch s {
	case Open:
		return ordergrpc.BrokerOrderStatus_NEW
	case Filled:
		return ordergrpc.BrokerOrderStatus_FILLED
	case Rejected:
		return ordergrpc.BrokerOrderStatus_REJECTED
	case Cxld:
		return ordergrpc.BrokerOrderStatus_CANCELED
	case Acknowledged:
		return ordergrpc.BrokerOrderStatus_ACCEPTED
	case Sent:
		return ordergrpc.BrokerOrderStatus_PENDING_NEW
	case Expired:
		return ordergrpc.BrokerOrderStatus_EXPIRED
	case Cancelled:
		return ordergrpc.BrokerOrderStatus_CANCELED
	case PartialFilled:
		return ordergrpc.BrokerOrderStatus_PARTIALLY_FILLED
	default:
		return ordergrpc.BrokerOrderStatus_NOT_USED_ORDER_STATUS
	}
}
