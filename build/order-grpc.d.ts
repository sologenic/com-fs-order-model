/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Empty } from "./google/protobuf/empty";
import { InternalOrderState, Order, Orders, OrderStateType, PaymentState, TransactionType } from "./order";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
import { Key, OrderType, ProcessInfo } from "./util";
export declare const protobufPackage = "order";
export interface UpsertMessage {
    Order: Order | undefined;
    OrderStepInstruction: OrderStepInstruction | undefined;
}
export interface OrderID {
    TXID: string;
    Network: Network;
}
export interface OrderQuery {
    Network: Network;
    Offset?: number | undefined;
    SmartContractAddr?: string | undefined;
    TransactionType?: TransactionType | undefined;
    TXID?: string | undefined;
    Height?: number | undefined;
    InternalOrderState?: InternalOrderState | undefined;
    ProcessInfo?: ProcessInfo | undefined;
    /** Fields in OrderInstruction */
    Creator?: string | undefined;
    OrderID?: number | undefined;
    Denom?: string | undefined;
    OrderType?: OrderType | undefined;
    OrderStateType?: OrderStateType | undefined;
    PaymentState?: PaymentState | undefined;
}
export interface OrderStepInstruction {
    Key?: string | undefined;
    Order?: Order | undefined;
    MustHaveState: InternalOrderState[];
    TargetState: InternalOrderState;
}
export declare const UpsertMessage: {
    encode(message: UpsertMessage, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UpsertMessage;
    fromJSON(object: any): UpsertMessage;
    toJSON(message: UpsertMessage): unknown;
    create<I extends {
        Order?: {
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
        } | undefined;
        OrderStepInstruction?: {
            Key?: string | undefined;
            Order?: {
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            MustHaveState?: InternalOrderState[] | undefined;
            TargetState?: InternalOrderState | undefined;
        } | undefined;
    } & {
        Order?: ({
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K in Exclude<keyof I["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_1 in Exclude<keyof I["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & { [K_2 in Exclude<keyof I["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_3 in Exclude<keyof I["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
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
                } & { [K_4 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_5 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                OrderQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_6 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_7 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledAvgPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_8 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                LimitPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_9 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                StopPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_10 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_11 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPercent?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_12 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                HWM?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_13 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_14 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_15 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_16 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_17 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
            } & { [K_18 in Exclude<keyof I["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_19 in Exclude<keyof I["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
        } & { [K_20 in Exclude<keyof I["Order"], keyof Order>]: never; }) | undefined;
        OrderStepInstruction?: ({
            Key?: string | undefined;
            Order?: {
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            MustHaveState?: InternalOrderState[] | undefined;
            TargetState?: InternalOrderState | undefined;
        } & {
            Key?: string | undefined;
            Order?: ({
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
                    Hold?: ({
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                        AmountExp?: number | undefined;
                    } & {
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                        AmountExp?: number | undefined;
                    } & { [K_21 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                    FundsSent?: ({
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & {
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & { [K_22 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                    OrderType?: OrderType | undefined;
                    OrderState?: ({
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & {
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & { [K_23 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
                } & { [K_24 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
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
                    } & { [K_25 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                    SubmittedAt?: Date | undefined;
                    FilledAt?: Date | undefined;
                    ExpiredAt?: Date | undefined;
                    CancelledAt?: Date | undefined;
                    FailedAt?: Date | undefined;
                    AssetID?: string | undefined;
                    Symbol?: string | undefined;
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_26 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    OrderQty?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_27 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    FilledQty?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_28 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    FilledAvgPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_29 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    LimitPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_30 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    StopPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_31 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    TrailPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_32 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    TrailPercent?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_33 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    HWM?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_34 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_35 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    PartialPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_36 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    PartialQty?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_37 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    ProcessInfo?: ({
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & { [K_38 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                    InstanceID?: string | undefined;
                } & { [K_39 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_40 in Exclude<keyof I["OrderStepInstruction"]["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
            } & { [K_41 in Exclude<keyof I["OrderStepInstruction"]["Order"], keyof Order>]: never; }) | undefined;
            MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_42 in Exclude<keyof I["OrderStepInstruction"]["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
            TargetState?: InternalOrderState | undefined;
        } & { [K_43 in Exclude<keyof I["OrderStepInstruction"], keyof OrderStepInstruction>]: never; }) | undefined;
    } & { [K_44 in Exclude<keyof I, keyof UpsertMessage>]: never; }>(base?: I | undefined): UpsertMessage;
    fromPartial<I_1 extends {
        Order?: {
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
        } | undefined;
        OrderStepInstruction?: {
            Key?: string | undefined;
            Order?: {
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            MustHaveState?: InternalOrderState[] | undefined;
            TargetState?: InternalOrderState | undefined;
        } | undefined;
    } & {
        Order?: ({
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_45 in Exclude<keyof I_1["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_46 in Exclude<keyof I_1["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & { [K_47 in Exclude<keyof I_1["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_48 in Exclude<keyof I_1["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
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
                } & { [K_49 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_50 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                OrderQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_51 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_52 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledAvgPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_53 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                LimitPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_54 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                StopPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_55 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_56 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPercent?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_57 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                HWM?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_58 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_59 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_60 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_61 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_62 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
            } & { [K_63 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_64 in Exclude<keyof I_1["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
        } & { [K_65 in Exclude<keyof I_1["Order"], keyof Order>]: never; }) | undefined;
        OrderStepInstruction?: ({
            Key?: string | undefined;
            Order?: {
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            MustHaveState?: InternalOrderState[] | undefined;
            TargetState?: InternalOrderState | undefined;
        } & {
            Key?: string | undefined;
            Order?: ({
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
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
                    OrderDetailType?: import("./order").OrderDetailType | undefined;
                    Hold?: ({
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                        AmountExp?: number | undefined;
                    } & {
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                        AmountExp?: number | undefined;
                    } & { [K_66 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                    FundsSent?: ({
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & {
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & { [K_67 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                    OrderType?: OrderType | undefined;
                    OrderState?: ({
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & {
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & { [K_68 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
                } & { [K_69 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
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
                    Status?: import("./broker").BrokerOrderStatus | undefined;
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
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
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
                    } & { [K_70 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                    SubmittedAt?: Date | undefined;
                    FilledAt?: Date | undefined;
                    ExpiredAt?: Date | undefined;
                    CancelledAt?: Date | undefined;
                    FailedAt?: Date | undefined;
                    AssetID?: string | undefined;
                    Symbol?: string | undefined;
                    AssetClass?: import("./broker").AssetClass | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_71 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    OrderQty?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_72 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    FilledQty?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_73 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    FilledAvgPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_74 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    LimitPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_75 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    StopPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_76 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    TrailPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_77 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    TrailPercent?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_78 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    HWM?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_79 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_80 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    PartialPrice?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_81 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    PartialQty?: ({
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & {
                        Value?: number | undefined;
                        Exp?: number | undefined;
                    } & { [K_82 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                    ProcessInfo?: ({
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & { [K_83 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                    InstanceID?: string | undefined;
                } & { [K_84 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_85 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
            } & { [K_86 in Exclude<keyof I_1["OrderStepInstruction"]["Order"], keyof Order>]: never; }) | undefined;
            MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_87 in Exclude<keyof I_1["OrderStepInstruction"]["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
            TargetState?: InternalOrderState | undefined;
        } & { [K_88 in Exclude<keyof I_1["OrderStepInstruction"], keyof OrderStepInstruction>]: never; }) | undefined;
    } & { [K_89 in Exclude<keyof I_1, keyof UpsertMessage>]: never; }>(object: I_1): UpsertMessage;
};
export declare const OrderID: {
    encode(message: OrderID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderID;
    fromJSON(object: any): OrderID;
    toJSON(message: OrderID): unknown;
    create<I extends {
        TXID?: string | undefined;
        Network?: Network | undefined;
    } & {
        TXID?: string | undefined;
        Network?: Network | undefined;
    } & { [K in Exclude<keyof I, keyof OrderID>]: never; }>(base?: I | undefined): OrderID;
    fromPartial<I_1 extends {
        TXID?: string | undefined;
        Network?: Network | undefined;
    } & {
        TXID?: string | undefined;
        Network?: Network | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof OrderID>]: never; }>(object: I_1): OrderID;
};
export declare const OrderQuery: {
    encode(message: OrderQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderQuery;
    fromJSON(object: any): OrderQuery;
    toJSON(message: OrderQuery): unknown;
    create<I extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        SmartContractAddr?: string | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        ProcessInfo?: {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } | undefined;
        Creator?: string | undefined;
        OrderID?: number | undefined;
        Denom?: string | undefined;
        OrderType?: OrderType | undefined;
        OrderStateType?: OrderStateType | undefined;
        PaymentState?: PaymentState | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        SmartContractAddr?: string | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        ProcessInfo?: ({
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & { [K in Exclude<keyof I["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
        Creator?: string | undefined;
        OrderID?: number | undefined;
        Denom?: string | undefined;
        OrderType?: OrderType | undefined;
        OrderStateType?: OrderStateType | undefined;
        PaymentState?: PaymentState | undefined;
    } & { [K_1 in Exclude<keyof I, keyof OrderQuery>]: never; }>(base?: I | undefined): OrderQuery;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        Offset?: number | undefined;
        SmartContractAddr?: string | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        ProcessInfo?: {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } | undefined;
        Creator?: string | undefined;
        OrderID?: number | undefined;
        Denom?: string | undefined;
        OrderType?: OrderType | undefined;
        OrderStateType?: OrderStateType | undefined;
        PaymentState?: PaymentState | undefined;
    } & {
        Network?: Network | undefined;
        Offset?: number | undefined;
        SmartContractAddr?: string | undefined;
        TransactionType?: TransactionType | undefined;
        TXID?: string | undefined;
        Height?: number | undefined;
        InternalOrderState?: InternalOrderState | undefined;
        ProcessInfo?: ({
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & {
            ProcessState?: import("./util").ProcessState | undefined;
            ProcessedAt?: Date | undefined;
        } & { [K_2 in Exclude<keyof I_1["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
        Creator?: string | undefined;
        OrderID?: number | undefined;
        Denom?: string | undefined;
        OrderType?: OrderType | undefined;
        OrderStateType?: OrderStateType | undefined;
        PaymentState?: PaymentState | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof OrderQuery>]: never; }>(object: I_1): OrderQuery;
};
export declare const OrderStepInstruction: {
    encode(message: OrderStepInstruction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderStepInstruction;
    fromJSON(object: any): OrderStepInstruction;
    toJSON(message: OrderStepInstruction): unknown;
    create<I extends {
        Key?: string | undefined;
        Order?: {
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
        } | undefined;
        MustHaveState?: InternalOrderState[] | undefined;
        TargetState?: InternalOrderState | undefined;
    } & {
        Key?: string | undefined;
        Order?: ({
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K in Exclude<keyof I["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_1 in Exclude<keyof I["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & { [K_2 in Exclude<keyof I["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_3 in Exclude<keyof I["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
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
                } & { [K_4 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_5 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                OrderQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_6 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_7 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledAvgPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_8 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                LimitPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_9 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                StopPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_10 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_11 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPercent?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_12 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                HWM?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_13 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_14 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_15 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_16 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_17 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
            } & { [K_18 in Exclude<keyof I["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_19 in Exclude<keyof I["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
        } & { [K_20 in Exclude<keyof I["Order"], keyof Order>]: never; }) | undefined;
        MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_21 in Exclude<keyof I["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
        TargetState?: InternalOrderState | undefined;
    } & { [K_22 in Exclude<keyof I, keyof OrderStepInstruction>]: never; }>(base?: I | undefined): OrderStepInstruction;
    fromPartial<I_1 extends {
        Key?: string | undefined;
        Order?: {
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
        } | undefined;
        MustHaveState?: InternalOrderState[] | undefined;
        TargetState?: InternalOrderState | undefined;
    } & {
        Key?: string | undefined;
        Order?: ({
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
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
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
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
                OrderDetailType?: import("./order").OrderDetailType | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_23 in Exclude<keyof I_1["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_24 in Exclude<keyof I_1["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & { [K_25 in Exclude<keyof I_1["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_26 in Exclude<keyof I_1["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
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
                Status?: import("./broker").BrokerOrderStatus | undefined;
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
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
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
                } & { [K_27 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("./broker").AssetClass | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_28 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["Notional"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                OrderQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_29 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["OrderQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_30 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["FilledQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                FilledAvgPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_31 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["FilledAvgPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                LimitPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_32 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["LimitPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                StopPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_33 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["StopPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_34 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["TrailPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                TrailPercent?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_35 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["TrailPercent"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                HWM?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_36 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["HWM"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_37 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["TotalPosition"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialPrice?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_38 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["PartialPrice"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                PartialQty?: ({
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & {
                    Value?: number | undefined;
                    Exp?: number | undefined;
                } & { [K_39 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["PartialQty"], keyof import("./sologenic/com-fs-utils-lib/go/decimal/decimal").Decimal>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_40 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
            } & { [K_41 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_42 in Exclude<keyof I_1["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
        } & { [K_43 in Exclude<keyof I_1["Order"], keyof Order>]: never; }) | undefined;
        MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_44 in Exclude<keyof I_1["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
        TargetState?: InternalOrderState | undefined;
    } & { [K_45 in Exclude<keyof I_1, keyof OrderStepInstruction>]: never; }>(object: I_1): OrderStepInstruction;
};
export type OrderServiceService = typeof OrderServiceService;
export declare const OrderServiceService: {
    readonly getById: {
        readonly path: "/order.OrderService/GetByID";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OrderID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => OrderID;
        readonly responseSerialize: (value: Order) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Order;
    };
    readonly getByKey: {
        readonly path: "/order.OrderService/GetByKey";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Key) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Key;
        readonly responseSerialize: (value: Order) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Order;
    };
    readonly getAll: {
        readonly path: "/order.OrderService/GetAll";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OrderQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => OrderQuery;
        readonly responseSerialize: (value: Orders) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Orders;
    };
    /** TODO: determine if we need this method: recovery uses unprocessed (open or locked) logs */
    readonly getAllUnfinished: {
        readonly path: "/order.OrderService/GetAllUnfinished";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Orders) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Orders;
    };
    /** Transactional operations */
    readonly upsertWithState: {
        readonly path: "/order.OrderService/UpsertWithState";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: UpsertMessage) => Buffer;
        readonly requestDeserialize: (value: Buffer) => UpsertMessage;
        readonly responseSerialize: (value: OrderID) => Buffer;
        readonly responseDeserialize: (value: Buffer) => OrderID;
    };
    readonly updateStep: {
        readonly path: "/order.OrderService/UpdateStep";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: OrderStepInstruction) => Buffer;
        readonly requestDeserialize: (value: Buffer) => OrderStepInstruction;
        readonly responseSerialize: (value: Order) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Order;
    };
};
export interface OrderServiceServer extends UntypedServiceImplementation {
    getById: handleUnaryCall<OrderID, Order>;
    getByKey: handleUnaryCall<Key, Order>;
    getAll: handleUnaryCall<OrderQuery, Orders>;
    /** TODO: determine if we need this method: recovery uses unprocessed (open or locked) logs */
    getAllUnfinished: handleUnaryCall<Empty, Orders>;
    /** Transactional operations */
    upsertWithState: handleUnaryCall<UpsertMessage, OrderID>;
    updateStep: handleUnaryCall<OrderStepInstruction, Order>;
}
export interface OrderServiceClient extends Client {
    getById(request: OrderID, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getById(request: OrderID, metadata: Metadata, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getById(request: OrderID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getByKey(request: Key, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getByKey(request: Key, metadata: Metadata, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getByKey(request: Key, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getAll(request: OrderQuery, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    getAll(request: OrderQuery, metadata: Metadata, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    getAll(request: OrderQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    /** TODO: determine if we need this method: recovery uses unprocessed (open or locked) logs */
    getAllUnfinished(request: Empty, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    getAllUnfinished(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    getAllUnfinished(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    /** Transactional operations */
    upsertWithState(request: UpsertMessage, callback: (error: ServiceError | null, response: OrderID) => void): ClientUnaryCall;
    upsertWithState(request: UpsertMessage, metadata: Metadata, callback: (error: ServiceError | null, response: OrderID) => void): ClientUnaryCall;
    upsertWithState(request: UpsertMessage, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: OrderID) => void): ClientUnaryCall;
    updateStep(request: OrderStepInstruction, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    updateStep(request: OrderStepInstruction, metadata: Metadata, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    updateStep(request: OrderStepInstruction, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
}
export declare const OrderServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): OrderServiceClient;
    service: typeof OrderServiceService;
    serviceName: string;
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
