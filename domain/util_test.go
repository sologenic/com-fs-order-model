package domain

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/alpacahq/alpaca-trade-api-go/v3/alpaca"
	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	ordergrpc "github.com/sologenic/com-fs-order-model"
	utildecimal "github.com/sologenic/com-fs-utils-lib/go/decimal"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const testDataRoot = "test"

func assertEventsEquality[T any](t *testing.T, expected, actual T) {
	// Compare with approximate time.
	cmpOpt := []cmp.Option{
		cmpopts.EquateApproxTime(3 * time.Second),
		cmpopts.IgnoreUnexported(
			ordergrpc.BrokerOrderDetails{},
			ordergrpc.ClientOrderID{},
			timestamppb.Timestamp{},
			utildecimal.Decimal{},
		),
	}

	assert.True(t, cmp.Equal(expected, actual, cmpOpt...), cmp.Diff(expected, actual, cmpOpt...))
}

// TestGetOrderKeyStrFromOrder tests the GetOrderKeyStrFromOrder function.
func TestGetOrderKeyStrFromOrder(t *testing.T) {
	tests := []struct {
		name     string
		order    *ordergrpc.Order
		expected string
	}{
		{
			name: "Valid Order",
			order: &ordergrpc.Order{
				Instruction: &ordergrpc.OrderInstruction{
					OrderID: 12345,
				},
				SmartContractAddr: "0xABC123",
				Network:           "mainnet",
			},
			expected: "12345-0xABC123-mainnet",
		},
		{
			name: "Empty SmartContractAddr",
			order: &ordergrpc.Order{
				Instruction: &ordergrpc.OrderInstruction{
					OrderID: 67890,
				},
				SmartContractAddr: "",
				Network:           "testnet",
			},
			expected: "67890--testnet",
		},
		{
			name: "Empty Network",
			order: &ordergrpc.Order{
				Instruction: &ordergrpc.OrderInstruction{
					OrderID: 11111,
				},
				SmartContractAddr: "0xDEF456",
				Network:           "",
			},
			expected: "11111-0xDEF456-",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result := GetOrderKeyStrFromOrder(tt.order)
			assert.Equal(t, tt.expected, result)
		})
	}
}

func TestStripTimestampFromLogKey(t *testing.T) {
	tests := []struct {
		name        string
		logKey      string
		expected    string
		expectError bool
	}{
		{
			name:        "Valid log key with single dash",
			logKey:      "1731111796875394000-70-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-testnet",
			expected:    "70-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-testnet",
			expectError: false,
		},
		{
			name:        "Log key without dash",
			logKey:      "invalidkey",
			expected:    "",
			expectError: true,
		},
		{
			name:        "Empty log key",
			logKey:      "",
			expected:    "",
			expectError: true,
		},
		{
			name:        "Log key starts with dash",
			logKey:      "-startingWithDash",
			expected:    "startingWithDash",
			expectError: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := StripTimestampFromLogKey(tt.logKey)
			if tt.expectError {
				assert.Error(t, err)
				assert.Equal(t, "", result)
			} else {
				assert.NoError(t, err)
				assert.Equal(t, tt.expected, result)
			}
		})
	}
}

