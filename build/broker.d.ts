import _m0 from "protobufjs/minimal";
import { AssetType } from "../com-fs-asset-model/asset";
import { Decimal } from "../com-fs-utils-lib/go/decimal/decimal";
import { Network } from "../com-fs-utils-lib/models/metadata/metadata";
import { OrderType, ProcessInfo } from "./util";
export declare const protobufPackage = "order";
export declare enum ClearingBroker {
    NOT_USED_CLEARING_BROKER = 0,
    ALPACA = 1,
    RQD = 2,
    UNRECOGNIZED = -1
}
export declare function clearingBrokerFromJSON(object: any): ClearingBroker;
export declare function clearingBrokerToJSON(object: ClearingBroker): string;
export declare enum TimeInForce {
    NOT_USED_TIME_IN_FORCE = 0,
    DAY = 1,
    /** GOOD_TIL_CANCELED - GTC */
    GOOD_TIL_CANCELED = 2,
    /** AT_THE_OPENING - OPG */
    AT_THE_OPENING = 3,
    /** AT_THE_CLOSE - CLS */
    AT_THE_CLOSE = 4,
    /** IMMEDIATE_OR_CANCEL - IOC */
    IMMEDIATE_OR_CANCEL = 5,
    /** FILL_OR_KILL - FOK */
    FILL_OR_KILL = 6,
    /** GOOD_TIL_TIME - GTT */
    GOOD_TIL_TIME = 7,
    UNRECOGNIZED = -1
}
export declare function timeInForceFromJSON(object: any): TimeInForce;
export declare function timeInForceToJSON(object: TimeInForce): string;
export declare enum TradeType {
    NOT_USED_TRADE_TYPE = 0,
    MARKET = 1,
    LIMIT = 2,
    STOP = 3,
    STOP_LIMIT = 4,
    OPEN_CLOSE_AUCTION = 5,
    BRACKET = 6,
    /** ONE_CANCELS_OTHER - OCO */
    ONE_CANCELS_OTHER = 7,
    /** ONE_TRIGGERS_OTHER - OTO */
    ONE_TRIGGERS_OTHER = 8,
    TRAILING_STOP = 9,
    UNRECOGNIZED = -1
}
export declare function tradeTypeFromJSON(object: any): TradeType;
export declare function tradeTypeToJSON(object: TradeType): string;
export declare enum OrderClass {
    NOT_USED_ORDER_CLASS = 0,
    ORDER_CLASS_SIMPLE = 1,
    ORDER_CLASS_BRACKET = 2,
    /** ORDER_CLASS_ONE_CANCELS_OTHER - OCO */
    ORDER_CLASS_ONE_CANCELS_OTHER = 3,
    /** ORDER_CLASS_ONE_TRIGGERS_OTHER - OTO */
    ORDER_CLASS_ONE_TRIGGERS_OTHER = 4,
    UNRECOGNIZED = -1
}
export declare function orderClassFromJSON(object: any): OrderClass;
export declare function orderClassToJSON(object: OrderClass): string;
export declare enum BrokerOrderStatus {
    NOT_USED_ORDER_STATUS = 0,
    /** PENDING_NEW - common statuses */
    PENDING_NEW = 1,
    /** NEW - the order has been received by the broker, and routed to exchanges for execution. */
    NEW = 2,
    /** PARTIALLY_FILLED - the order has been partially filled. */
    PARTIALLY_FILLED = 3,
    /** FILLED - the order has been filled, and no further updates will occur for the order. */
    FILLED = 4,
    /** DONE_FOR_DAY - the order is done executing for the day, and will not receive further updates until the next trading day. */
    DONE_FOR_DAY = 5,
    /** CANCELED - the order has been canceled, and no further updates will occur for the order. This can be either due to a cancel request by the user, or the order has been canceled by the exchanges due to its time-in-force. */
    CANCELED = 6,
    /** EXPIRED - the order has expired, and no further updates will occur for the order. */
    EXPIRED = 7,
    /** PENDING_CANCEL - uncommon statuses */
    PENDING_CANCEL = 8,
    /** ACCEPTED - the order has been received by the broker, but hasn’t yet been routed to the execution venue. */
    ACCEPTED = 9,
    /** ACCEPTED_FOR_BIDDING - the order has been received by exchanges, and is evaluated for pricing. */
    ACCEPTED_FOR_BIDDING = 10,
    /** STOPPED - the order has been stopped, and a trade is guaranteed for the order, usually at a stated price or better, but has not yet occurred. */
    STOPPED = 11,
    /** REJECTED - the order has been rejected, and no further updates will occur for the order. */
    REJECTED = 12,
    /** SUSPENDED - the order has been suspended, and is not eligible for trading. */
    SUSPENDED = 13,
    /** CALCULATED - the order has been completed for the day (either filled or done for day), but remaining settlement calculations are still pending. */
    CALCULATED = 14,
    UNRECOGNIZED = -1
}
export declare function brokerOrderStatusFromJSON(object: any): BrokerOrderStatus;
export declare function brokerOrderStatusToJSON(object: BrokerOrderStatus): string;
/** Key orderID-SmartContractAddr-network (is as unique identifier for the order in message to the broker) */
export interface BrokerOrderDetails {
    /** auto generated ID from the broker */
    BrokerAssignedID: string;
    /** unique identifier for the order in message to the broker, value is from the key function */
    ClientOrderID: ClientOrderID | undefined;
    SubmittedAt: Date | undefined;
    FilledAt?: Date | undefined;
    ExpiredAt?: Date | undefined;
    CancelledAt?: Date | undefined;
    FailedAt?: Date | undefined;
    AssetID: string;
    Symbol: string;
    /** Also called AssetType in the asset model */
    AssetClass: AssetType;
    OrderClass: OrderClass;
    Type: TradeType;
    Side: OrderType;
    TimeInForce: TimeInForce;
    /** Notional and Qty are optional as one can be null if the other is present. However, both cannot be null or present at the same time. */
    Notional?: Decimal | undefined;
    OrderQty?: Decimal | undefined;
    /** defaults to 0, updated as previous `FilledQty` + `PartialQty` */
    FilledQty: Decimal | undefined;
    FilledAvgPrice?: Decimal | undefined;
    LimitPrice?: Decimal | undefined;
    StopPrice?: Decimal | undefined;
    TrailPrice?: Decimal | undefined;
    TrailPercent?: Decimal | undefined;
    /** High Water Mark, used for trailing stop orders */
    HWM?: Decimal | undefined;
    /** defaults to false, High Water Mark is used for trailing stop orders */
    ExtendedHours: boolean;
    CreatedAt: Date | undefined;
    UpdatedAt?: Date | undefined;
    /** status of the order in exchange */
    Status: BrokerOrderStatus;
    /** Since all orders will flow through Sologenic's custodial account, this will represent the total count of all shares on our platform. */
    TotalPosition?: Decimal | undefined;
    /**
     * Represents the price of the order processed at the time of partial fill. For example, if a 3 step partial fill occurs for an order at prices $1, $1.1 and $0.9,
     * the `PartialPrice` will be $1, $1.1 and $0.9 respectively. The average of these prices will be the `FilledAvgPrice`.
     */
    PartialPrice?: Decimal | undefined;
    /**
     * Represents the partial order processed at the time of partial fill.
     * For example, if a order for 10 shares is partially filled with 5, 3 and 2 shares, the `PartialQty` will be 5, 3 and 2 respectively.
     */
    PartialQty?: Decimal | undefined;
    /** Bookkeeping: did we process this event from the broker order log? */
    ProcessInfo?: ProcessInfo | undefined;
    /** ID used by logs to identify the instance where the log was created/ processed */
    InstanceID?: string | undefined;
    /** Broker that cleared the order, e.g. Alpaca, RQD, etc. */
    ClearingBroker: ClearingBroker;
}
export interface ClientOrderID {
    Network: Network;
    SmartContractAddr: string;
    OrderID: number;
}
export interface BrokerOrderDetailsList {
    BrokerOrderDetailsList: BrokerOrderDetails[];
}
export declare const BrokerOrderDetails: {
    encode(message: BrokerOrderDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BrokerOrderDetails;
    fromJSON(object: any): BrokerOrderDetails;
    toJSON(message: BrokerOrderDetails): unknown;
    create<I extends {
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
        AssetClass?: AssetType | undefined;
        OrderClass?: OrderClass | undefined;
        Type?: TradeType | undefined;
        Side?: OrderType | undefined;
        TimeInForce?: TimeInForce | undefined;
        Notional?: Decimal | undefined;
        OrderQty?: Decimal | undefined;
        FilledQty?: Decimal | undefined;
        FilledAvgPrice?: Decimal | undefined;
        LimitPrice?: Decimal | undefined;
        StopPrice?: Decimal | undefined;
        TrailPrice?: Decimal | undefined;
        TrailPercent?: Decimal | undefined;
        HWM?: Decimal | undefined;
        ExtendedHours?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Status?: BrokerOrderStatus | undefined;
        TotalPosition?: Decimal | undefined;
        PartialPrice?: Decimal | undefined;
        PartialQty?: Decimal | undefined;
        ProcessInfo?: {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } | undefined;
        InstanceID?: string | undefined;
        ClearingBroker?: ClearingBroker | undefined;
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
        } & { [K in Exclude<keyof I["ClientOrderID"], keyof ClientOrderID>]: never; }) | undefined;
        SubmittedAt?: Date | undefined;
        FilledAt?: Date | undefined;
        ExpiredAt?: Date | undefined;
        CancelledAt?: Date | undefined;
        FailedAt?: Date | undefined;
        AssetID?: string | undefined;
        Symbol?: string | undefined;
        AssetClass?: AssetType | undefined;
        OrderClass?: OrderClass | undefined;
        Type?: TradeType | undefined;
        Side?: OrderType | undefined;
        TimeInForce?: TimeInForce | undefined;
        Notional?: Decimal | undefined;
        OrderQty?: Decimal | undefined;
        FilledQty?: Decimal | undefined;
        FilledAvgPrice?: Decimal | undefined;
        LimitPrice?: Decimal | undefined;
        StopPrice?: Decimal | undefined;
        TrailPrice?: Decimal | undefined;
        TrailPercent?: Decimal | undefined;
        HWM?: Decimal | undefined;
        ExtendedHours?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Status?: BrokerOrderStatus | undefined;
        TotalPosition?: Decimal | undefined;
        PartialPrice?: Decimal | undefined;
        PartialQty?: Decimal | undefined;
        ProcessInfo?: ({
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & { [K_1 in Exclude<keyof I["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
        InstanceID?: string | undefined;
        ClearingBroker?: ClearingBroker | undefined;
    } & { [K_2 in Exclude<keyof I, keyof BrokerOrderDetails>]: never; }>(base?: I | undefined): BrokerOrderDetails;
    fromPartial<I_1 extends {
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
        AssetClass?: AssetType | undefined;
        OrderClass?: OrderClass | undefined;
        Type?: TradeType | undefined;
        Side?: OrderType | undefined;
        TimeInForce?: TimeInForce | undefined;
        Notional?: Decimal | undefined;
        OrderQty?: Decimal | undefined;
        FilledQty?: Decimal | undefined;
        FilledAvgPrice?: Decimal | undefined;
        LimitPrice?: Decimal | undefined;
        StopPrice?: Decimal | undefined;
        TrailPrice?: Decimal | undefined;
        TrailPercent?: Decimal | undefined;
        HWM?: Decimal | undefined;
        ExtendedHours?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Status?: BrokerOrderStatus | undefined;
        TotalPosition?: Decimal | undefined;
        PartialPrice?: Decimal | undefined;
        PartialQty?: Decimal | undefined;
        ProcessInfo?: {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } | undefined;
        InstanceID?: string | undefined;
        ClearingBroker?: ClearingBroker | undefined;
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
        } & { [K_3 in Exclude<keyof I_1["ClientOrderID"], keyof ClientOrderID>]: never; }) | undefined;
        SubmittedAt?: Date | undefined;
        FilledAt?: Date | undefined;
        ExpiredAt?: Date | undefined;
        CancelledAt?: Date | undefined;
        FailedAt?: Date | undefined;
        AssetID?: string | undefined;
        Symbol?: string | undefined;
        AssetClass?: AssetType | undefined;
        OrderClass?: OrderClass | undefined;
        Type?: TradeType | undefined;
        Side?: OrderType | undefined;
        TimeInForce?: TimeInForce | undefined;
        Notional?: Decimal | undefined;
        OrderQty?: Decimal | undefined;
        FilledQty?: Decimal | undefined;
        FilledAvgPrice?: Decimal | undefined;
        LimitPrice?: Decimal | undefined;
        StopPrice?: Decimal | undefined;
        TrailPrice?: Decimal | undefined;
        TrailPercent?: Decimal | undefined;
        HWM?: Decimal | undefined;
        ExtendedHours?: boolean | undefined;
        CreatedAt?: Date | undefined;
        UpdatedAt?: Date | undefined;
        Status?: BrokerOrderStatus | undefined;
        TotalPosition?: Decimal | undefined;
        PartialPrice?: Decimal | undefined;
        PartialQty?: Decimal | undefined;
        ProcessInfo?: ({
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & { [K_4 in Exclude<keyof I_1["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
        InstanceID?: string | undefined;
        ClearingBroker?: ClearingBroker | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof BrokerOrderDetails>]: never; }>(object: I_1): BrokerOrderDetails;
};
export declare const ClientOrderID: {
    encode(message: ClientOrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ClientOrderID;
    fromJSON(object: any): ClientOrderID;
    toJSON(message: ClientOrderID): unknown;
    create<I extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        OrderID?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        OrderID?: number | undefined;
    } & { [K in Exclude<keyof I, keyof ClientOrderID>]: never; }>(base?: I | undefined): ClientOrderID;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        OrderID?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        OrderID?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ClientOrderID>]: never; }>(object: I_1): ClientOrderID;
};
export declare const BrokerOrderDetailsList: {
    encode(message: BrokerOrderDetailsList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): BrokerOrderDetailsList;
    fromJSON(object: any): BrokerOrderDetailsList;
    toJSON(message: BrokerOrderDetailsList): unknown;
    create<I extends {
        BrokerOrderDetailsList?: {
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        }[] | undefined;
    } & {
        BrokerOrderDetailsList?: ({
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        }[] & ({
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
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
            } & { [K in Exclude<keyof I["BrokerOrderDetailsList"][number]["ClientOrderID"], keyof ClientOrderID>]: never; }) | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_1 in Exclude<keyof I["BrokerOrderDetailsList"][number]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        } & { [K_2 in Exclude<keyof I["BrokerOrderDetailsList"][number], keyof BrokerOrderDetails>]: never; })[] & { [K_3 in Exclude<keyof I["BrokerOrderDetailsList"], keyof {
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, "BrokerOrderDetailsList">]: never; }>(base?: I | undefined): BrokerOrderDetailsList;
    fromPartial<I_1 extends {
        BrokerOrderDetailsList?: {
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        }[] | undefined;
    } & {
        BrokerOrderDetailsList?: ({
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        }[] & ({
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
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
            } & { [K_5 in Exclude<keyof I_1["BrokerOrderDetailsList"][number]["ClientOrderID"], keyof ClientOrderID>]: never; }) | undefined;
            SubmittedAt?: Date | undefined;
            FilledAt?: Date | undefined;
            ExpiredAt?: Date | undefined;
            CancelledAt?: Date | undefined;
            FailedAt?: Date | undefined;
            AssetID?: string | undefined;
            Symbol?: string | undefined;
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_6 in Exclude<keyof I_1["BrokerOrderDetailsList"][number]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        } & { [K_7 in Exclude<keyof I_1["BrokerOrderDetailsList"][number], keyof BrokerOrderDetails>]: never; })[] & { [K_8 in Exclude<keyof I_1["BrokerOrderDetailsList"], keyof {
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
            AssetClass?: AssetType | undefined;
            OrderClass?: OrderClass | undefined;
            Type?: TradeType | undefined;
            Side?: OrderType | undefined;
            TimeInForce?: TimeInForce | undefined;
            Notional?: Decimal | undefined;
            OrderQty?: Decimal | undefined;
            FilledQty?: Decimal | undefined;
            FilledAvgPrice?: Decimal | undefined;
            LimitPrice?: Decimal | undefined;
            StopPrice?: Decimal | undefined;
            TrailPrice?: Decimal | undefined;
            TrailPercent?: Decimal | undefined;
            HWM?: Decimal | undefined;
            ExtendedHours?: boolean | undefined;
            CreatedAt?: Date | undefined;
            UpdatedAt?: Date | undefined;
            Status?: BrokerOrderStatus | undefined;
            TotalPosition?: Decimal | undefined;
            PartialPrice?: Decimal | undefined;
            PartialQty?: Decimal | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            ClearingBroker?: ClearingBroker | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, "BrokerOrderDetailsList">]: never; }>(object: I_1): BrokerOrderDetailsList;
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
