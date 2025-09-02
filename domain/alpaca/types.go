package alpaca

import (
	"time"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	"github.com/shopspring/decimal"
)

// Source: https://docs.alpaca.markets/reference/createorderforaccount
// Note: import Alpaca trading SDK types for common fields for both trade and broker APIs
type PlaceOrderRequest struct {
	Symbol         string                 `json:"symbol"`
	Qty            *decimal.Decimal       `json:"qty,omitempty"`
	Notional       *decimal.Decimal       `json:"notional,omitempty"`
	Side           alpaca.Side            `json:"side"`
	Type           alpaca.OrderType       `json:"type"`
	TimeInForce    alpaca.TimeInForce     `json:"time_in_force"`
	LimitPrice     *decimal.Decimal       `json:"limit_price,omitempty"`
	StopPrice      *decimal.Decimal       `json:"stop_price,omitempty"`
	TrailPrice     *decimal.Decimal       `json:"trail_price,omitempty"`
	TrailPercent   *decimal.Decimal       `json:"trail_percent,omitempty"`
	ExtendedHours  *bool                  `json:"extended_hours,omitempty"`
	ClientOrderID  string                 `json:"client_order_id"`
	OrderClass     *alpaca.OrderClass     `json:"order_class,omitempty"`
	TakeProfit     *alpaca.TakeProfit     `json:"take_profit,omitempty"`
	StopLoss       *alpaca.StopLoss       `json:"stop_loss,omitempty"`
	PositionIntent *alpaca.PositionIntent `json:"position_intent,omitempty"`

	// Broker-only order-level fields
	Commission     *decimal.Decimal `json:"commission,omitempty"`
	CommissionType *string          `json:"commission_type,omitempty"`
	Source         *string          `json:"source,omitempty"`
	Instructions   *string          `json:"instructions,omitempty"`
	Subtag         *string          `json:"subtag,omitempty"`
	SwapFeeBPS     *string          `json:"swap_fee_bps,omitempty"`
}

type BrokerOrder struct {
	// Shared Trading fields
	ID             string                `json:"id"`
	ClientOrderID  string                `json:"client_order_id"`
	CreatedAt      time.Time             `json:"created_at"`
	UpdatedAt      time.Time             `json:"updated_at"`
	SubmittedAt    time.Time             `json:"submitted_at"`
	FilledAt       *time.Time            `json:"filled_at"`
	ExpiredAt      *time.Time            `json:"expired_at"`
	CanceledAt     *time.Time            `json:"canceled_at"`
	FailedAt       *time.Time            `json:"failed_at"`
	ReplacedAt     *time.Time            `json:"replaced_at"`
	ReplacedBy     *string               `json:"replaced_by"`
	Replaces       *string               `json:"replaces"`
	AssetID        string                `json:"asset_id"`
	Symbol         string                `json:"symbol"`
	AssetClass     alpaca.AssetClass     `json:"asset_class"`
	OrderClass     alpaca.OrderClass     `json:"order_class"`
	Type           alpaca.OrderType      `json:"type"`
	Side           alpaca.Side           `json:"side"`
	PositionIntent alpaca.PositionIntent `json:"position_intent"`
	TimeInForce    alpaca.TimeInForce    `json:"time_in_force"`
	Status         string                `json:"status"`
	Notional       *decimal.Decimal      `json:"notional"`
	Qty            *decimal.Decimal      `json:"qty"`
	FilledQty      decimal.Decimal       `json:"filled_qty"`
	FilledAvgPrice *decimal.Decimal      `json:"filled_avg_price"`
	LimitPrice     *decimal.Decimal      `json:"limit_price"`
	StopPrice      *decimal.Decimal      `json:"stop_price"`
	TrailPrice     *decimal.Decimal      `json:"trail_price"`
	TrailPercent   *decimal.Decimal      `json:"trail_percent"`
	HWM            *decimal.Decimal      `json:"hwm"`
	ExtendedHours  bool                  `json:"extended_hours"`
	Legs           []BrokerOrder         `json:"legs"`

	// Broker-only fields
	Commission     *decimal.Decimal `json:"commission"`
	CommissionType string           `json:"commission_type"`
	Source         *string          `json:"source"`
	Subtag         *string          `json:"subtag"`
	ExpiresAt      *time.Time       `json:"expires_at"`
}

// BrokerTradeEvent represents the SSE event structure from Alpaca Broker API
// Based on the documentation at https://docs.alpaca.markets/reference/subscribetotradev2sse
type BrokerTradeEvent struct {
	AccountID           string      `json:"account_id"`
	At                  time.Time   `json:"at"`
	Event               string      `json:"event"`
	EventID             string      `json:"event_id"`
	ExecutionID         string      `json:"execution_id"`
	PreviousExecutionID string      `json:"previous_execution_id"`
	Order               BrokerOrder `json:"order"`
	Timestamp           time.Time   `json:"timestamp"`
}