func TestMapAlpacaOrderToInternal(t *testing.T) {
	tests := []struct {
		name           string
		filename       string
		expected       *ordergrpc.BrokerOrderDetails
		expectingError bool
	}{
		{
			name:     "SDK Response - Pending New Order",
			filename: "alpaca_order_sdk_response.JSON",
			expected: &ordergrpc.BrokerOrderDetails{
				BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
				ClientOrderID: &ordergrpc.ClientOrderID{
					OrderID:           79,
					SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           "testnet",
				},
				SubmittedAt:    timestamppb.New(time.Unix(0, 0)),
				FilledAt:       nil,
				ExpiredAt:      nil,
				CancelledAt:    nil,
				FailedAt:       nil,
				CreatedAt:      timestamppb.New(time.Unix(0, 0)),
				UpdatedAt:      timestamppb.New(time.Unix(0, 0)),
				AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
				Symbol:         "PLTR",
				AssetClass:     ordergrpc.AssetClass_US_EQUITY,
				OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
				Type:           ordergrpc.TradeType_MARKET,
				Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
				TimeInForce:    ordergrpc.TimeInForce_DAY,
				Status:         ordergrpc.BrokerOrderStatus_PENDING_NEW, // Added status
				Notional:       nil,
				OrderQty:       &utildecimal.Decimal{Value: 15, Exp: 0},
				FilledQty:      &utildecimal.Decimal{Value: 0, Exp: 0},
				FilledAvgPrice: nil,
				LimitPrice:     nil,
				StopPrice:      nil,
				TrailPrice:     nil,
				TrailPercent:   nil,
				HWM:            nil,
				ExtendedHours:  false,
				TotalPosition:  nil,
				PartialPrice:   nil,
				PartialQty:     nil,
			},
			expectingError: false,
		},
		{
			name:     "TradeUpdate Pending New",
			filename: "alpaca_order_tradeupdate_pending_new.JSON",
			expected: &ordergrpc.BrokerOrderDetails{
				BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
				ClientOrderID: &ordergrpc.ClientOrderID{
					OrderID:           79,
					SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           "testnet",
				},
				SubmittedAt:    timestamppb.New(time.Unix(0, 0)),
				FilledAt:       nil,
				ExpiredAt:      nil,
				CancelledAt:    nil,
				FailedAt:       nil,
				CreatedAt:      timestamppb.New(time.Unix(0, 0)),
				UpdatedAt:      timestamppb.New(time.Unix(0, 0)),
				AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
				Symbol:         "PLTR",
				AssetClass:     ordergrpc.AssetClass_US_EQUITY,
				OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
				Type:           ordergrpc.TradeType_MARKET,
				Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
				TimeInForce:    ordergrpc.TimeInForce_DAY,
				Status:         ordergrpc.BrokerOrderStatus_PENDING_NEW, // Added status
				Notional:       nil,
				OrderQty:       &utildecimal.Decimal{Value: 15, Exp: 0},
				FilledQty:      &utildecimal.Decimal{Value: 0, Exp: 0},
				FilledAvgPrice: nil,
				LimitPrice:     nil,
				StopPrice:      nil,
				TrailPrice:     nil,
				TrailPercent:   nil,
				HWM:            nil,
				ExtendedHours:  false,
				TotalPosition:  nil,
				PartialPrice:   nil,
				PartialQty:     nil,
			},
			expectingError: false,
		},
		{
			name:     "TradeUpdate New",
			filename: "alpaca_order_tradeupdate_new.JSON",
			expected: &ordergrpc.BrokerOrderDetails{
				BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
				ClientOrderID: &ordergrpc.ClientOrderID{
					OrderID:           79,
					SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           "testnet",
				},
				SubmittedAt:    timestamppb.New(time.Unix(0, 0)),
				FilledAt:       nil,
				ExpiredAt:      nil,
				CancelledAt:    nil,
				FailedAt:       nil,
				CreatedAt:      timestamppb.New(time.Unix(0, 0)),
				UpdatedAt:      timestamppb.New(time.Unix(0, 0)),
				AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
				Symbol:         "PLTR",
				AssetClass:     ordergrpc.AssetClass_US_EQUITY,
				OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
				Type:           ordergrpc.TradeType_MARKET,
				Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
				TimeInForce:    ordergrpc.TimeInForce_DAY,
				Status:         ordergrpc.BrokerOrderStatus_NEW,
				Notional:       nil,
				OrderQty:       &utildecimal.Decimal{Value: 15, Exp: 0},
				FilledQty:      &utildecimal.Decimal{Value: 0, Exp: 0},
				FilledAvgPrice: nil,
				LimitPrice:     nil,
				StopPrice:      nil,
				TrailPrice:     nil,
				TrailPercent:   nil,
				HWM:            nil,
				ExtendedHours:  false,
				TotalPosition:  nil,
				PartialPrice:   nil,
				PartialQty:     nil,
			},
			expectingError: false,
		},
		{
			name:     "TradeUpdate Fill",
			filename: "alpaca_order_tradeupdate_fill.JSON",
			expected: &ordergrpc.BrokerOrderDetails{
				BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
				ClientOrderID: &ordergrpc.ClientOrderID{
					OrderID:           79,
					SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           "testnet",
				},
				SubmittedAt:    timestamppb.New(time.Unix(0, 0)),
				FilledAt:       timestamppb.New(time.Unix(0, 0)),
				ExpiredAt:      nil,
				CancelledAt:    nil,
				FailedAt:       nil,
				CreatedAt:      timestamppb.New(time.Unix(0, 0)),
				UpdatedAt:      timestamppb.New(time.Unix(0, 0)),
				AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
				Symbol:         "PLTR",
				AssetClass:     ordergrpc.AssetClass_US_EQUITY,
				OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
				Type:           ordergrpc.TradeType_MARKET,
				Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
				TimeInForce:    ordergrpc.TimeInForce_DAY,
				Status:         ordergrpc.BrokerOrderStatus_FILLED,
				Notional:       nil,
				OrderQty:       &utildecimal.Decimal{Value: 15, Exp: 0},
				FilledQty:      &utildecimal.Decimal{Value: 15, Exp: 0},
				FilledAvgPrice: &utildecimal.Decimal{Value: 3733, Exp: -2},
				LimitPrice:     nil,
				StopPrice:      nil,
				TrailPrice:     nil,
				TrailPercent:   nil,
				HWM:            nil,
				ExtendedHours:  false,
				TotalPosition:  &utildecimal.Decimal{Value: 734, Exp: 0},
				PartialPrice:   &utildecimal.Decimal{Value: 3733, Exp: -2},
				PartialQty:     &utildecimal.Decimal{Value: 1, Exp: 0},
			},
			expectingError: false,
		},
		{
			name:     "TradeUpdate Fill Sell",
			filename: "alpaca_order_tradeupdate_fill_sell.JSON",
			expected: &ordergrpc.BrokerOrderDetails{
				BrokerAssignedID: "bbcdaa7d-ecdf-46e4-ae6b-c368c9f41598",
				ClientOrderID: &ordergrpc.ClientOrderID{
					OrderID:           79,
					SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           "testnet",
				},
				SubmittedAt:    timestamppb.New(time.Unix(0, 0)),
				FilledAt:       timestamppb.New(time.Unix(0, 0)),
				ExpiredAt:      nil,
				CancelledAt:    nil,
				FailedAt:       nil,
				CreatedAt:      timestamppb.New(time.Unix(0, 0)),
				UpdatedAt:      timestamppb.New(time.Unix(0, 0)),
				AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
				Symbol:         "PLTR",
				AssetClass:     ordergrpc.AssetClass_US_EQUITY,
				OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
				Type:           ordergrpc.TradeType_MARKET,
				Side:           ordergrpc.OrderType_ORDER_TYPE_SELL,
				TimeInForce:    ordergrpc.TimeInForce_DAY,
				Status:         ordergrpc.BrokerOrderStatus_FILLED,
				Notional:       nil,
				OrderQty:       &utildecimal.Decimal{Value: 5, Exp: 0},
				FilledQty:      &utildecimal.Decimal{Value: 5, Exp: 0},
				FilledAvgPrice: &utildecimal.Decimal{Value: 3728, Exp: -2},
				LimitPrice:     nil,
				StopPrice:      nil,
				TrailPrice:     nil,
				TrailPercent:   nil,
				HWM:            nil,
				ExtendedHours:  false,
				TotalPosition:  &utildecimal.Decimal{Value: 1298, Exp: 0},
				PartialPrice:   &utildecimal.Decimal{Value: 3728, Exp: -2},
				PartialQty:     &utildecimal.Decimal{Value: 1, Exp: 0},
			},
			expectingError: false,
		},
		{
			name:     "TradeUpdate Partial Fill",
			filename: "alpaca_order_tradeupdate_partial_fill.JSON",
			expected: &ordergrpc.BrokerOrderDetails{
				BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
				ClientOrderID: &ordergrpc.ClientOrderID{
					OrderID:           79,
					SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           "testnet",
				},
				SubmittedAt:    timestamppb.New(time.Unix(0, 0)),
				FilledAt:       timestamppb.New(time.Unix(0, 0)),
				ExpiredAt:      nil,
				CancelledAt:    nil,
				FailedAt:       nil,
				CreatedAt:      timestamppb.New(time.Unix(0, 0)),
				UpdatedAt:      timestamppb.New(time.Unix(0, 0)),
				AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
				Symbol:         "PLTR",
				AssetClass:     ordergrpc.AssetClass_US_EQUITY,
				OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
				Type:           ordergrpc.TradeType_MARKET,
				Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
				TimeInForce:    ordergrpc.TimeInForce_DAY,
				Status:         ordergrpc.BrokerOrderStatus_PARTIALLY_FILLED,
				Notional:       nil,
				OrderQty:       &utildecimal.Decimal{Value: 15, Exp: 0},
				FilledQty:      &utildecimal.Decimal{Value: 14, Exp: 0},
				FilledAvgPrice: &utildecimal.Decimal{Value: 3733, Exp: -2},
				LimitPrice:     nil,
				StopPrice:      nil,
				TrailPrice:     nil,
				TrailPercent:   nil,
				HWM:            nil,
				ExtendedHours:  false,
				TotalPosition:  &utildecimal.Decimal{Value: 733, Exp: 0},
				PartialPrice:   &utildecimal.Decimal{Value: 3733, Exp: -2},
				PartialQty:     &utildecimal.Decimal{Value: 14, Exp: 0},
			},
			expectingError: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			ar, err := loadAlpacaResponse(tt.filename)
			if err != nil {
				t.Fatalf("Failed to load Alpaca response: %v", err)
			}

			actual, err := MapAlpacaOrderToInternal(ar)
			if tt.expectingError {
				assert.Error(t, err)
				return
			}
			actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
			actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
			actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
			if actual.FilledAt != nil {
				actual.FilledAt = timestamppb.New(time.Unix(0, 0))
			}

			assert.NoError(t, err)
			assert.NotNil(t, actual)
			assertEventsEquality(t, tt.expected, actual)
		})
	}
}

