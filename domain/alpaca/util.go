package alpaca

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	"github.com/samber/lo"
	assetgrpc "github.com/sologenic/com-fs-asset-model"
	ordergrpc "github.com/sologenic/com-fs-order-model"
	"github.com/sologenic/com-fs-utils-lib/models/commission"
	dutils "github.com/sologenic/com-fs-utils-lib/models/decimal"
	metadatagrpc "github.com/sologenic/com-fs-utils-lib/models/metadata"
	orderproperties "github.com/sologenic/com-fs-utils-lib/models/order-properties"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type BrokerResponse struct {
	BrokerOrder      *BrokerOrder
	BrokerTradeEvent *BrokerTradeEvent
}

// Map Broker API responses to our internal BrokerOrderDetails model
// Two types of responses are handled: BrokerOrder(API response) and BrokerTradeEvent(SSE event)
func MapBrokerOrderToInternal(br *BrokerResponse) (*ordergrpc.BrokerOrderDetails, error) {
	var bo *BrokerOrder
	var bte *BrokerTradeEvent

	if br.BrokerTradeEvent != nil {
		bo = &br.BrokerTradeEvent.Order
		bte = br.BrokerTradeEvent
	}
	if br.BrokerOrder != nil {
		bo = br.BrokerOrder
	}
	if bo == nil {
		return nil, fmt.Errorf("neither BrokerOrder nor BrokerTradeEvent is provided")
	}

	coID, err := ParseStrClientOrderIDToInternal(bo.ClientOrderID)
	if err != nil {
		return nil, fmt.Errorf("failed to parse ClientOrderID: %v", err)
	}

	bod := &ordergrpc.BrokerOrderDetails{
		BrokerAssignedID: bo.ID,
		ClientOrderID:    coID,
		SubmittedAt:      convertTimeToTimestamp(&bo.SubmittedAt),
		FilledAt:         convertTimeToTimestamp(bo.FilledAt),
		ExpiredAt:        convertTimeToTimestamp(bo.ExpiredAt),
		CancelledAt:      convertTimeToTimestamp(bo.CanceledAt),
		FailedAt:         convertTimeToTimestamp(bo.FailedAt),
		AssetID:          bo.AssetID,
		Symbol:           bo.Symbol,
		AssetClass:       mapAssetClass(bo.AssetClass),
		OrderClass:       mapOrderClass(bo.OrderClass),
		Type:             mapTradeType(bo.Type),
		Side:             mapSide(bo.Side),
		TimeInForce:      mapTimeInForce(bo.TimeInForce),
		Notional:         dutils.DecimalToInternalDecimal(bo.Notional),
		OrderQty:         dutils.DecimalToInternalDecimal(bo.Qty),
		FilledQty:        dutils.DecimalToInternalDecimal(&bo.FilledQty),
		FilledAvgPrice:   dutils.DecimalToInternalDecimal(bo.FilledAvgPrice),
		LimitPrice:       dutils.DecimalToInternalDecimal(bo.LimitPrice),
		StopPrice:        dutils.DecimalToInternalDecimal(bo.StopPrice),
		TrailPrice:       dutils.DecimalToInternalDecimal(bo.TrailPrice),
		TrailPercent:     dutils.DecimalToInternalDecimal(bo.TrailPercent),
		HWM:              dutils.DecimalToInternalDecimal(bo.HWM),
		ExtendedHours:    bo.ExtendedHours,
		CreatedAt:        convertTimeToTimestamp(&bo.CreatedAt),
		UpdatedAt:        convertTimeToTimestamp(&bo.UpdatedAt),
		Status:           mapStatus(bo.Status),
		ClearingBroker:   orderproperties.ClearingBroker_ALPACA,
		CommissionSettings: &commission.CommissionSettings{
			Commission:     dutils.DecimalToInternalDecimal(bo.Commission),
			CommissionType: mapCommissionType(bo.CommissionType),
		},
	}

	if bte != nil {
		bod.TotalPosition = dutils.DecimalToInternalDecimal(bte.PositionQty)
		bod.PartialPrice = dutils.DecimalToInternalDecimal(bte.Price)
		bod.PartialQty = dutils.DecimalToInternalDecimal(bte.Qty)
		bod.EventID = &bte.EventID
		bod.EventTime = convertTimeToTimestamp(&bte.At)
	}
	return bod, nil
}

// Parse ClientOrderID string into the GRPC struct
// format: orderID-SmartContractAddr-network
func ParseStrClientOrderIDToInternal(clientOrderIDString string) (*ordergrpc.ClientOrderID, error) {
	parts := strings.Split(clientOrderIDString, "-")
	if len(parts) != 3 {
		return nil, fmt.Errorf("invalid ClientOrderID format")
	}

	// Parse OrderID
	orderIDInt64, err := strconv.ParseInt(parts[0], 10, 64)
	if err != nil {
		return nil, fmt.Errorf("invalid OrderID format: %v", err)
	}

	// Validate network value is not empty
	if parts[2] == "" {
		return nil, fmt.Errorf("network value cannot be empty")
	}

	// Parse Network string to enum
	networkInt, err := strconv.ParseInt(parts[2], 10, 32)
	if err != nil {
		return nil, fmt.Errorf("invalid network format: %v", err)
	}

	return &ordergrpc.ClientOrderID{
		OrderID:           orderIDInt64,
		SmartContractAddr: parts[1],
		Network:           metadatagrpc.Network(networkInt),
	}, nil
}

