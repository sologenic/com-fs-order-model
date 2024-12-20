package domain

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	ordergrpc "github.com/sologenic/com-fs-order-model"
	dutils "github.com/sologenic/com-fs-utils-lib/go/decimal"
	metadatagrpc "github.com/sologenic/com-fs-utils-lib/models/metadata"
	"google.golang.org/protobuf/types/known/timestamppb"
)

type AlpacaResponse struct {
	Order       *alpaca.Order
	TradeUpdate *alpaca.TradeUpdate
}

// Get the unique datastore key from the Order
// order key format: orderID-SmartContractAddr-network
func GetOrderKeyStrFromOrder(order *ordergrpc.Order) string {
	return fmt.Sprintf("%d-%s-%d", order.Instruction.OrderID, order.SmartContractAddr, order.Network)
}

func LogKeyToStr(key *ordergrpc.Key) string {
	return fmt.Sprintf("%d-%s", *key.Timestamp, key.Key)
}

// Map Alpaca responses to our AlpacaOrderDetails model
// Two types of responses are handled: Order(SDK response) and TradeUpdate(Update event via websocket)
func MapAlpacaOrderToInternal(ar *AlpacaResponse) (*ordergrpc.BrokerOrderDetails, error) {
	var o alpaca.Order
	var tu *alpaca.TradeUpdate

	if ar.TradeUpdate != nil {
		o = ar.TradeUpdate.Order
		tu = ar.TradeUpdate
	}
	if ar.Order != nil {
		o = *ar.Order
	}

	coID, err := ParseStrClientOrderIDToInternal(o.ClientOrderID)
	if err != nil {
		return nil, fmt.Errorf("failed to parse ClientOrderID: %v", err)
	}
	aod := &ordergrpc.BrokerOrderDetails{
		BrokerAssignedID: o.ID,
		ClientOrderID:    coID,
		SubmittedAt:      convertTimeToTimestamp(&o.SubmittedAt),
		FilledAt:         convertTimeToTimestamp(o.FilledAt),
		ExpiredAt:        convertTimeToTimestamp(o.ExpiredAt),
		CancelledAt:      convertTimeToTimestamp(o.CanceledAt),
		FailedAt:         convertTimeToTimestamp(o.FailedAt),
		AssetID:          o.AssetID,
		Symbol:           o.Symbol,
		AssetClass:       mapAssetClass(o.AssetClass),
		OrderClass:       mapOrderClass(o.OrderClass),
		Type:             mapTradeType(o.Type),
		Side:             mapSide(o.Side),
		TimeInForce:      mapTimeInForce(o.TimeInForce),
		Notional:         dutils.DecimalToInternalDecimal(o.Notional),
		OrderQty:         dutils.DecimalToInternalDecimal(o.Qty),
		FilledQty:        dutils.DecimalToInternalDecimal(&o.FilledQty),
		FilledAvgPrice:   dutils.DecimalToInternalDecimal(o.FilledAvgPrice),
		LimitPrice:       dutils.DecimalToInternalDecimal(o.LimitPrice),
		StopPrice:        dutils.DecimalToInternalDecimal(o.StopPrice),
		TrailPrice:       dutils.DecimalToInternalDecimal(o.TrailPrice),
		TrailPercent:     dutils.DecimalToInternalDecimal(o.TrailPercent),
		HWM:              dutils.DecimalToInternalDecimal(o.HWM),
		ExtendedHours:    o.ExtendedHours,
		CreatedAt:        convertTimeToTimestamp(&o.CreatedAt),
		UpdatedAt:        convertTimeToTimestamp(&o.UpdatedAt),
		Status:           mapStatus(o.Status),
	}

	if tu != nil {
		aod.TotalPosition = dutils.DecimalToInternalDecimal(tu.PositionQty)
		aod.PartialPrice = dutils.DecimalToInternalDecimal(tu.Price)
		aod.PartialQty = dutils.DecimalToInternalDecimal(tu.Qty)
	}
	return aod, nil
}

func ParseInternalClientOrderIDToStr(bod *ordergrpc.ClientOrderID) string {
	return fmt.Sprintf("%d-%s-%d", bod.OrderID, bod.SmartContractAddr, bod.Network)
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

	// Parse Network string to enum
	network, err := mapNetworkStrToGRPC(parts[2])
	if err != nil {
		return nil, fmt.Errorf("invalid network format: %v", err)
	}

	return &ordergrpc.ClientOrderID{
		OrderID:           orderIDInt64,
		SmartContractAddr: parts[1],
		Network:           network,
	}, nil
}

// Maps the Alpaca AssetClass string enum to the internal AssetClass int enum
func mapAssetClass(assetClass alpaca.AssetClass) ordergrpc.AssetClass {
	switch assetClass {
	case alpaca.USEquity:
		return ordergrpc.AssetClass_US_EQUITY
	case alpaca.Crypto:
		return ordergrpc.AssetClass_CRYPTO
	default:
		return ordergrpc.AssetClass_NOT_USED_ASSET_CLASS
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
		return ordergrpc.TradeType_NOT_USED_TRADE_TYPE
	}
}

// Maps the Alpaca OrderType string enum to the internal OrderType int enum
func mapSide(side alpaca.Side) ordergrpc.OrderType {
	switch side {
	case alpaca.Buy:
		return ordergrpc.OrderType_ORDER_TYPE_PURCHASE
	case alpaca.Sell:
		return ordergrpc.OrderType_ORDER_TYPE_SELL
	default:
		return ordergrpc.OrderType_NOT_USED_ORDER_TYPE
	}
}

// Maps the Alpaca TimeInForce string enum to the internal TimeInForce int enum
func mapTimeInForce(timeInForce alpaca.TimeInForce) ordergrpc.TimeInForce {
	switch timeInForce {
	case alpaca.Day:
		return ordergrpc.TimeInForce_DAY
	case alpaca.GTC:
		return ordergrpc.TimeInForce_GTC
	case alpaca.OPG:
		return ordergrpc.TimeInForce_OPG
	case alpaca.IOC:
		return ordergrpc.TimeInForce_IOC
	case alpaca.FOK:
		return ordergrpc.TimeInForce_FOK
	case alpaca.CLS:
		return ordergrpc.TimeInForce_CLS
	default:
		return ordergrpc.TimeInForce_NOT_USED_TIME_IN_FORCE
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
		return ordergrpc.BrokerOrderStatus_NOT_USED_ALPACA_ORDER_STATUS
	}
}

func mapOrderClass(oc alpaca.OrderClass) ordergrpc.OrderClass {
	switch oc {
	case alpaca.Simple:
		return ordergrpc.OrderClass_ORDER_CLASS_SIMPLE
	case alpaca.Bracket:
		return ordergrpc.OrderClass_ORDER_CLASS_BRACKET
	case alpaca.OCO:
		return ordergrpc.OrderClass_ORDER_CLASS_OCO
	case alpaca.OTO:
		return ordergrpc.OrderClass_ORDER_CLASS_OTO
	default:
		return ordergrpc.OrderClass_NOT_USED_ORDER_CLASS
	}
}

func convertTimeToTimestamp(time *time.Time) *timestamppb.Timestamp {
	if time == nil {
		return nil
	}
	return timestamppb.New(*time)
}

func mapNetworkStrToGRPC(networkStr string) (metadatagrpc.Network, error) {
	v, exists := metadatagrpc.Network_value[strings.ToUpper(networkStr)]
	if !exists {
		return metadatagrpc.Network_NETWORK_DO_NOT_USE, fmt.Errorf("invalid network: %s", networkStr)
	}
	return metadatagrpc.Network(v), nil
}
