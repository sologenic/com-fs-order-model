package alpaca

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"testing"
	"time"

	"github.com/google/go-cmp/cmp"
	"github.com/google/go-cmp/cmp/cmpopts"
	assetgrpc "github.com/sologenic/com-fs-asset-model"
	ordergrpc "github.com/sologenic/com-fs-order-model"
	dmn "github.com/sologenic/com-fs-order-model/domain"
	ordergrpcdmn "github.com/sologenic/com-fs-order-model/domain"
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
				result := dmn.GetOrderKeyStrFromOrder(order)
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
				result := dmn.GetOrderKeyStrFromOrder(order)
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
				result := dmn.GetOrderKeyStrFromOrder(order)
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
				result := dmn.GetOrderKeyStrFromOrder(order)
				expected := "22222-0xGHI789-3"
				assert.Equal(t, expected, result)
			},
		},
	}
	unittest.RunTests(t, tests)
}

func TestMapBrokerOrderToInternal(t *testing.T) {
	tests := []unittest.TestBase{
		{
			Name: "SDK Response - Pending New Order",
			Test: func(t *testing.T) {
				ar, err := loadBrokerTradeEvent("alpaca_order_sdk_response.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapBrokerOrderToInternal(ar)
				assert.NoError(t, err)

				eventID := ""
				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
					},
					SubmittedAt:    actual.SubmittedAt,
					FilledAt:       actual.FilledAt,
					ExpiredAt:      actual.ExpiredAt,
					CancelledAt:    actual.CancelledAt,
					FailedAt:       actual.FailedAt,
					CreatedAt:      actual.CreatedAt,
					UpdatedAt:      actual.UpdatedAt,
					AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
					Symbol:         "PLTR",
					AssetClass:     assetgrpc.AssetType_STOCKS,
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
					ClearingBroker: ordergrpc.ClearingBroker_ALPACA,
					Commission:     &utildecimal.Decimal{Value: 0, Exp: 0},
					EventID:        &eventID,
					EventTime:      actual.EventTime,
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
				ar, err := loadBrokerTradeEvent("alpaca_order_tradeupdate_pending_new.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapBrokerOrderToInternal(ar)
				assert.NoError(t, err)

				eventID := "01K48BG2DAGGQ4ZRZE2BTKD2CF"
				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a6aa1920-7b1e-40e5-82f2-380817b6297c",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           763,
						SmartContractAddr: "testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28",
						Network:           metadatagrpc.Network_TESTNET,
					},
					SubmittedAt:    actual.SubmittedAt,
					FilledAt:       actual.FilledAt,
					ExpiredAt:      actual.ExpiredAt,
					CancelledAt:    actual.CancelledAt,
					FailedAt:       actual.FailedAt,
					CreatedAt:      actual.CreatedAt,
					UpdatedAt:      actual.UpdatedAt,
					AssetID:        "f801f835-bfe6-4a9d-a6b1-ccbb84bfd75f",
					Symbol:         "AMZN",
					AssetClass:     assetgrpc.AssetType_STOCKS,
					OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
					Type:           ordergrpc.TradeType_MARKET,
					Side:           ordergrpc.OrderType_ORDER_TYPE_SELL,
					TimeInForce:    ordergrpc.TimeInForce_DAY,
					Status:         ordergrpc.BrokerOrderStatus_PENDING_NEW,
					Notional:       nil,
					OrderQty:       &utildecimal.Decimal{Value: 1, Exp: 0},
					FilledQty:      &utildecimal.Decimal{Value: 0, Exp: 0},
					FilledAvgPrice: nil,
					LimitPrice:     nil,
					StopPrice:      nil,
					TrailPrice:     nil,
					TrailPercent:   nil,
					HWM:            nil,
					ExtendedHours:  false,
					ClearingBroker: ordergrpc.ClearingBroker_ALPACA,
					Commission:     &utildecimal.Decimal{Value: 0, Exp: 0},
					EventID:        &eventID,
					EventTime:      actual.EventTime,
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
				ar, err := loadBrokerTradeEvent("alpaca_order_tradeupdate_new.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapBrokerOrderToInternal(ar)
				assert.NoError(t, err)

				eventID := "01K48BG2DHP1YKZ90B1MHXWJDX"
				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a6aa1920-7b1e-40e5-82f2-380817b6297c",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           763,
						SmartContractAddr: "testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28",
						Network:           metadatagrpc.Network_TESTNET,
					},
					SubmittedAt:    actual.SubmittedAt,
					FilledAt:       actual.FilledAt,
					ExpiredAt:      actual.ExpiredAt,
					CancelledAt:    actual.CancelledAt,
					FailedAt:       actual.FailedAt,
					CreatedAt:      actual.CreatedAt,
					UpdatedAt:      actual.UpdatedAt,
					AssetID:        "f801f835-bfe6-4a9d-a6b1-ccbb84bfd75f",
					Symbol:         "AMZN",
					AssetClass:     assetgrpc.AssetType_STOCKS,
					OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
					Type:           ordergrpc.TradeType_MARKET,
					Side:           ordergrpc.OrderType_ORDER_TYPE_SELL,
					TimeInForce:    ordergrpc.TimeInForce_DAY,
					Status:         ordergrpc.BrokerOrderStatus_NEW,
					Notional:       nil,
					OrderQty:       &utildecimal.Decimal{Value: 1, Exp: 0},
					FilledQty:      &utildecimal.Decimal{Value: 0, Exp: 0},
					FilledAvgPrice: nil,
					LimitPrice:     nil,
					StopPrice:      nil,
					TrailPrice:     nil,
					TrailPercent:   nil,
					HWM:            nil,
					ExtendedHours:  false,
					ClearingBroker: ordergrpc.ClearingBroker_ALPACA,
					Commission:     &utildecimal.Decimal{Value: 0, Exp: 0},
					EventID:        &eventID,
					EventTime:      actual.EventTime,
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
				ar, err := loadBrokerTradeEvent("alpaca_order_tradeupdate_fill.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapBrokerOrderToInternal(ar)
				assert.NoError(t, err)

				eventID := "01K48FXADDWS7SS3QJ3FKRZFXT"
				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "4d6cde13-c4d1-49ce-8c47-365393f84ea5",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           765,
						SmartContractAddr: "testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28",
						Network:           metadatagrpc.Network_TESTNET,
					},
					SubmittedAt:    actual.SubmittedAt,
					FilledAt:       actual.FilledAt,
					ExpiredAt:      actual.ExpiredAt,
					CancelledAt:    actual.CancelledAt,
					FailedAt:       actual.FailedAt,
					CreatedAt:      actual.CreatedAt,
					UpdatedAt:      actual.UpdatedAt,
					AssetID:        "f801f835-bfe6-4a9d-a6b1-ccbb84bfd75f",
					Symbol:         "AMZN",
					AssetClass:     assetgrpc.AssetType_STOCKS,
					OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
					Type:           ordergrpc.TradeType_MARKET,
					Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
					TimeInForce:    ordergrpc.TimeInForce_DAY,
					Status:         ordergrpc.BrokerOrderStatus_FILLED,
					Notional:       nil,
					OrderQty:       &utildecimal.Decimal{Value: 1, Exp: 0},
					FilledQty:      &utildecimal.Decimal{Value: 1, Exp: 0},
					FilledAvgPrice: &utildecimal.Decimal{Value: 22461, Exp: -2},
					LimitPrice:     nil,
					StopPrice:      nil,
					TrailPrice:     nil,
					TrailPercent:   nil,
					HWM:            nil,
					ExtendedHours:  false,
					ClearingBroker: ordergrpc.ClearingBroker_ALPACA,
					Commission:     &utildecimal.Decimal{Value: 0, Exp: 0},
					EventID:        &eventID,
					EventTime:      actual.EventTime,
					TotalPosition:  &utildecimal.Decimal{Value: 13, Exp: 0},
					PartialPrice:   &utildecimal.Decimal{Value: 22461, Exp: -2},
					PartialQty:     &utildecimal.Decimal{Value: 1, Exp: 0},
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate Fill Sell",
			Test: func(t *testing.T) {
				ar, err := loadBrokerTradeEvent("alpaca_order_tradeupdate_fill_sell.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapBrokerOrderToInternal(ar)
				assert.NoError(t, err)

				eventID := "01K48B9VGN9T7JGSF76JD5WPQA"
				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a60217ce-020f-4a3e-bfae-a9a6b6165d90",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           762,
						SmartContractAddr: "testcore13s2mmgg4uu4fn8mue6s3lgn74jwdupndjtqah8uxufugtajkeq2qgznc28",
						Network:           metadatagrpc.Network_TESTNET,
					},
					SubmittedAt:    actual.SubmittedAt,
					FilledAt:       actual.FilledAt,
					ExpiredAt:      actual.ExpiredAt,
					CancelledAt:    actual.CancelledAt,
					FailedAt:       actual.FailedAt,
					CreatedAt:      actual.CreatedAt,
					UpdatedAt:      actual.UpdatedAt,
					AssetID:        "f801f835-bfe6-4a9d-a6b1-ccbb84bfd75f",
					Symbol:         "AMZN",
					AssetClass:     assetgrpc.AssetType_STOCKS,
					OrderClass:     ordergrpc.OrderClass_NOT_USED_ORDER_CLASS,
					Type:           ordergrpc.TradeType_MARKET,
					Side:           ordergrpc.OrderType_ORDER_TYPE_PURCHASE,
					TimeInForce:    ordergrpc.TimeInForce_DAY,
					Status:         ordergrpc.BrokerOrderStatus_FILLED,
					Notional:       nil,
					OrderQty:       &utildecimal.Decimal{Value: 1, Exp: 0},
					FilledQty:      &utildecimal.Decimal{Value: 1, Exp: 0},
					FilledAvgPrice: &utildecimal.Decimal{Value: 22518, Exp: -2},
					LimitPrice:     nil,
					StopPrice:      nil,
					TrailPrice:     nil,
					TrailPercent:   nil,
					HWM:            nil,
					ExtendedHours:  false,
					ClearingBroker: ordergrpc.ClearingBroker_ALPACA,
					Commission:     &utildecimal.Decimal{Value: 0, Exp: 0},
					EventID:        &eventID,
					EventTime:      actual.EventTime,
					TotalPosition:  &utildecimal.Decimal{Value: 14, Exp: 0},
					PartialPrice:   &utildecimal.Decimal{Value: 22518, Exp: -2},
					PartialQty:     &utildecimal.Decimal{Value: 1, Exp: 0},
				}
				assertEventsEquality(t, expected, actual)
			},
		},
		{
			Name: "TradeUpdate Partial Fill",
			Test: func(t *testing.T) {
				ar, err := loadBrokerTradeEvent("alpaca_order_tradeupdate_partial_fill.JSON")
				if err != nil {
					t.Fatalf("Failed to load Alpaca response: %v", err)
				}
				actual, err := MapBrokerOrderToInternal(ar)
				assert.NoError(t, err)

				eventID := "01J972F41REXTXAV881RA8D4PV"
				expected := &ordergrpc.BrokerOrderDetails{
					BrokerAssignedID: "a156d5c6-3f67-4721-bcd2-9031b393177a",
					ClientOrderID: &ordergrpc.ClientOrderID{
						OrderID:           79,
						SmartContractAddr: "testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e",
						Network:           metadatagrpc.Network_TESTNET,
					},
					SubmittedAt:    actual.SubmittedAt,
					FilledAt:       actual.FilledAt,
					ExpiredAt:      actual.ExpiredAt,
					CancelledAt:    actual.CancelledAt,
					FailedAt:       actual.FailedAt,
					CreatedAt:      actual.CreatedAt,
					UpdatedAt:      actual.UpdatedAt,
					AssetID:        "80e04a93-e1a8-4503-ab61-2ef1992650b4",
					Symbol:         "PLTR",
					AssetClass:     assetgrpc.AssetType_STOCKS,
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
					ClearingBroker: ordergrpc.ClearingBroker_ALPACA,
					Commission:     &utildecimal.Decimal{Value: 0, Exp: 0},
					EventID:        &eventID,
					EventTime:      actual.EventTime,
					TotalPosition:  nil,
					PartialPrice:   nil,
					PartialQty:     nil,
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
				result := ordergrpcdmn.ParseInternalClientOrderIDToStr(clientOrderID)
				expected := "12345-testcore1cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e-2"
				assert.Equal(t, expected, result)
			},
		},

		{
			Name: "Nil ClientOrderID",
			Test: func(t *testing.T) {
				assert.Panics(t, func() {
					ordergrpcdmn.ParseInternalClientOrderIDToStr(nil)
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

func loadBrokerTradeEvent(filename string) (*BrokerResponse, error) {
	file, err := filepath.Abs(filepath.Join(testDataRoot, filename))
	if err != nil {
		return nil, fmt.Errorf("failed to get absolute path for file %s: %v", filename, err)
	}

	b, err := os.ReadFile(file)
	if err != nil {
		return nil, fmt.Errorf("failed to open file %s: %v", filename, err)
	}

	var bte BrokerTradeEvent
	if err := json.Unmarshal(b, &bte); err != nil {
		return nil, fmt.Errorf("failed to decode BrokerTradeEvent from file %s: %v", file, err)
	}

	return &BrokerResponse{
		BrokerTradeEvent: &bte,
	}, nil
}