// Maps the Alpaca AssetClass string enum to the internal AssetClass int enum
func mapAssetClass(assetClass alpaca.AssetClass) assetgrpc.AssetType {
	switch assetClass {
	case alpaca.USEquity:
		return assetgrpc.AssetType_ASSET_TYPE_SECURITY
	default:
		return assetgrpc.AssetType_ASSET_TYPE_NONE
	}
}

// Maps  the Alpaca AssetType string enum to the internal AssetType int enum
func mapTradeType(orderType alpaca.OrderType) ordergrpc.TradeType {
	switch orderType {
	case alpaca.Market:
		return ordergrpc.TradeType_MARKET
	case alpaca.Limit:
		return ordergrpc.TradeType_LIMIT
	case alpaca.Stop:
		return ordergrpc.TradeType_STOP
	case alpaca.StopLimit:
		return ordergrpc.TradeType_STOP_LIMIT
	case alpaca.TrailingStop:
		return ordergrpc.TradeType_TRAILING_STOP
	default:
		return ordergrpc.TradeType_NOT_APPLICABLE_TRADE_TYPE
	}
}

// Maps the Alpaca OrderType string enum to the internal OrderType int enum
func mapSide(side alpaca.Side) orderproperties.OrderType {
	switch side {
	case alpaca.Buy:
		return orderproperties.OrderType_ORDER_TYPE_PURCHASE
	case alpaca.Sell:
		return orderproperties.OrderType_ORDER_TYPE_SELL
	default:
		return orderproperties.OrderType_NOT_APPLICABLE_ORDER_TYPE
	}
}

// Maps the Alpaca TimeInForce string enum to the internal TimeInForce int enum
func mapTimeInForce(timeInForce alpaca.TimeInForce) orderproperties.TimeInForce {
	switch timeInForce {
	case alpaca.Day:
		return orderproperties.TimeInForce_DAY
	case alpaca.GTC:
		return orderproperties.TimeInForce_GOOD_TIL_CANCELED
	case alpaca.OPG:
		return orderproperties.TimeInForce_AT_THE_OPENING
	case alpaca.IOC:
		return orderproperties.TimeInForce_IMMEDIATE_OR_CANCEL
	case alpaca.FOK:
		return orderproperties.TimeInForce_FILL_OR_KILL
	case alpaca.CLS:
		return orderproperties.TimeInForce_AT_THE_CLOSE
	default:
		return orderproperties.TimeInForce_NOT_USED_TIME_IN_FORCE
	}
}

func mapStatus(status string) ordergrpc.BrokerOrderStatus {
	switch status {
	case "pending_new":
		return ordergrpc.BrokerOrderStatus_PENDING_NEW
	case "new":
		return ordergrpc.BrokerOrderStatus_NEW
	case "partially_filled":
		return ordergrpc.BrokerOrderStatus_PARTIALLY_FILLED
	case "filled":
		return ordergrpc.BrokerOrderStatus_FILLED
	case "done_for_day":
		return ordergrpc.BrokerOrderStatus_DONE_FOR_DAY
	case "canceled":
		return ordergrpc.BrokerOrderStatus_CANCELED
	case "expired":
		return ordergrpc.BrokerOrderStatus_EXPIRED
	case "pending_cancel":
		return ordergrpc.BrokerOrderStatus_PENDING_CANCEL
	case "accepted":
		return ordergrpc.BrokerOrderStatus_ACCEPTED
	case "accepted_for_bidding":
		return ordergrpc.BrokerOrderStatus_ACCEPTED_FOR_BIDDING
	case "stopped":
		return ordergrpc.BrokerOrderStatus_STOPPED
	case "rejected":
		return ordergrpc.BrokerOrderStatus_REJECTED
	case "suspended":
		return ordergrpc.BrokerOrderStatus_SUSPENDED
	case "calculated":
		return ordergrpc.BrokerOrderStatus_CALCULATED
	default:
		return ordergrpc.BrokerOrderStatus_NOT_USED_ORDER_STATUS
	}
}

func mapOrderClass(oc alpaca.OrderClass) ordergrpc.OrderClass {
	switch oc {
	case alpaca.Simple:
		return ordergrpc.OrderClass_ORDER_CLASS_SIMPLE
	case alpaca.Bracket:
		return ordergrpc.OrderClass_ORDER_CLASS_BRACKET
	case alpaca.OCO:
		return ordergrpc.OrderClass_ORDER_CLASS_ONE_CANCELS_OTHER
	case alpaca.OTO:
		return ordergrpc.OrderClass_ORDER_CLASS_ONE_TRIGGERS_OTHER
	default:
		return ordergrpc.OrderClass_NOT_USED_ORDER_CLASS
	}
}

func mapCommissionType(ct string) *commission.CommissionType {
	switch ct {
	case "notional":
		return lo.ToPtr(commission.CommissionType_NOTIONAL)
	case "qty":
		return lo.ToPtr(commission.CommissionType_QTY)
	case "bps":
		return lo.ToPtr(commission.CommissionType_BPS)
	default:
		return nil
	}
}

func convertTimeToTimestamp(time *time.Time) *timestamppb.Timestamp {
	if time == nil {
		return nil
	}
	return timestamppb.New(*time)
}