func loadAlpacaResponse(filename string) (*AlpacaResponse, error) {
	file, err := filepath.Abs(filepath.Join(testDataRoot, filename))
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path for file %s: %v", filename, err)
	}

	b, err := os.ReadFile(file)
	if err != nil {
		return nil, fmt.Errorf("failed to open file %s: %v", filename, err)
	}

	var raw map[string]interface{}
	if err := json.Unmarshal(b, &raw); err != nil {
		return nil, fmt.Errorf("failed to decode JSON from file %s: %v", file, err)
	}

	ar := &AlpacaResponse{}

	// Determine if it's a TradeUpdate or Order response
	// Check for event field presence and non-empty value
	if event, ok := raw["event"].(string); ok && event != "" {
		var tu alpaca.TradeUpdate
		if err := json.Unmarshal(b, &tu); err != nil {
			return nil, fmt.Errorf("failed to decode TradeUpdate from file %s: %v", file, err)
		}
		ar.TradeUpdate = &tu
		return ar, nil
	}

	var order alpaca.Order
	// Unmarshal the "order" field directly
	orderData, err := json.Marshal(raw["order"])
	if err != nil {
		return nil, fmt.Errorf("failed to marshal order data: %v", err)
	}
	if err := json.Unmarshal(orderData, &order); err != nil {
		return nil, fmt.Errorf("failed to decode Order from file %s: %v", file, err)
	}
	ar.Order = &order

	return ar, nil
}

