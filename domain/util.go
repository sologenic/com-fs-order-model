package domain

import (
	"strconv"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	"github.com/shopspring/decimal"
	ordergrpc "github.com/sologenic/com-fs-transaction-model"
	// "google.golang.org/protobuf/types/known/timestamppb"
)

// Get the unique datastore key from the Order
func GetOrderKeyFromOrder(order *ordergrpc.Order) string {
	return order.Network + "_" + order.SmartContractAddr + "_" + strconv.Itoa(int(order.Instruction.OrderID))
}

// Map Alpaca Order to our AlpacaOrderDetails model
// TODO: refactor based on new Order object
// func MapAlpacaOrderToInternal(tradeUpdate *alpaca.Order, internalOrder *ordergrpc.AlpacaOrderDetails) {
// 	internalOrder.UpdatedAt = timestamppb.New(tradeUpdate.UpdatedAt)

// 	od := internalOrder.OrderDetails
// 	od.AlpacaOrderID = tradeUpdate.ID
// 	od.ClientOrderID = tradeUpdate.ClientOrderID
// 	od.SubmittedAt = timestamppb.New(tradeUpdate.SubmittedAt)
// 	od.AssetID = tradeUpdate.AssetID
// 	od.Symbol = tradeUpdate.Symbol

// 	od.AssetClass = mapAssetClass(tradeUpdate.AssetClass)
// 	od.TradeType = mapTradeType(tradeUpdate.Type)
// 	od.Side = mapSide(tradeUpdate.Side)
// 	od.TimeInForce = mapTimeInForce(tradeUpdate.TimeInForce)
// 	od.Status = statusMapper(tradeUpdate.Status)

// 	if tradeUpdate.Notional != nil {
// 		od.Notional = decimalToInternalDecimal(tradeUpdate.Notional)
// 	}
// 	if tradeUpdate.Qty != nil {
// 		od.TotalQty = decimalToInternalDecimal(tradeUpdate.Qty)
// 	}
// 	if tradeUpdate.LimitPrice != nil {
// 		od.LimitPrice = decimalToInternalDecimal(tradeUpdate.LimitPrice)
// 	}
// 	od.FilledQty = decimalToInternalDecimal(&tradeUpdate.FilledQty)
// }

// Alpaca uses decimal.Decimal, convert it to our Decimal model
func decimalToInternalDecimal(d *decimal.Decimal) *ordergrpc.Decimal {
	return &ordergrpc.Decimal{
		Value: d.CoefficientInt64(),
		Exp:   d.Exponent(),
	}
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

/*
// TODO: delete after fully implementing statusMapper
refer to https://docs.alpaca.markets/docs/orders-at-alpaca#order-lifecycle

# TYPES OF EVENTS FROM ALPACA
after hour event:
accepted

common event types:
new, fill, partial_fill, canceled, expired, done_for_day, replaced

uncommon event types:
rejected, pending_new, stopped, pending_cancel, pending_replace, calculated,
suspended, order_replace_rejected, order_cancel_rejected
*/
func statusMapper(event string) ordergrpc.InternalOrderState {
	switch event {
	case "pending_new":
		return ordergrpc.InternalOrderState_BROKER_ORDER_PENDING_NEW
	case "accepted":
		return ordergrpc.InternalOrderState_BROKER_ORDER_ACCEPTED
	case "new":
		return ordergrpc.InternalOrderState_BROKER_ORDER_NEW
	case "partial_fill":
		return ordergrpc.InternalOrderState_BROKER_ORDER_PARTIALLY_FILLED
	case "fill":
		return ordergrpc.InternalOrderState_BROKER_ORDER_FILLED
	case "pending_cancel":
		return ordergrpc.InternalOrderState_BROKER_ORDER_CANCEL_REQUESTED
	case "canceled":
		return ordergrpc.InternalOrderState_BROKER_ORDER_CANCELED
	case "expired":
		return ordergrpc.InternalOrderState_BROKER_ORDER_EXPIRED
	default:
		return ordergrpc.InternalOrderState_NOT_USED_INTERNAL_ORDER_STATE
	}
}
