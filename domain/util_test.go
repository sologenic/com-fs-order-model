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
	"github.com/sologenic/com-fs-utils-lib/go/unittest"
	metadatagrpc "github.com/sologenic/com-fs-utils-lib/models/metadata"
	"github.com/stretchr/testify/assert"
	"google.golang.org/protobuf/types/known/timestamppb"
)

const testDataRoot = "test"

// TestGetOrderKeyStrFromOrder tests the GetOrderKeyStrFromOrder function.
func TestGetOrderKeyStrFromOrder(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid Order",
			Test: func(t *testing.T) {
				order := &ordergrpc.Order{
					Instruction: &ordergrpc.OrderInstruction{
						OrderID: 12345,
					},
					SmartContractAddr: "0xABC123",
					Network:           metadatagrpc.Network_MAINNET,
				}
				result := GetOrderKeyStrFromOrder(order)
				expected := "12345-0xABC123-1"
				assert.Equal(t, expected, result)
			},
		},
		{
			Name: "Empty SmartContractAddr",
			Test: func(t *testing.T) {
				order := &ordergrpc.Order{
					Instruction: &ordergrpc.OrderInstruction{
						OrderID: 67890,
					},
					SmartContractAddr: "",
					Network:           metadatagrpc.Network_TESTNET,
				}
				result := GetOrderKeyStrFromOrder(order)
				expected := "67890--2"
				assert.Equal(t, expected, result)
			},
		},
		{
			Name: "Invalid Network",
			Test: func(t *testing.T) {
				order := &ordergrpc.Order{
					Instruction: &ordergrpc.OrderInstruction{
						OrderID: 11111,
					},
					SmartContractAddr: "0xDEF456",
					Network:           metadatagrpc.Network_NETWORK_DO_NOT_USE,
				}
				result := GetOrderKeyStrFromOrder(order)
				expected := "11111-0xDEF456-0"
				assert.Equal(t, expected, result)
			},
		},
		{
			Name: "Devnet",
			Test: func(t *testing.T) {
				order := &ordergrpc.Order{
					Instruction: &ordergrpc.OrderInstruction{
						OrderID: 22222,
					},
					SmartContractAddr: "0xGHI789",
					Network:           metadatagrpc.Network_DEVNET,
				}
				result := GetOrderKeyStrFromOrder(order)
				expected := "22222-0xGHI789-3"
				assert.Equal(t, expected, result)
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestMapAlpacaOrderToInternal(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "SDK Response - Pending New Order",
			Test: func(t *testing.T) {
				ar, err := loadAlpacaResponse("alpaca_order_sdk_response.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapAlpacaOrderToInternal(ar)
				assert.NoError(t, err)

				actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
				actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
				actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
				if actual.FilledAt != nil {
					actual.FilledAt = timestamppb.New(time.Unix(0, 0))
				}

				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
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
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate Pending New",
			Test: func(t *testing.T) {
				ar, err := loadAlpacaResponse("alpaca_order_tradeupdate_pending_new.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapAlpacaOrderToInternal(ar)
				assert.NoError(t, err)

				actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
				actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
				actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
				if actual.FilledAt != nil {
					actual.FilledAt = timestamppb.New(time.Unix(0, 0))
				}

				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
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
					Status:         ordergrpc.BrokerOrderStatus_PENDING_NEW,
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
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate New",
			Test: func(t *testing.T) {
				ar, err := loadAlpacaResponse("alpaca_order_tradeupdate_new.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapAlpacaOrderToInternal(ar)
				assert.NoError(t, err)

				actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
				actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
				actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
				if actual.FilledAt != nil {
					actual.FilledAt = timestamppb.New(time.Unix(0, 0))
				}

				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
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
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate Fill",
			Test: func(t *testing.T) {
				ar, err := loadAlpacaResponse("alpaca_order_tradeupdate_fill.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapAlpacaOrderToInternal(ar)
				assert.NoError(t, err)

				actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
				actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
				actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
				if actual.FilledAt != nil {
					actual.FilledAt = timestamppb.New(time.Unix(0, 0))
				}

				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
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
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate Fill Sell",
			Test: func(t *testing.T) {
				ar, err := loadAlpacaResponse("alpaca_order_tradeupdate_fill_sell.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapAlpacaOrderToInternal(ar)
				assert.NoError(t, err)

				actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
				actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
				actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
				if actual.FilledAt != nil {
					actual.FilledAt = timestamppb.New(time.Unix(0, 0))
				}

				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "bbcdaa7d-ecdf-46e4-ae6b-c368c9f41598",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
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
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate Partial Fill",
			Test: func(t *testing.T) {
				ar, err := loadAlpacaResponse("alpaca_order_tradeupdate_partial_fill.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapAlpacaOrderToInternal(ar)
				assert.NoError(t, err)

				actual.CreatedAt = timestamppb.New(time.Unix(0, 0))
				actual.UpdatedAt = timestamppb.New(time.Unix(0, 0))
				actual.SubmittedAt = timestamppb.New(time.Unix(0, 0))
				if actual.FilledAt != nil {
					actual.FilledAt = timestamppb.New(time.Unix(0, 0))
				}

				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
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
				}
				assertEventsEquality(t, expected, actual)
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestParseInternalClientOrderIDToStr(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid ClientOrderID",
			Test: func(t *testing.T) {
				clientOrderID := &ordergrpc.ClientOrderID{
					OrderID:           12345,
					SmartContractAddr: "testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           metadatagrpc.Network_TESTNET,
				}
				result := ParseInternalClientOrderIDToStr(clientOrderID)
				expected := "12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-2"
				assert.Equal(t, expected, result)
			},
		},
		{
			Name: "Nil ClientOrderID",
			Test: func(t *testing.T) {
				assert.Panics(t, func() {
					ParseInternalClientOrderIDToStr(nil)
				}, "The code did not panic")
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestParseStrClientOrderIDToInternal(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "Valid ClientOrderID",
			Test: func(t *testing.T) {
				result, err := ParseStrClientOrderIDToInternal("12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-1")
				assert.NoError(t, err)
				expected := &ordergrpc.ClientOrderID{
					OrderID:           12345,
					SmartContractAddr: "testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
					Network:           metadatagrpc.Network_MAINNET,
				}
				assert.Equal(t, expected, result)
			},
		},
		{
			Name: "Invalid format: less than 3 parts",
			Test: func(t *testing.T) {
				result, err := ParseStrClientOrderIDToInternal("12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e")
				assert.Error(t, err)
				assert.Nil(t, result)
			},
		},
		{
			Name: "Invalid format: more than 3 parts",
			Test: func(t *testing.T) {
				result, err := ParseStrClientOrderIDToInternal("12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-1-extra")
				assert.Error(t, err)
				assert.Nil(t, result)
			},
		},
		{
			Name: "Invalid OrderID: non-integer",
			Test: func(t *testing.T) {
				result, err := ParseStrClientOrderIDToInternal("abc-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-1")
				assert.Error(t, err)
				assert.Nil(t, result)
			},
		},
		{
			Name: "All Fields Empty",
			Test: func(t *testing.T) {
				result, err := ParseStrClientOrderIDToInternal("0--")
				assert.Error(t, err)
				assert.Nil(t, result)
			},
		},
	}
	unittest.RunTests(t, tests)
}

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
