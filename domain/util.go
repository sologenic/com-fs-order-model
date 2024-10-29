package domain

import (
	"fmt"
	"strconv"
	"strings"
	"time"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	ordergrpc "github.com/sologenic/com-fs-order-model"
	dutils "github.com/sologenic/com-fs-utils-lib/go/decimal"
	"google.golang.org/protobuf/types/known/timestamppb"
)

// Get the unique datastore key from the Order
func GetOrderKeyFromOrder(order *ordergrpc.Order) string {
	return strconv.Itoa(int(order.Instruction.OrderID)) + "-" + order.Network + "-" + order.SmartContractAddr
}

// Map Alpaca Order to our AlpacaOrderDetails model
func MapAlpacaOrderToInternal(tu *alpaca.TradeUpdate, aod *ordergrpc.AlpacaOrderDetails) error {
	if tu == nil {
		return nil
	}
	if tu.Order.ID != aod.AlpacaOrderID {
		return fmt.Errorf("Order.ID does not match AlpacaOrderDetails.AlpacaOrderID")
	}

	order := tu.Order
	clientOrderID, err := parseClientOrderIDString(order.ClientOrderID)
	if err != nil {
		return fmt.Errorf("failed to parse ClientOrderID: %v", err)
	}

	aod.AlpacaOrderID = order.ID
	aod.ClientOrderID = clientOrderID
	aod.SubmittedAt = convertTimeToTimestamp(&order.SubmittedAt)
	aod.FilledAt = convertTimeToTimestamp(order.FilledAt)
	aod.ExpiredAt = convertTimeToTimestamp(order.ExpiredAt)
	aod.CancelledAt = convertTimeToTimestamp(order.CanceledAt)
	aod.FailedAt = convertTimeToTimestamp(order.FailedAt)
	aod.AssetID = order.AssetID
	aod.Symbol = order.Symbol
	aod.AssetClass = mapAssetClass(order.AssetClass)
	aod.OrderClass = mapOrderClass(order.OrderClass)
	aod.Type = mapTradeType(order.Type)
	aod.Side = mapSide(order.Side)
	aod.TimeInForce = mapTimeInForce(order.TimeInForce)
	aod.Notional = dutils.DecimalToInternalDecimal(order.Notional)
	aod.OrderQty = dutils.DecimalToInternalDecimal(order.Qty)
	aod.FilledQty = dutils.DecimalToInternalDecimal(&order.FilledQty)
	aod.FilledAvgPrice = dutils.DecimalToInternalDecimal(order.FilledAvgPrice)
	aod.LimitPrice = dutils.DecimalToInternalDecimal(order.LimitPrice)
	aod.StopPrice = dutils.DecimalToInternalDecimal(order.StopPrice)
	aod.TrailPrice = dutils.DecimalToInternalDecimal(order.TrailPrice)
	aod.TrailPercent = dutils.DecimalToInternalDecimal(order.TrailPercent)
	aod.HWM = dutils.DecimalToInternalDecimal(order.HWM)
	aod.ExtendedHours = order.ExtendedHours
	aod.CreatedAt = convertTimeToTimestamp(&order.CreatedAt)
	aod.UpdatedAt = convertTimeToTimestamp(&order.UpdatedAt)
	aod.Status = mapStatus(order.Status)
	aod.TotalPosition = dutils.DecimalToInternalDecimal(tu.PositionQty)
	aod.PartialPrice = dutils.DecimalToInternalDecimal(tu.Price)
	aod.PartialQty = dutils.DecimalToInternalDecimal(tu.Qty)
	return nil
}

// Parse ClientOrderID string into the GRPC struct
// format: orderID-SmartContractAddr-network
func parseClientOrderIDString(clientOrderIDString string) (*ordergrpc.ClientOrderID, error) {
	parts := strings.Split(clientOrderIDString, "-")
	if len(parts) != 3 {
		return nil, fmt.Errorf("invalid ClientOrderID format")
	}

	orderIDInt64, err := strconv.ParseInt(parts[0], 10, 64)
	if err != nil {
		return nil, fmt.Errorf("invalid OrderID format: %v", err)
	}

	return &ordergrpc.ClientOrderID{
		OrderID:           orderIDInt64,
		SmartContractAddr: parts[1],
		Network:           parts[2],
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

func mapStatus(status string) ordergrpc.AlpacaOrderStatus {
	switch status {
	case "pending_new":
		return ordergrpc.AlpacaOrderStatus_PENDING_NEW
	case "new":
		return ordergrpc.AlpacaOrderStatus_NEW
	case "partially_filled":
		return ordergrpc.AlpacaOrderStatus_PARTIALLY_FILLED
	case "filled":
		return ordergrpc.AlpacaOrderStatus_FILLED
	case "done_for_day":
		return ordergrpc.AlpacaOrderStatus_DONE_FOR_DAY
	case "canceled":
		return ordergrpc.AlpacaOrderStatus_CANCELED
	case "expired":
		return ordergrpc.AlpacaOrderStatus_EXPIRED
	case "pending_cancel":
		return ordergrpc.AlpacaOrderStatus_PENDING_CANCEL
	case "accepted":
		return ordergrpc.AlpacaOrderStatus_ACCEPTED
	case "accepted_for_bidding":
		return ordergrpc.AlpacaOrderStatus_ACCEPTED_FOR_BIDDING
	case "stopped":
		return ordergrpc.AlpacaOrderStatus_STOPPED
	case "rejected":
		return ordergrpc.AlpacaOrderStatus_REJECTED
	case "suspended":
		return ordergrpc.AlpacaOrderStatus_SUSPENDED
	case "calculated":
		return ordergrpc.AlpacaOrderStatus_CALCULATED
	default:
		return ordergrpc.AlpacaOrderStatus_NOT_USED_ALPACA_ORDER_STATUS
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
