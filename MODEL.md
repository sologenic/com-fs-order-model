# Order Documentation

## Table of Contents

- [attestation.proto](#attestation)
- [broker.proto](#broker)
- [order.proto](#order)
- [util.proto](#util)

## Overview

The Order provides data structures and definitions for managing order within the system.

## attestation.proto {#attestation}

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `attestation.proto` file defines the Attestation model.

### Messages

#### Attestation

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Attestations | `Attestation` | 1 |  |
| Offset | `int32` | 2 |  |

## broker.proto {#broker}

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `broker.proto` file defines the Broker model.

### Messages

#### BrokerOrderDetails

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| OrderClass | `OrderClass` | 11 |  |
| Type | `TradeType` | 12 |  |
| Side | `OrderType` | 13 |  |
| TimeInForce | `TimeInForce` | 14 |  |
| Notional | `Decimal` | 15 |  |
| OrderQty | `Decimal` | 16 |  |
| FilledQty | `Decimal` | 17 |  |
| FilledAvgPrice | `Decimal` | 18 |  |
| LimitPrice | `Decimal` | 19 |  |
| StopPrice | `Decimal` | 20 |  |
| TrailPrice | `Decimal` | 21 |  |
| TrailPercent | `Decimal` | 22 |  |
| HWM | `Decimal` | 23 |  |
| ExtendedHours | `bool` | 24 |  |
| CreatedAt | `Timestamp` | 25 |  |
| UpdatedAt | `Timestamp` | 26 |  |
| Status | `BrokerOrderStatus` | 27 |  |
| TotalPosition | `Decimal` | 28 |  |
| PartialPrice | `Decimal` | 29 |  |
| PartialQty | `Decimal` | 30 |  |
| ProcessInfo | `ProcessInfo` | 31 |  |
| InstanceID | `string` | 32 |  |
| ClearingBroker | `ClearingBroker` | 33 |  |
| EventID | `string` | 36 |  |
| EventTime | `Timestamp` | 37 |  |
| CommissionSettings | `CommissionSettings` | 38 |  |

#### ClientOrderID

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Network | `Network` | 1 |  |
| SmartContractAddr | `string` | 2 |  |
| OrderID | `int64` | 3 |  |

#### BrokerOrderDetailsList

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| BrokerOrderDetailsList | `BrokerOrderDetails` | 1 |  |

## order.proto {#order}

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `order.proto` file defines the Order model.

### Messages

#### Order

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| InternalOrderState | `State` | 12 |  |
| BrokerOrderDetails | `BrokerOrderDetails` | 13 |  |
| ProcessInfo | `ProcessInfo` | 14 |  |
| InstanceID | `string` | 15 |  |
| BlockTime | `Timestamp` | 16 |  |
| Sequence | `int64` | 17 |  |
| OrganizationID | `string` | 18 |  |
| UserID | `string` | 19 |  |

#### OrderInstruction

No fields defined.

#### Orders

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Orders | `Order` | 1 |  |
| Offset | `int32` | 2 |  |

#### Hold

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Denom | `string` | 1 |  |
| Amount | `int64` | 2 |  |
| AmountExp | `int32` | 3 |  |

#### Coin

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| Denom | `string` | 1 |  |
| Amount | `int64` | 2 |  |

#### OrderState

**Field Table:**

| Field Name | Type | Number | Description |
|------------|------|--------|-------------|
| SMART_CONTRACT_NEW_ORDER_CREATED | `contract` | 1 |  |
| BROKER_ORDER_PRE_SUBMITTED | `states` | 2 |  |
| BROKER_ORDER_SUBMITTED | `processing` | 3 |  |
| BROKER_ORDER_ACCEPTED | `processing` | 4 |  |
| BROKER_ORDER_CANCELED | `broker` | 14 |  |
| BROKER_ORDER_EXPIRED | `it` | 16 |  |
| SMART_CONTRACT_CANCEL_ORDER_REQUESTED | `scenarios` | 20 |  |

### Enums

#### TransactionType

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| LimitPriceExp | 7 |  |
| FillOrKill | 8 |  |
| ExpiresAt | 9 |  |
| OrderDetailType | 10 |  |
| Hold | 11 |  |
| FundsSent | 12 |  |
| OrderType | 13 |  |
| OrderState | 14 |  |
| PaymentState | 15 |  |
| AmountExecuted | 16 |  |
| AmountExecutedExp | 17 |  |
| UsedFundsAmount | 18 |  |
| UsedFundsAmountExp | 19 |  |
| Costs | 20 |  |
| CostsExp | 21 |  |
| TimeInForce | 22 |  |
| LimitPriceFloat | 23 |  |
| Receiver | 24 |  |

#### OrderStateType

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| Y | 0 |  |
| SMART_CONTRACT_OWNER | 1 |  |
| USER | 2 |  |
| BROKER_ORACLE | 3 |  |

#### PaymentState

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_APPLICABLE_INTERNAL_ORDER_STATE | 0 |  |
| SMART_CONTRACT_NEW_ORDER_CREATED | 1 |  |
| BROKER_ORDER_PRE_SUBMITTED | 2 |  |
| BROKER_ORDER_SUBMITTED | 3 |  |
| BROKER_ORDER_ACCEPTED | 4 |  |
| BROKER_ORDER_PENDING_NEW | 5 |  |
| BROKER_ORDER_NEW | 6 |  |
| SMART_CONTRACT_ORDER_PLACED | 7 |  |
| BROKER_ORDER_PARTIALLY_FILLED | 8 |  |
| SMART_CONTRACT_ORDER_PARTIALLY_FILLED_SUBMITTED | 9 |  |
| BROKER_ORDER_FILLED | 10 |  |
| SMART_CONTRACT_ORDER_EXECUTED | 11 |  |
| BROKER_ORDER_PRE_CANCEL_REQUESTED | 12 |  |
| BROKER_ORDER_CANCEL_REQUESTED | 13 |  |
| BROKER_ORDER_CANCELED | 14 |  |
| BROKER_ORDER_REFUSED | 15 |  |
| BROKER_ORDER_EXPIRED | 16 |  |
| SMART_CONTRACT_PRE_ORDER_CANCELLED | 17 |  |
| SMART_CONTRACT_ORDER_CANCELLED | 18 |  |
| SMART_CONTRACT_PRE_ORDER_EXPIRED | 21 |  |
| SMART_CONTRACT_ORDER_EXPIRED | 22 |  |
| PROCESS_FINISHED | 19 |  |
| SMART_CONTRACT_CANCEL_ORDER_REQUESTED | 20 |  |

#### OrderDetailType

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_APPLICABLE_ORDER_DETAIL_TYPE | 0 |  |
| ORDER_DETAIL_LIMIT | 1 |  |
| ORDER_DETAIL_MARKET | 2 |  |
| ORDER_DETAIL_STOP_LOSS | 3 |  |

## util.proto {#util}

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `util.proto` file defines the Util model.

## Version Information

This documentation corresponds to the current version of the proto files in this repository.

## Support

For more information, see:
- README.md in this repository
- Protocol Buffer documentation
