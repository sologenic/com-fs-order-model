# Order Documentation

## Table of Contents

- [Overview](#overview)
- [attestation.proto](#attestation)
  - [Messages](#messages)
    - [Attestation](#attestation)
    - [Attestations](#attestations)
- [broker.proto](#broker)
  - [Messages](#messages)
    - [BrokerOrderDetails](#brokerorderdetails)
    - [ClientOrderID](#clientorderid)
    - [BrokerOrderDetailsList](#brokerorderdetailslist)
- [order.proto](#order)
  - [Messages](#messages)
    - [Order](#order)
    - [OrderInstruction](#orderinstruction)
    - [Orders](#orders)
    - [Hold](#hold)
    - [Coin](#coin)
    - [OrderState](#orderstate)
    - [Receiver](#receiver)
  - [Enums](#enums)
    - [TransactionType](#transactiontype)
    - [OrderStateType](#orderstatetype)
    - [PaymentState](#paymentstate)
    - [OrderDetailType](#orderdetailtype)
- [util.proto](#util)
  - [Messages](#messages)
    - [LockLogRecord](#locklogrecord)
    - [Key](#key)
    - [InstanceID](#instanceid)
- [Version Information](#version-information)
- [Support](#support)

## Overview

The Order provides a comprehensive data structure for managing order within the system. This model supports metadata and audit: includes metadata and audit trails for tracking changes, pagination support: provides offset-based pagination for collections, identification: provides unique identifiers for order, and more. 

Key features of the {model_name.lower()} model include:
- **Metadata and Audit**: Includes metadata and audit trails for tracking changes
- **Pagination Support**: Provides offset-based pagination for collections
- **Identification**: Provides unique identifiers for order
- **Status Management**: Tracks status for administrative control
- **Organizational Context**: Links items to organizations via OrganizationID

## attestation.proto

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `attestation.proto` file defines the core attestation model for order management. It provides message types for representing attestation data and operations. The file integrates with external utility libraries: `decimal.proto`, `metadata.proto`.

### Messages

#### Attestation {#attestation}

The `Attestation` message provides attestation data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| SmartContractAddr | `string` | Required | SmartContractAddr value |
| Denom | `string` | Required | Denom value |
| BrokerQuantity | `decimal.Decimal` | Optional | BrokerQuantity field |
| ChainQuantity | `decimal.Decimal` | Required | ChainQuantity field |
| BlockHeight | `int64` | Required | BlockHeight field |
| Timestamp | `google.protobuf.Timestamp` | Required | Timestamp field |
| ReattestationBlockHeight | `int64` | Optional | ReattestationBlockHeight field |

**Use Cases:**
- Creating new attestation records
- Retrieving attestation information
- Updating attestation data

**Important Notes:**
- This message provides the attestation representation

#### Attestations {#attestations}

The `Attestations` message represents a collection of attestation with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Attestations | `Attestation` | Optional | Attestations field |
| Offset | `int32` | Optional | Offset field |

**Use Cases:**
- Returning paginated lists of attestation from queries or searches
- Implementing pagination in attestation listing APIs
- Handling large attestations efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

## broker.proto

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `broker.proto` file defines the core broker model for order management. It provides message types for representing broker data and operations. The file integrates with external utility libraries: `order-properties.proto`, `decimal.proto`, `metadata.proto`.

### Messages

#### BrokerOrderDetails {#brokerorderdetails}

The `BrokerOrderDetails` message contains all the core information about a brokerorder, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| BrokerAssignedID | `string` | Required | auto generated ID from the broker |
| ClientOrderID | `ClientOrderID` | Required | unique identifier for the order in message to the broker, value is from the key function |
| SubmittedAt | `google.protobuf.Timestamp` | Required | SubmittedAt field |
| FilledAt | `google.protobuf.Timestamp` | Optional | FilledAt field |
| ExpiredAt | `google.protobuf.Timestamp` | Optional | ExpiredAt field |
| CancelledAt | `google.protobuf.Timestamp` | Optional | CancelledAt field |
| FailedAt | `google.protobuf.Timestamp` | Optional | FailedAt field |
| AssetID | `string` | Required | Unique identifier for the asset |
| Symbol | `string` | Required | Symbol value |
| AssetClass | `asset.AssetType` | Required | Also called AssetType in the asset model |
| OrderClass | `OrderClass` | Required | OrderClass field |
| Type | `TradeType` | Required | Type classification for this item (see related enum) |
| Side | `orderproperties.OrderType` | Required | Unique identifier for the side |
| TimeInForce | `orderproperties.TimeInForce` | Required | TimeInForce field |
| Notional | `decimal.Decimal` | Optional | Notional field |
| OrderQty | `decimal.Decimal` | Optional | OrderQty field |
| FilledQty | `decimal.Decimal` | Required | defaults to 0, updated as previous `FilledQty` + `PartialQty` |
| FilledAvgPrice | `decimal.Decimal` | Optional | FilledAvgPrice field |
| LimitPrice | `decimal.Decimal` | Optional | LimitPrice field |
| StopPrice | `decimal.Decimal` | Optional | StopPrice field |
| TrailPrice | `decimal.Decimal` | Optional | TrailPrice field |
| TrailPercent | `decimal.Decimal` | Optional | TrailPercent field |
| HWM | `decimal.Decimal` | Optional | High Water Mark, used for trailing stop orders |
| ExtendedHours | `bool` | Required | defaults to false, High Water Mark is used for trailing stop orders |
| CreatedAt | `google.protobuf.Timestamp` | Required | CreatedAt field |
| UpdatedAt | `google.protobuf.Timestamp` | Optional | UpdatedAt field |
| Status | `BrokerOrderStatus` | Required | status of the order in exchange |
| TotalPosition | `decimal.Decimal` | Optional | TotalPosition field |
| PartialPrice | `decimal.Decimal` | Optional | PartialPrice field |
| PartialQty | `decimal.Decimal` | Optional | PartialQty field |
| ProcessInfo | `orderproperties.ProcessInfo` | Optional | ProcessInfo field |
| InstanceID | `string` | Optional | ID used by logs to identify the instance where the log was created/ processed |
| ClearingBroker | `orderproperties.ClearingBroker` | Required | Broker that cleared the order, e.g. Alpaca, RQD, etc. |
| EventID | `string` | Optional | ULID generated by broker |
| EventTime | `google.protobuf.Timestamp` | Optional | EventTime field |
| CommissionSettings | `commission.CommissionSettings` | Optional | CommissionSettings field |

**Use Cases:**
- Creating new brokerorder records with complete information
- Updating brokerorder information
- Tracking status for administrative purposes

**Important Notes:**
- The `BrokerAssignedID` field must match a valid identifier format
- The `ClientOrderID` field must match a valid identifier format
- The `AssetID` field must match a valid identifier format
- The `Side` field must match a valid identifier format
- The `Status` field determines the current state of this item
- The `InstanceID` field must match a valid identifier format
- The `EventID` field must match a valid identifier format

#### ClientOrderID {#clientorderid}

The `ClientOrderID` message provides clientorderid data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| SmartContractAddr | `string` | Required | SmartContractAddr value |
| OrderID | `int64` | Required | Unique identifier for the order |

**Use Cases:**
- Creating new clientorderid records
- Retrieving clientorderid information
- Updating clientorderid data

**Important Notes:**
- The `OrderID` field must match a valid identifier format

#### BrokerOrderDetailsList {#brokerorderdetailslist}

The `BrokerOrderDetailsList` message contains all the core information about a brokerorderlist, including essential details and metadata.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| BrokerOrderDetailsList | `BrokerOrderDetails` | Optional | BrokerOrderDetailsList field |

**Use Cases:**
- Creating new brokerorderlist records with complete information
- Updating brokerorderlist information

**Important Notes:**
- This message provides the brokerorderdetailslist representation

## order.proto

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `order.proto` file defines the core order model for order management. It provides message types for representing order data and operations. The file integrates with external utility libraries: `metadata.proto`, `order-properties.proto`.

### Messages

#### Order {#order}

The `Order` message provides order data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Network | `metadata.Network` | Required | Metadata information including network and version details |
| SmartContractAddr | `string` | Required | SmartContractAddr value |
| Instruction | `OrderInstruction` | Required | Snapshot of the order in the smart contract |
| CreatedAt | `google.protobuf.Timestamp` | Required | CreatedAt field |
| UpdatedAt | `google.protobuf.Timestamp` | Required | UpdatedAt field |
| TransactionType | `TransactionType` | Required | Type classification for this item (see related enum) |
| TXID | `string` | Required | Unique Key in the datastore |
| GasFee | `int64` | Required | GasFee field |
| GasFeeUSD | `double` | Optional | GasFeeUSD field |
| DetectedAt | `google.protobuf.Timestamp` | Required | DetectedAt field |
| Height | `int64` | Required | Height field |
| InternalOrderState | `InternalOrderState` | Required | InternalOrderState field |
| BrokerOrderDetails | `BrokerOrderDetails` | Optional | Matches data on SmartContractAddr, orderdetails.OrderID and network |
| ProcessInfo | `orderproperties.ProcessInfo` | Optional | ProcessInfo field |
| InstanceID | `string` | Optional | ID used by logs to identify the instance where the log was created/ processed |
| BlockTime | `google.protobuf.Timestamp` | Required | BlockTime field |
| Sequence | `int64` | Required | Sequence |
| OrganizationID | `string` | Required | UUID of the organization this item belongs to |
| UserID | `string` | Required | Unique identifier for the user |

**Use Cases:**
- Creating new order records
- Retrieving order information
- Updating order data
- Associating items with specific organizations

**Important Notes:**
- The `TXID` field must match a valid identifier format
- The `InstanceID` field must match a valid identifier format
- The `OrganizationID` must be a valid UUID format
- The `UserID` field must match a valid identifier format

#### OrderInstruction {#orderinstruction}

The `OrderInstruction` message provides orderinstruction data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| OrderID | `int64` | Required | Google datastore supports int64, not uint64, which is the used in the smart contract |
| Creator | `string` | Required | Sender in the message from Coreum |
| Denom | `string` | Required | Denom value |
| Amount | `int64` | Required | Amount field |
| AmountExp | `int32` | Required | AmountExp field |
| LimitPrice | `int64` | Required | DEPRECATED: Use LimitPriceFloat instead for new smart contract format |
| LimitPriceExp | `int32` | Required | DEPRECATED: Use LimitPriceFloat instead for new smart contract format |
| FillOrKill | `bool` | Required | DEPRECATED: Use TimeInForce instead as it's more flexible and RQD does not support it (2025-08-18) |
| ExpiresAt | `string` | Optional | In ISO-8601 Zulu format (e.g., "2024-02-29T23:59:59Z") |
| OrderDetailType | `OrderDetailType` | Required | Type classification for this item (see related enum) |
| Hold | `Hold` | Optional | Hold field |
| FundsSent | `Coin` | Required | FundsSent field |
| OrderType | `orderproperties.OrderType` | Required | Type classification for this item (see related enum) |
| OrderState | `OrderState` | Required | OrderState field |
| PaymentState | `PaymentState` | Optional | PaymentState field |
| AmountExecuted | `int64` | Optional | AmountExecuted field |
| AmountExecutedExp | `int32` | Optional | AmountExecutedExp field |
| UsedFundsAmount | `int64` | Optional | UsedFundsAmount field |
| UsedFundsAmountExp | `int32` | Optional | UsedFundsAmountExp field |
| Costs | `int64` | Optional | Costs field |
| CostsExp | `int32` | Optional | CostsExp field |
| TimeInForce | `orderproperties.TimeInForce` | Optional | TimeInForce field |
| LimitPriceFloat | `double` | Optional | Direct float price from smart contract (e.g., 26.25) |
| Receiver | `Receiver` | Optional | The address of the receiver, used for sending of funds. Receiver can also be an email address, tx address or blockchain addres from another blockchain. |

**Use Cases:**
- Creating new orderinstruction records
- Retrieving orderinstruction information
- Updating orderinstruction data

**Important Notes:**
- The `OrderID` field must match a valid identifier format

#### Orders {#orders}

The `Orders` message represents a collection of order with pagination support for handling large result sets.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Orders | `Order` | Optional | Orders field |
| Offset | `int32` | Optional | Offset field |

**Use Cases:**
- Returning paginated lists of order from queries or searches
- Implementing pagination in order listing APIs
- Handling large orders efficiently
- Providing continuation tokens for subsequent page requests

**Important Notes:**
- If `Offset` is not set (or is 0), it indicates that all available items have been returned
- Clients should use the `Offset` value in subsequent requests to retrieve the next page of results

#### Hold {#hold}

The `Hold` message provides hold data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Denom | `string` | Required | Denom value |
| Amount | `int64` | Required | Amount field |
| AmountExp | `int32` | Required | AmountExp field |

**Use Cases:**
- Creating new hold records
- Retrieving hold information
- Updating hold data

**Important Notes:**
- This message provides the hold representation

#### Coin {#coin}

The `Coin` message provides coin data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Denom | `string` | Required | Denom value |
| Amount | `int64` | Required | Amount field |

**Use Cases:**
- Creating new coin records
- Retrieving coin information
- Updating coin data

**Important Notes:**
- This message provides the coin representation

#### OrderState {#orderstate}

The `OrderState` message provides orderstate data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| OrderStateType | `OrderStateType` | Required | Type classification for this item (see related enum) |
| OrderCancelledBy | `OrderCancelledBy` | Optional | OrderCancelledBy field |

**Use Cases:**
- Creating new orderstate records
- Retrieving orderstate information
- Updating orderstate data

**Important Notes:**
- This message provides the orderstate representation

#### Receiver {#receiver}

The `Receiver` message provides receiver data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Address | `string` | Required | The address of the receiver, used for sending of funds. |
| Type | `ReceiverType` | Required | The type of the receiver, e.g. email, tx address, blockchain address from another blockchain. |

**Use Cases:**
- Creating new receiver records
- Retrieving receiver information
- Updating receiver data

**Important Notes:**
- This message provides the receiver representation

### Enums

#### TransactionType {#transactiontype}

The `TransactionType` enum defines the possible states or types for order, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| LimitPriceExp | 7 | LimitPriceExp value |
| FillOrKill | 8 | FillOrKill value |
| ExpiresAt | 9 | ExpiresAt value |
| OrderDetailType | 10 | OrderDetailType value |
| Hold | 11 | Hold value |
| FundsSent | 12 | FundsSent value |
| OrderType | 13 | OrderType value |
| OrderState | 14 | OrderState value |
| PaymentState | 15 | PaymentState value |
| AmountExecuted | 16 | AmountExecuted value |
| AmountExecutedExp | 17 | AmountExecutedExp value |
| UsedFundsAmount | 18 | UsedFundsAmount value |
| UsedFundsAmountExp | 19 | UsedFundsAmountExp value |
| Costs | 20 | Costs value |
| CostsExp | 21 | CostsExp value |
| TimeInForce | 22 | TimeInForce value |
| LimitPriceFloat | 23 | LimitPriceFloat value |
| Receiver | 24 | Receiver value |

**Use Cases:**
- Setting transactiontype for items
- Filtering items by transactiontype in queries
- Enforcing business logic based on transactiontype

**Important Notes:**
- Only valid transactiontype values should be used in production code
- TransactionType changes should be tracked in audit trails for compliance purposes

#### OrderStateType {#orderstatetype}

The `OrderStateType` enum defines the possible states or types for order, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| Y | 0 | Default/unused value (protobuf convention) |
| SMART_CONTRACT_OWNER | 1 | Smart Contract Owner state or type |
| USER | 2 | User state or type |
| BROKER_ORACLE | 3 | Broker Oracle state or type |

**Use Cases:**
- Setting orderstatetype for items
- Filtering items by orderstatetype in queries
- Enforcing business logic based on orderstatetype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid orderstatetype values should be used in production code
- OrderStateType changes should be tracked in audit trails for compliance purposes

#### PaymentState {#paymentstate}

The `PaymentState` enum defines the possible states or types for order, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_APPLICABLE_INTERNAL_ORDER_STATE | 0 | Default/unused value (protobuf convention) |
| SMART_CONTRACT_NEW_ORDER_CREATED | 1 | Smart Contract New Order Created state or type |
| BROKER_ORDER_PRE_SUBMITTED | 2 | Broker Order Pre Submitted state or type |
| BROKER_ORDER_SUBMITTED | 3 | Broker Order Submitted state or type |
| BROKER_ORDER_ACCEPTED | 4 | Broker Order Accepted state or type |
| BROKER_ORDER_PENDING_NEW | 5 | Broker Order Pending New state or type |
| BROKER_ORDER_NEW | 6 | Broker Order New state or type |
| SMART_CONTRACT_ORDER_PLACED | 7 | Smart Contract Order Placed state or type |
| BROKER_ORDER_PARTIALLY_FILLED | 8 | Broker Order Partially Filled state or type |
| SMART_CONTRACT_ORDER_PARTIALLY_FILLED_SUBMITTED | 9 | Smart Contract Order Partially Filled Submitted state or type |
| BROKER_ORDER_FILLED | 10 | Broker Order Filled state or type |
| SMART_CONTRACT_ORDER_EXECUTED | 11 | Smart Contract Order Executed state or type |
| BROKER_ORDER_PRE_CANCEL_REQUESTED | 12 | Broker Order Pre Cancel Requested state or type |
| BROKER_ORDER_CANCEL_REQUESTED | 13 | Broker Order Cancel Requested state or type |
| BROKER_ORDER_CANCELED | 14 | Broker Order Canceled state or type |
| BROKER_ORDER_REFUSED | 15 | Broker Order Refused state or type |
| BROKER_ORDER_EXPIRED | 16 | Broker Order Expired state or type |
| SMART_CONTRACT_PRE_ORDER_CANCELLED | 17 | Smart Contract Pre Order Cancelled state or type |
| SMART_CONTRACT_ORDER_CANCELLED | 18 | Smart Contract Order Cancelled state or type |
| SMART_CONTRACT_PRE_ORDER_EXPIRED | 21 | Smart Contract Pre Order Expired state or type |
| SMART_CONTRACT_ORDER_EXPIRED | 22 | Smart Contract Order Expired state or type |
| PROCESS_FINISHED | 19 | Process Finished state or type |
| SMART_CONTRACT_CANCEL_ORDER_REQUESTED | 20 | Smart Contract Cancel Order Requested state or type |

**Use Cases:**
- Setting paymentstate for items
- Filtering items by paymentstate in queries
- Enforcing business logic based on paymentstate

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid paymentstate values should be used in production code
- PaymentState changes should be tracked in audit trails for compliance purposes

#### OrderDetailType {#orderdetailtype}

The `OrderDetailType` enum defines the possible states or types for order, allowing for classification and state management.

**Value Table:**

| Value Name | Number | Description |
|------------|--------|-------------|
| NOT_APPLICABLE_ORDER_DETAIL_TYPE | 0 | Default/unused value (protobuf convention) |
| ORDER_DETAIL_LIMIT | 1 | Order Detail Limit state or type |
| ORDER_DETAIL_MARKET | 2 | Order Detail Market state or type |
| ORDER_DETAIL_STOP_LOSS | 3 | Order Detail Stop Loss state or type |

**Use Cases:**
- Setting orderdetailtype for items
- Filtering items by orderdetailtype in queries
- Enforcing business logic based on orderdetailtype

**Important Notes:**
- Values with `NOT_USED` prefix or number 0 follow protobuf conventions for default enum values and should not be actively used
- Only valid orderdetailtype values should be used in production code
- OrderDetailType changes should be tracked in audit trails for compliance purposes

## util.proto

### Package Information

- **Package Name**: `order`
- **Go Package Path**: `github.com/sologenic/com-fs-order-model;order`

### Overview

The `util.proto` file defines the core util model for order management. It provides message types for representing util data and operations. The file integrates with external utility libraries: `order-properties.proto`.

### Messages

#### LockLogRecord {#locklogrecord}

The `LockLogRecord` message provides locklogrecord data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Key | `string` | Required | Key value |
| MustHaveState | `orderproperties.ProcessState` | Optional | MustHaveState field |
| TargetState | `orderproperties.ProcessState` | Required | TargetState field |

**Use Cases:**
- Creating new locklogrecord records
- Retrieving locklogrecord information
- Updating locklogrecord data

**Important Notes:**
- This message provides the locklogrecord representation

#### Key {#key}

The `Key` message provides key data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| Key | `string` | Required | Key value |
| KeyPrefix | `string` | Optional | KeyPrefix value |
| IsNew | `bool` | Optional | IsNew field |

**Use Cases:**
- Creating new key records
- Retrieving key information
- Updating key data

**Important Notes:**
- This message provides the key representation

#### InstanceID {#instanceid}

The `InstanceID` message provides instanceid data and operations.

**Field Table:**

| Field Name | Type | Required/Optional | Description |
|------------|------|-------------------|-------------|
| InstanceID | `string` | Required | Unique identifier for the instance |

**Use Cases:**
- Creating new instanceid records
- Retrieving instanceid information
- Updating instanceid data

**Important Notes:**
- The `InstanceID` field must match a valid identifier format

## Version Information

This documentation corresponds to the Protocol Buffer definitions in `attestation.proto`, `broker.proto`, `order.proto`, `util.proto`. The proto file(s) use `proto3` syntax. When referencing this documentation, ensure that the version of the proto files matches the version of the generated code and API implementations you are using.

## Support

For additional information and support:
- See `README.md` for project setup, installation, and usage instructions
- Refer to the Protocol Buffer definitions in `attestation.proto`, `broker.proto`, `order.proto`, `util.proto` for the authoritative source of truth
- Check the imported utility libraries for details on related types:
  - `sologenic/com-fs-utils-lib/models/order-properties/order-properties.proto`
