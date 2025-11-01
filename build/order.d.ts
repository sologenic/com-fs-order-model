import _m0 from "protobufjs/minimal";
import { BrokerOrderDetails } from "./sologenic/com-fs-order-model/broker";
import { OrderType, ProcessInfo, TimeInForce } from "./sologenic/com-fs-order-model/util";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "order";
/** Execution type(action) of the transaction against the smart contract */
export declare enum TransactionType {
    NOT_USED_TRANSACTION_TYPE = 0,
    PURCHASE = 1,
    SELL = 2,
    REQUEST_ORDER_CANCEL = 3,
    EXECUTE_ORDER = 4,
    PAY_ORDER = 5,
    REQUEST_REATTESTATION = 6,
    UNRECOGNIZED = -1
}
export declare function transactionTypeFromJSON(object: any): TransactionType;
export declare function transactionTypeToJSON(object: TransactionType): string;
export declare enum OrderStateType {
    NOT_USED_ORDER_STATE_TYPE = 0,
    OPEN = 1,
    PLACED = 2,
    PARTIALLY_EXECUTED = 3,
    EXECUTED = 4,
    CANCELLATION_REQUESTED = 5,
    CANCELLED = 6,
    UNRECOGNIZED = -1
}
export declare function orderStateTypeFromJSON(object: any): OrderStateType;
export declare function orderStateTypeToJSON(object: OrderStateType): string;
export declare enum OrderCancelledBy {
    NOT_USED_ORDER_CANCEL_BY = 0,
    SMART_CONTRACT_OWNER = 1,
    USER = 2,
    BROKER_ORACLE = 3,
    UNRECOGNIZED = -1
}
export declare function orderCancelledByFromJSON(object: any): OrderCancelledBy;
export declare function orderCancelledByToJSON(object: OrderCancelledBy): string;
export declare enum PaymentState {
    NOT_USED_PAYMENT_STATE = 0,
    NOT_PAID = 1,
    PAID = 2,
    UNRECOGNIZED = -1
}
export declare function paymentStateFromJSON(object: any): PaymentState;
export declare function paymentStateToJSON(object: PaymentState): string;
export declare enum InternalOrderState {
    NOT_USED_INTERNAL_ORDER_STATE = 0,
    /** SMART_CONTRACT_NEW_ORDER_CREATED - Initial state: Order is just created in the smart contract */
    SMART_CONTRACT_NEW_ORDER_CREATED = 1,
    /** BROKER_ORDER_PRE_SUBMITTED - Order place states */
    BROKER_ORDER_PRE_SUBMITTED = 2,
    /** BROKER_ORDER_SUBMITTED - order is submitted to the broker for further processing */
    BROKER_ORDER_SUBMITTED = 3,
    /** BROKER_ORDER_ACCEPTED - (afterhours) order has been received by the broker, but hasn’t yet been routed to the execution venue, OrderState in Broker: `accepted` */
    BROKER_ORDER_ACCEPTED = 4,
    /** BROKER_ORDER_PENDING_NEW - order has been routed to the exchange and it hasn't yet been confirmed by the exchange, OrderState in Broker: `pending_new` */
    BROKER_ORDER_PENDING_NEW = 5,
    /** BROKER_ORDER_NEW - order has been confirmed by the exchange and is active, OrderState in Broker: `new` */
    BROKER_ORDER_NEW = 6,
    /** SMART_CONTRACT_ORDER_PLACED - order has been placed in the smart contract, OrderState in SC: `placed` */
    SMART_CONTRACT_ORDER_PLACED = 7,
    /** BROKER_ORDER_PARTIALLY_FILLED - order has been partially filled, OrderState in Broker: `partially_filled` */
    BROKER_ORDER_PARTIALLY_FILLED = 8,
    /** SMART_CONTRACT_ORDER_PARTIALLY_FILLED_SUBMITTED - order has been partially executed in the smart contract, OrderState in SC: `partially_executed` */
    SMART_CONTRACT_ORDER_PARTIALLY_FILLED_SUBMITTED = 9,
    /** BROKER_ORDER_FILLED - order has been completely filled, OrderState in Broker: `filled` */
    BROKER_ORDER_FILLED = 10,
    /** SMART_CONTRACT_ORDER_EXECUTED - order has been executed in the smart contract, OrderState in SC: `executed` */
    SMART_CONTRACT_ORDER_EXECUTED = 11,
    BROKER_ORDER_PRE_CANCEL_REQUESTED = 12,
    /** BROKER_ORDER_CANCEL_REQUESTED - order cancellation request has been submitted to the broker */
    BROKER_ORDER_CANCEL_REQUESTED = 13,
    /** BROKER_ORDER_CANCELED - order has been canceled by the broker, OrderState in Broker: `canceled` */
    BROKER_ORDER_CANCELED = 14,
    /** BROKER_ORDER_REFUSED - order sent to the broker, but the broker refused to accept it */
    BROKER_ORDER_REFUSED = 15,
    /** BROKER_ORDER_EXPIRED - order has expired, OrderState in Broker: `expired` */
    BROKER_ORDER_EXPIRED = 16,
    SMART_CONTRACT_PRE_ORDER_CANCELLED = 17,
    /** SMART_CONTRACT_ORDER_CANCELLED - order has been cancelled in the smart contract, OrderState in SC: `cancelled` */
    SMART_CONTRACT_ORDER_CANCELLED = 18,
    /** PROCESS_FINISHED - order has been processed and finished */
    PROCESS_FINISHED = 19,
    /** SMART_CONTRACT_CANCEL_ORDER_REQUESTED - Alternative scenarios */
    SMART_CONTRACT_CANCEL_ORDER_REQUESTED = 20,
    UNRECOGNIZED = -1
}
export declare function internalOrderStateFromJSON(object: any): InternalOrderState;
export declare function internalOrderStateToJSON(object: InternalOrderState): string;
export declare enum OrderDetailType {
    NOT_USED_ORDER_DETAIL_TYPE = 0,
    ORDER_DETAIL_LIMIT = 1,
    /** ORDER_DETAIL_MARKET - Ignores LimitPrice, executes at market price */
    ORDER_DETAIL_MARKET = 2,
    /** ORDER_DETAIL_STOP_LOSS - Uses LimitPrice as the stop loss threshold */
    ORDER_DETAIL_STOP_LOSS = 3,
    UNRECOGNIZED = -1
}
export declare function orderDetailTypeFromJSON(object: any): OrderDetailType;
export declare function orderDetailTypeToJSON(object: OrderDetailType): string;
/**
 * Order key: OrderID-SmartContractAddr-Network (1 entry per order)
 * Order history key(id): numeric ID auto-generated by datastore (M entries per order)
 */