func TestParseInternalClientOrderIDToStr(t *testing.T) {
	tests := []struct {
		name          string
		clientOrderID *ordergrpc.ClientOrderID
		expected      string
		expectPanic   bool
	}{
		{
			name: "Valid ClientOrderID",
			clientOrderID: &ordergrpc.ClientOrderID{
				OrderID:           12345,
				SmartContractAddr: "testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
				Network:           "mainnet",
			},
			expected:    "12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-mainnet",
			expectPanic: false,
		},
		{
			name: "All Fields Empty",
			clientOrderID: &ordergrpc.ClientOrderID{
				OrderID:           0,
				SmartContractAddr: "",
				Network:           "",
			},
			expected:    "0--",
			expectPanic: false,
		},
		{
			name:          "Nil ClientOrderID",
			clientOrderID: nil,
			expected:      "",
			expectPanic:   true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if tt.expectPanic {
				assert.Panics(t, func() {
					ParseInternalClientOrderIDToStr(tt.clientOrderID)
				}, "The code did not panic")
			} else {
				result := ParseInternalClientOrderIDToStr(tt.clientOrderID)
				assert.Equal(t, tt.expected, result)
			}
		})
	}
}

func TestParseStrClientOrderIDToInternal(t *testing.T) {
	tests := []struct {
		name             string
		clientOrderIDStr string
		expected         *ordergrpc.ClientOrderID
		expectError      bool
	}{
		{
			name:             "Valid ClientOrderID",
			clientOrderIDStr: "12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-mainnet",
			expected: &ordergrpc.ClientOrderID{
				OrderID:           12345,
				SmartContractAddr: "testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
				Network:           "mainnet",
			},
			expectError: false,
		},
		{
			name:             "Invalid format: less than 3 parts",
			clientOrderIDStr: "12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
			expected:         nil,
			expectError:      true,
		},
		{
			name:             "Invalid format: more than 3 parts",
			clientOrderIDStr: "12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-mainnet-extra",
			expected:         nil,
			expectError:      true,
		},
		{
			name:             "Invalid OrderID: non-integer",
			clientOrderIDStr: "abc-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-mainnet",
			expected:         nil,
			expectError:      true,
		},
		{
			name:             "All Fields Empty",
			clientOrderIDStr: "0--",
			expected: &ordergrpc.ClientOrderID{
				OrderID:           0,
				SmartContractAddr: "",
				Network:           "",
			},
			expectError: false,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			result, err := ParseStrClientOrderIDToInternal(tt.clientOrderIDStr)
			if tt.expectError {
				assert.Error(t, err)
				assert.Nil(t, result)
			} else {
				assert.NoError(t, err)
				assert.Equal(t, tt.expected, result)
			}
		})
	}
}
