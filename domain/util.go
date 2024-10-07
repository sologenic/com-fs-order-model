package domain

import (
	"strconv"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	"github.com/shopspring/decimal"
	transactiongrpc "github.com/sologenic/com-fs-transaction-model"
)

// Get the unique datastore key from the TX
// Order Key combination: Network_SmartContractAddr_OrderID
func GetOrderKeyFromTX(tx *transactiongrpc.Transaction) string {
	return tx.Network + "_" + tx.SmartContractAddr + "_" + strconv.Itoa(int(tx.OrderDetail.OrderID))
}

// Get the unique datastore key from the Order
func GetOrderKeyFromOrder(order *transactiongrpc.Order) string {
	return order.Network + "_" + order.SmartContractAddr + "_" + strconv.Itoa(int(order.LatestSmartContractOrderDetail.OrderID))
}

// Alpaca uses decimal.Decimal, but we need to convert it to float64 for our internal use
func DecimalToDouble(d *decimal.Decimal) *float64 {
	if d == nil {
		return nil
	}
	f, _ := d.Float64()
	return &f
}

// Maps the Alpaca AssetClass string enum to the internal AssetClass int enum
func MapAssetClass(assetClass alpaca.AssetClass) transactiongrpc.AssetClass {
	switch assetClass {
	case alpaca.USEquity:
		return transactiongrpc.AssetClass_US_EQUITY
	case alpaca.Crypto:
		return transactiongrpc.AssetClass_CRYPTO
	default:
		return transactiongrpc.AssetClass_NOT_USED_ASSET_CLASS
	}
}

// Maps  the Alpaca AssetType string enum to the internal AssetType int enum
func MapTradeType(orderType alpaca.OrderType) transactiongrpc.TradeType {
	switch orderType {
	case alpaca.Market:
		return transactiongrpc.TradeType_MARKET
	case alpaca.Limit:
		return transactiongrpc.TradeType_LIMIT
	case alpaca.Stop:
		return transactiongrpc.TradeType_STOP
	case alpaca.StopLimit:
		return transactiongrpc.TradeType_STOP_LIMIT
	case alpaca.TrailingStop:
		return transactiongrpc.TradeType_TRAILING_STOP
	default:
		return transactiongrpc.TradeType_NOT_USED_TRADE_TYPE
	}
}

// Maps the Alpaca OrderType string enum to the internal OrderType int enum
func MapSide(side alpaca.Side) transactiongrpc.OrderType {
	switch side {
	case alpaca.Buy:
		return transactiongrpc.OrderType_ORDER_TYPE_PURCHASE
	case alpaca.Sell:
		return transactiongrpc.OrderType_ORDER_TYPE_SELL
	default:
		return transactiongrpc.OrderType_NOT_USED_ORDER_TYPE
	}
}

// Maps the Alpaca TimeInForce string enum to the internal TimeInForce int enum
func MapTimeInForce(timeInForce alpaca.TimeInForce) transactiongrpc.TimeInForce {
	switch timeInForce {
	case alpaca.Day:
		return transactiongrpc.TimeInForce_DAY
	case alpaca.GTC:
		return transactiongrpc.TimeInForce_GTC
	case alpaca.OPG:
		return transactiongrpc.TimeInForce_OPG
	case alpaca.IOC:
		return transactiongrpc.TimeInForce_IOC
	case alpaca.FOK:
		return transactiongrpc.TimeInForce_FOK
	case alpaca.CLS:
		return transactiongrpc.TimeInForce_CLS
	default:
		return transactiongrpc.TimeInForce_NOT_USED_TIME_IN_FORCE
	}
}