export interface Order {
    Network: Network;
    SmartContractAddr: string;
    /** Snapshot of the order in the smart contract */
    Instruction: OrderInstruction | undefined;
    CreatedAt: Date | undefined;
    UpdatedAt: Date | undefined;
    TransactionType: TransactionType;
    /** Unique Key in the datastore */
    TXID: string;
    GasFee: number;
    GasFeeUSD?: number | undefined;
    DetectedAt: Date | undefined;
    Height: number;
    InternalOrderState: InternalOrderState;
    /** Matches data on SmartContractAddr, orderdetails.OrderID and network */
    BrokerOrderDetails: BrokerOrderDetails | undefined;
    /** Bookkeeping: did we process this event from broker smart contract order log? */
    ProcessInfo?: ProcessInfo | undefined;
    /** ID used by logs to identify the instance where the log was created/ processed */
    InstanceID?: string | undefined;
    BlockTime: Date | undefined;
    /** Sequence */
    Sequence: number;
    OrganizationID: string;
    UserID: string;
}
/** Same structure as Order in the Smart Contract */
export interface OrderInstruction {
    /** Google datastore supports int64, not uint64, which is the used in the smart contract */
    OrderID: number;
    /** Sender in message from Coreum */
    Creator: string;
    Denom: string;
    Amount: number;
    AmountExp: number;
    /** DEPRECATED: Use LimitPriceFloat instead for new smart contract format */
    LimitPrice: number;
    /** DEPRECATED: Use LimitPriceFloat instead for new smart contract format */
    LimitPriceExp: number;
    /** DEPRECATED: Use TimeInForce instead as it's more flexible and RQD does not support it (2025-08-18) */
    FillOrKill: boolean;
    /** In ISO-8601 Zulu format (e.g., "2024-02-29T23:59:59Z") */
    ExpiresAt?: string | undefined;
    OrderDetailType: OrderDetailType;
    Hold?: Hold | undefined;
    FundsSent: Coin | undefined;
    OrderType: OrderType;
    OrderState: OrderState | undefined;
    PaymentState?: PaymentState | undefined;
    AmountExecuted?: number | undefined;
    AmountExecutedExp?: number | undefined;
    UsedFundsAmount?: number | undefined;
    UsedFundsAmountExp?: number | undefined;
    Costs?: number | undefined;
    CostsExp?: number | undefined;
    TimeInForce?: TimeInForce | undefined;
    /** Direct float price from smart contract (e.g., 26.25) */
    LimitPriceFloat?: number | undefined;
}
export interface Orders {
    Orders: Order[];
    Offset?: number | undefined;
}
export interface Hold {
    Denom: string;
    Amount: number;
    AmountExp: number;
}
export interface Coin {
    Denom: string;
    Amount: number;
}
export interface OrderState {
    OrderStateType: OrderStateType;
    OrderCancelledBy?: OrderCancelledBy | undefined;
}
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    create<I extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Instruction?: {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            LimitPrice?: number | undefined;
            LimitPriceExp?: number | undefined;
            FillOrKill?: boolean | undefined;
            ExpiresAt?: string | undefined;
            OrderDetailType?: OrderDetailType | undefined;
            Hold?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } | undefined;
            FundsSent?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            LimitPriceFloat?: number | undefined;
        } | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        GasFee?: number | undefined;
        GasFeeUSD?: number | undefined;
        DetectedAt?: Date | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        BrokerOrderDetails?: {
            BrokerAssignedID?: string | undefined;
            ClientOrderID?: {
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
            OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
            Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            OrderQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            StopPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPercent?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            HWM?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
            TotalPosition?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
            EventID?: string | undefined;
            EventTime?: Date | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
        } | undefined;
        ProcessInfo?: {
            ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } | undefined;
        InstanceID?: string | undefined;
        BlockTime?: Date | undefined;
        Sequence?: number | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Instruction?: ({
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            LimitPrice?: number | undefined;
            LimitPriceExp?: number | undefined;
            FillOrKill?: boolean | undefined;
            ExpiresAt?: string | undefined;
            OrderDetailType?: OrderDetailType | undefined;
            Hold?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } | undefined;
            FundsSent?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            LimitPriceFloat?: number | undefined;
        } & {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            LimitPrice?: number | undefined;
            LimitPriceExp?: number | undefined;
            FillOrKill?: boolean | undefined;
            ExpiresAt?: string | undefined;
            OrderDetailType?: OrderDetailType | undefined;
            Hold?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & { [K in Exclude<keyof I["Instruction"]["Hold"], keyof Hold>]: never; }) | undefined;
            FundsSent?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & { [K_1 in Exclude<keyof I["Instruction"]["FundsSent"], keyof Coin>]: never; }) | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: ({
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & { [K_2 in Exclude<keyof I["Instruction"]["OrderState"], keyof OrderState>]: never; }) | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            LimitPriceFloat?: number | undefined;
        } & { [K_3 in Exclude<keyof I["Instruction"], keyof OrderInstruction>]: never; }) | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        GasFee?: number | undefined;
        GasFeeUSD?: number | undefined;
        DetectedAt?: Date | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        BrokerOrderDetails?: ({
            BrokerAssignedID?: string | undefined;
            ClientOrderID?: {
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
            OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
            Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            OrderQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            StopPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPercent?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            HWM?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
            TotalPosition?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
            EventID?: string | undefined;
            EventTime?: Date | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
        } & {
            BrokerAssignedID?: string | undefined;
            ClientOrderID?: ({
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } & {
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } & { [K_4 in Exclude<keyof I["BrokerOrderDetails"]["ClientOrderID"], keyof import("./sologenic/com-fs-order-model/broker").ClientOrderID>]: never; }) | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
            OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
            Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_5 in Exclude<keyof I["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            OrderQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_6 in Exclude<keyof I["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            FilledQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_7 in Exclude<keyof I["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            FilledAvgPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_8 in Exclude<keyof I["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            LimitPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_9 in Exclude<keyof I["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            StopPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_10 in Exclude<keyof I["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            TrailPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_11 in Exclude<keyof I["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            TrailPercent?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_12 in Exclude<keyof I["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            HWM?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_13 in Exclude<keyof I["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
            TotalPosition?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_14 in Exclude<keyof I["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            PartialPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_15 in Exclude<keyof I["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            PartialQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_16 in Exclude<keyof I["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_17 in Exclude<keyof I["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
            EventID?: string | undefined;
            EventTime?: Date | undefined;
            CommissionSettings?: ({
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & {
                Commission?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_18 in Exclude<keyof I["BrokerOrderDetails"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & { [K_19 in Exclude<keyof I["BrokerOrderDetails"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
        } & { [K_20 in Exclude<keyof I["BrokerOrderDetails"], keyof BrokerOrderDetails>]: never; }) | undefined;
        ProcessInfo?: ({
            ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & {
            ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & { [K_21 in Exclude<keyof I["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
        InstanceID?: string | undefined;
        BlockTime?: Date | undefined;
        Sequence?: number | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
    } & { [K_22 in Exclude<keyof I, keyof Order>]: never; }>(base?: I | undefined): Order;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Instruction?: {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            LimitPrice?: number | undefined;
            LimitPriceExp?: number | undefined;
            FillOrKill?: boolean | undefined;
            ExpiresAt?: string | undefined;
            OrderDetailType?: OrderDetailType | undefined;
            Hold?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } | undefined;
            FundsSent?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            LimitPriceFloat?: number | undefined;
        } | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        GasFee?: number | undefined;
        GasFeeUSD?: number | undefined;
        DetectedAt?: Date | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        BrokerOrderDetails?: {
            BrokerAssignedID?: string | undefined;
            ClientOrderID?: {
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
            OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
            Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            OrderQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            StopPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPercent?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            HWM?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
            TotalPosition?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
            EventID?: string | undefined;
            EventTime?: Date | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
        } | undefined;
        ProcessInfo?: {
            ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } | undefined;
        InstanceID?: string | undefined;
        BlockTime?: Date | undefined;
        Sequence?: number | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Instruction?: ({
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            LimitPrice?: number | undefined;
            LimitPriceExp?: number | undefined;
            FillOrKill?: boolean | undefined;
            ExpiresAt?: string | undefined;
            OrderDetailType?: OrderDetailType | undefined;
            Hold?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } | undefined;
            FundsSent?: {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            LimitPriceFloat?: number | undefined;
        } & {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            LimitPrice?: number | undefined;
            LimitPriceExp?: number | undefined;
            FillOrKill?: boolean | undefined;
            ExpiresAt?: string | undefined;
            OrderDetailType?: OrderDetailType | undefined;
            Hold?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & { [K_23 in Exclude<keyof I_1["Instruction"]["Hold"], keyof Hold>]: never; }) | undefined;
            FundsSent?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & { [K_24 in Exclude<keyof I_1["Instruction"]["FundsSent"], keyof Coin>]: never; }) | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: ({
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & { [K_25 in Exclude<keyof I_1["Instruction"]["OrderState"], keyof OrderState>]: never; }) | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
            TimeInForce?: TimeInForce | undefined;
            LimitPriceFloat?: number | undefined;
        } & { [K_26 in Exclude<keyof I_1["Instruction"], keyof OrderInstruction>]: never; }) | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        GasFee?: number | undefined;
        GasFeeUSD?: number | undefined;
        DetectedAt?: Date | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        BrokerOrderDetails?: ({
            BrokerAssignedID?: string | undefined;
            ClientOrderID?: {
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
            OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
            Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            OrderQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            FilledAvgPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            LimitPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            StopPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            TrailPercent?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            HWM?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
            TotalPosition?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialPrice?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            PartialQty?: {
                Value?: number | undefined;
                Exp?: number | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
            EventID?: string | undefined;
            EventTime?: Date | undefined;
            CommissionSettings?: {
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } | undefined;
        } & {
            BrokerAssignedID?: string | undefined;
            ClientOrderID?: ({
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } & {
                Network?: Network | undefined;
                SmartContractAddr?: string | undefined;
                OrderID?: number | undefined;
            } & { [K_27 in Exclude<keyof I_1["BrokerOrderDetails"]["ClientOrderID"], keyof import("./sologenic/com-fs-order-model/broker").ClientOrderID>]: never; }) | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
            OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
            Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_28 in Exclude<keyof I_1["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            OrderQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_29 in Exclude<keyof I_1["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            FilledQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_30 in Exclude<keyof I_1["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            FilledAvgPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_31 in Exclude<keyof I_1["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            LimitPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_32 in Exclude<keyof I_1["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            StopPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_33 in Exclude<keyof I_1["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            TrailPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_34 in Exclude<keyof I_1["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            TrailPercent?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_35 in Exclude<keyof I_1["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            HWM?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_36 in Exclude<keyof I_1["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
            TotalPosition?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_37 in Exclude<keyof I_1["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            PartialPrice?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_38 in Exclude<keyof I_1["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            PartialQty?: ({
                Value?: number | undefined;
                Exp?: number | undefined;
            } & {
                Value?: number | undefined;
                Exp?: number | undefined;
            } & { [K_39 in Exclude<keyof I_1["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_40 in Exclude<keyof I_1["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
            EventID?: string | undefined;
            EventTime?: Date | undefined;
            CommissionSettings?: ({
                Commission?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & {
                Commission?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_41 in Exclude<keyof I_1["BrokerOrderDetails"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
            } & { [K_42 in Exclude<keyof I_1["BrokerOrderDetails"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
        } & { [K_43 in Exclude<keyof I_1["BrokerOrderDetails"], keyof BrokerOrderDetails>]: never; }) | undefined;
        ProcessInfo?: ({
            ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & {
            ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & { [K_44 in Exclude<keyof I_1["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
        InstanceID?: string | undefined;
        BlockTime?: Date | undefined;
        Sequence?: number | undefined;
        OrganizationID?: string | undefined;
        UserID?: string | undefined;
    } & { [K_45 in Exclude<keyof I_1, keyof Order>]: never; }>(object: I_1): Order;
};
export declare const OrderInstruction: {
    encode(message: OrderInstruction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderInstruction;
    fromJSON(object: any): OrderInstruction;
    toJSON(message: OrderInstruction): unknown;
    create<I extends {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        LimitPrice?: number | undefined;
        LimitPriceExp?: number | undefined;
        FillOrKill?: boolean | undefined;
        ExpiresAt?: string | undefined;
        OrderDetailType?: OrderDetailType | undefined;
        Hold?: {
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } | undefined;
        FundsSent?: {
            Denom?: string | undefined;
            Amount?: number | undefined;
        } | undefined;
        OrderType?: OrderType | undefined;
        OrderState?: {
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } | undefined;
        PaymentState?: PaymentState | undefined;
        AmountExecuted?: number | undefined;
        AmountExecutedExp?: number | undefined;
        UsedFundsAmount?: number | undefined;
        UsedFundsAmountExp?: number | undefined;
        Costs?: number | undefined;
        CostsExp?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        LimitPriceFloat?: number | undefined;
    } & {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        LimitPrice?: number | undefined;
        LimitPriceExp?: number | undefined;
        FillOrKill?: boolean | undefined;
        ExpiresAt?: string | undefined;
        OrderDetailType?: OrderDetailType | undefined;
        Hold?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & { [K in Exclude<keyof I["Hold"], keyof Hold>]: never; }) | undefined;
        FundsSent?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & { [K_1 in Exclude<keyof I["FundsSent"], keyof Coin>]: never; }) | undefined;
        OrderType?: OrderType | undefined;
        OrderState?: ({
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & {
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & { [K_2 in Exclude<keyof I["OrderState"], keyof OrderState>]: never; }) | undefined;
        PaymentState?: PaymentState | undefined;
        AmountExecuted?: number | undefined;
        AmountExecutedExp?: number | undefined;
        UsedFundsAmount?: number | undefined;
        UsedFundsAmountExp?: number | undefined;
        Costs?: number | undefined;
        CostsExp?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        LimitPriceFloat?: number | undefined;
    } & { [K_3 in Exclude<keyof I, keyof OrderInstruction>]: never; }>(base?: I | undefined): OrderInstruction;
    fromPartial<I_1 extends {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        LimitPrice?: number | undefined;
        LimitPriceExp?: number | undefined;
        FillOrKill?: boolean | undefined;
        ExpiresAt?: string | undefined;
        OrderDetailType?: OrderDetailType | undefined;
        Hold?: {
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } | undefined;
        FundsSent?: {
            Denom?: string | undefined;
            Amount?: number | undefined;
        } | undefined;
        OrderType?: OrderType | undefined;
        OrderState?: {
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } | undefined;
        PaymentState?: PaymentState | undefined;
        AmountExecuted?: number | undefined;
        AmountExecutedExp?: number | undefined;
        UsedFundsAmount?: number | undefined;
        UsedFundsAmountExp?: number | undefined;
        Costs?: number | undefined;
        CostsExp?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        LimitPriceFloat?: number | undefined;
    } & {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        LimitPrice?: number | undefined;
        LimitPriceExp?: number | undefined;
        FillOrKill?: boolean | undefined;
        ExpiresAt?: string | undefined;
        OrderDetailType?: OrderDetailType | undefined;
        Hold?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & { [K_4 in Exclude<keyof I_1["Hold"], keyof Hold>]: never; }) | undefined;
        FundsSent?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & { [K_5 in Exclude<keyof I_1["FundsSent"], keyof Coin>]: never; }) | undefined;
        OrderType?: OrderType | undefined;
        OrderState?: ({
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & {
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & { [K_6 in Exclude<keyof I_1["OrderState"], keyof OrderState>]: never; }) | undefined;
        PaymentState?: PaymentState | undefined;
        AmountExecuted?: number | undefined;
        AmountExecutedExp?: number | undefined;
        UsedFundsAmount?: number | undefined;
        UsedFundsAmountExp?: number | undefined;
        Costs?: number | undefined;
        CostsExp?: number | undefined;
        TimeInForce?: TimeInForce | undefined;
        LimitPriceFloat?: number | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof OrderInstruction>]: never; }>(object: I_1): OrderInstruction;
};
export declare const Orders: {
    encode(message: Orders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Orders;
    fromJSON(object: any): Orders;
    toJSON(message: Orders): unknown;
    create<I extends {
        Orders?: {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Orders?: ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        }[] & ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        } & {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: ({
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } & {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K in Exclude<keyof I["Orders"][number]["Instruction"]["Hold"], keyof Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_1 in Exclude<keyof I["Orders"][number]["Instruction"]["FundsSent"], keyof Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & { [K_2 in Exclude<keyof I["Orders"][number]["Instruction"]["OrderState"], keyof OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } & { [K_3 in Exclude<keyof I["Orders"][number]["Instruction"], keyof OrderInstruction>]: never; }) | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: ({
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } & {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: ({
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } & {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } & { [K_4 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./sologenic/com-fs-order-model/broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_5 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                OrderQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_6 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_7 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledAvgPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_8 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                LimitPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_9 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                StopPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_10 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_11 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPercent?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_12 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                HWM?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_13 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_14 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_15 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_16 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_17 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: ({
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & {
                    Commission?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_18 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & { [K_19 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
            } & { [K_20 in Exclude<keyof I["Orders"][number]["BrokerOrderDetails"], keyof BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_21 in Exclude<keyof I["Orders"][number]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        } & { [K_22 in Exclude<keyof I["Orders"][number], keyof Order>]: never; })[] & { [K_23 in Exclude<keyof I["Orders"], keyof {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_24 in Exclude<keyof I, keyof Orders>]: never; }>(base?: I | undefined): Orders;
    fromPartial<I_1 extends {
        Orders?: {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Orders?: ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        }[] & ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        } & {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: ({
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } & {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_25 in Exclude<keyof I_1["Orders"][number]["Instruction"]["Hold"], keyof Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_26 in Exclude<keyof I_1["Orders"][number]["Instruction"]["FundsSent"], keyof Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & { [K_27 in Exclude<keyof I_1["Orders"][number]["Instruction"]["OrderState"], keyof OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } & { [K_28 in Exclude<keyof I_1["Orders"][number]["Instruction"], keyof OrderInstruction>]: never; }) | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: ({
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } & {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: ({
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } & {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } & { [K_29 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./sologenic/com-fs-order-model/broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_30 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                OrderQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_31 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_32 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledAvgPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_33 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                LimitPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_34 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                StopPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_35 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_36 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPercent?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_37 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                HWM?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_38 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_39 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_40 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_41 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_42 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: ({
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & {
                    Commission?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_43 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["CommissionSettings"]["Commission"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } & { [K_44 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"]["CommissionSettings"], keyof import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionSettings>]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I_1["Orders"][number]["BrokerOrderDetails"], keyof BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_46 in Exclude<keyof I_1["Orders"][number]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        } & { [K_47 in Exclude<keyof I_1["Orders"][number], keyof Order>]: never; })[] & { [K_48 in Exclude<keyof I_1["Orders"], keyof {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Instruction?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                LimitPrice?: number | undefined;
                LimitPriceExp?: number | undefined;
                FillOrKill?: boolean | undefined;
                ExpiresAt?: string | undefined;
                OrderDetailType?: OrderDetailType | undefined;
                Hold?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } | undefined;
                FundsSent?: {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
                TimeInForce?: TimeInForce | undefined;
                LimitPriceFloat?: number | undefined;
            } | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            TransactionType?: TransactionType | undefined;
            TXID?: string | undefined;
            GasFee?: number | undefined;
            GasFeeUSD?: number | undefined;
            DetectedAt?: Date | undefined;
            Height?: number | undefined;
            InternalOrderState?: InternalOrderState | undefined;
            BrokerOrderDetails?: {
                BrokerAssignedID?: string | undefined;
                ClientOrderID?: {
                    Network?: Network | undefined;
                    SmartContractAddr?: string | undefined;
                    OrderID?: number | undefined;
                } | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./sologenic/com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./sologenic/com-fs-order-model/broker").OrderClass | undefined;
                Type?: import("./sologenic/com-fs-order-model/broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: TimeInForce | undefined;
                Notional?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                OrderQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                FilledAvgPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                LimitPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                StopPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                TrailPercent?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                HWM?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./sologenic/com-fs-order-model/broker").BrokerOrderStatus | undefined;
                TotalPosition?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialPrice?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                PartialQty?: {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./sologenic/com-fs-order-model/broker").ClearingBroker | undefined;
                EventID?: string | undefined;
                EventTime?: Date | undefined;
                CommissionSettings?: {
                    Commission?: {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } | undefined;
                    CommissionType?: import("./sologenic/com-fs-utils-lib/models/commission/commission").CommissionType | undefined;
                } | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./sologenic/com-fs-order-model/util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_49 in Exclude<keyof I_1, keyof Orders>]: never; }>(object: I_1): Orders;
};
export declare const Hold: {
    encode(message: Hold, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Hold;
    fromJSON(object: any): Hold;
    toJSON(message: Hold): unknown;
    create<I extends {
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
    } & {
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Hold>]: never; }>(base?: I | undefined): Hold;
    fromPartial<I_1 extends {
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
    } & {
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Hold>]: never; }>(object: I_1): Hold;
};
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    create<I extends {
        Denom?: string | undefined;
        Amount?: number | undefined;
    } & {
        Denom?: string | undefined;
        Amount?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Coin>]: never; }>(base?: I | undefined): Coin;
    fromPartial<I_1 extends {
        Denom?: string | undefined;
        Amount?: number | undefined;
    } & {
        Denom?: string | undefined;
        Amount?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Coin>]: never; }>(object: I_1): Coin;
};
export declare const OrderState: {
    encode(message: OrderState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderState;
    fromJSON(object: any): OrderState;
    toJSON(message: OrderState): unknown;
    create<I extends {
        OrderStateType?: OrderStateType | undefined;
        OrderCancelledBy?: OrderCancelledBy | undefined;
    } & {
        OrderStateType?: OrderStateType | undefined;
        OrderCancelledBy?: OrderCancelledBy | undefined;
    } & { [K in Exclude<keyof I, keyof OrderState>]: never; }>(base?: I | undefined): OrderState;
    fromPartial<I_1 extends {
        OrderStateType?: OrderStateType | undefined;
        OrderCancelledBy?: OrderCancelledBy | undefined;
    } & {
        OrderStateType?: OrderStateType | undefined;
        OrderCancelledBy?: OrderCancelledBy | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof OrderState>]: never; }>(object: I_1): OrderState;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
