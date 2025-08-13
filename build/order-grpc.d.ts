import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";
import { Network } from "../com-fs-utils-lib/models/metadata/metadata";
import { InternalOrderState, Order, Orders, OrderStateType, PaymentState, TransactionType } from "./order";
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_5 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } & { [K_6 in Exclude<keyof I["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_7 in Exclude<keyof I["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
        } & { [K_8 in Exclude<keyof I["Order"], keyof Order>]: never; }) | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
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
                    } & { [K_9 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                    FundsSent?: ({
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & {
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & { [K_10 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                    OrderType?: OrderType | undefined;
                    OrderState?: ({
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & {
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & { [K_11 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
                } & { [K_12 in Exclude<keyof I["OrderStepInstruction"]["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
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
                    } & { [K_13 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                    SubmittedAt?: Date | undefined;
                    FilledAt?: Date | undefined;
                    ExpiredAt?: Date | undefined;
                    CancelledAt?: Date | undefined;
                    FailedAt?: Date | undefined;
                    AssetID?: string | undefined;
                    Symbol?: string | undefined;
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: ({
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & { [K_14 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } & { [K_15 in Exclude<keyof I["OrderStepInstruction"]["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_16 in Exclude<keyof I["OrderStepInstruction"]["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
            } & { [K_17 in Exclude<keyof I["OrderStepInstruction"]["Order"], keyof Order>]: never; }) | undefined;
            MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_18 in Exclude<keyof I["OrderStepInstruction"]["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
            TargetState?: InternalOrderState | undefined;
        } & { [K_19 in Exclude<keyof I["OrderStepInstruction"], keyof OrderStepInstruction>]: never; }) | undefined;
    } & { [K_20 in Exclude<keyof I, keyof UpsertMessage>]: never; }>(base?: I | undefined): UpsertMessage;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                } & { [K_21 in Exclude<keyof I_1["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_22 in Exclude<keyof I_1["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & { [K_23 in Exclude<keyof I_1["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_24 in Exclude<keyof I_1["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
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
                } & { [K_25 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_26 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } & { [K_27 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_28 in Exclude<keyof I_1["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
        } & { [K_29 in Exclude<keyof I_1["Order"], keyof Order>]: never; }) | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } | undefined;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
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
                    } & { [K_30 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                    FundsSent?: ({
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & {
                        Denom?: string | undefined;
                        Amount?: number | undefined;
                    } & { [K_31 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                    OrderType?: OrderType | undefined;
                    OrderState?: ({
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & {
                        OrderStateType?: OrderStateType | undefined;
                        OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                    } & { [K_32 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                    PaymentState?: PaymentState | undefined;
                    AmountExecuted?: number | undefined;
                    AmountExecutedExp?: number | undefined;
                    UsedFundsAmount?: number | undefined;
                    UsedFundsAmountExp?: number | undefined;
                    Costs?: number | undefined;
                    CostsExp?: number | undefined;
                } & { [K_33 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
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
                    } & { [K_34 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                    SubmittedAt?: Date | undefined;
                    FilledAt?: Date | undefined;
                    ExpiredAt?: Date | undefined;
                    CancelledAt?: Date | undefined;
                    FailedAt?: Date | undefined;
                    AssetID?: string | undefined;
                    Symbol?: string | undefined;
                    AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                    OrderClass?: import("./broker").OrderClass | undefined;
                    Type?: import("./broker").TradeType | undefined;
                    Side?: OrderType | undefined;
                    TimeInForce?: import("./broker").TimeInForce | undefined;
                    Notional?: any;
                    OrderQty?: any;
                    FilledQty?: any;
                    FilledAvgPrice?: any;
                    LimitPrice?: any;
                    StopPrice?: any;
                    TrailPrice?: any;
                    TrailPercent?: any;
                    HWM?: any;
                    ExtendedHours?: boolean | undefined;
                    CreatedAt?: Date | undefined;
                    UpdatedAt?: Date | undefined;
                    Status?: import("./broker").BrokerOrderStatus | undefined;
                    TotalPosition?: any;
                    PartialPrice?: any;
                    PartialQty?: any;
                    ProcessInfo?: ({
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & {
                        ProcessState?: import("./util").ProcessState | undefined;
                        ProcessedAt?: Date | undefined;
                    } & { [K_35 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                    InstanceID?: string | undefined;
                    ClearingBroker?: import("./broker").ClearingBroker | undefined;
                } & { [K_36 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_37 in Exclude<keyof I_1["OrderStepInstruction"]["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                BlockTime?: Date | undefined;
                Sequence?: number | undefined;
                OrganizationID?: string | undefined;
                UserID?: string | undefined;
                AssetID?: string | undefined;
            } & { [K_38 in Exclude<keyof I_1["OrderStepInstruction"]["Order"], keyof Order>]: never; }) | undefined;
            MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_39 in Exclude<keyof I_1["OrderStepInstruction"]["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
            TargetState?: InternalOrderState | undefined;
        } & { [K_40 in Exclude<keyof I_1["OrderStepInstruction"], keyof OrderStepInstruction>]: never; }) | undefined;
    } & { [K_41 in Exclude<keyof I_1, keyof UpsertMessage>]: never; }>(object: I_1): UpsertMessage;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_5 in Exclude<keyof I["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } & { [K_6 in Exclude<keyof I["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_7 in Exclude<keyof I["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
        } & { [K_8 in Exclude<keyof I["Order"], keyof Order>]: never; }) | undefined;
        MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_9 in Exclude<keyof I["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
        TargetState?: InternalOrderState | undefined;
    } & { [K_10 in Exclude<keyof I, keyof OrderStepInstruction>]: never; }>(base?: I | undefined): OrderStepInstruction;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } | undefined;
            ProcessInfo?: {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
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
                } & { [K_11 in Exclude<keyof I_1["Order"]["Instruction"]["Hold"], keyof import("./order").Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_12 in Exclude<keyof I_1["Order"]["Instruction"]["FundsSent"], keyof import("./order").Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: import("./order").OrderCancelledBy | undefined;
                } & { [K_13 in Exclude<keyof I_1["Order"]["Instruction"]["OrderState"], keyof import("./order").OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["Order"]["Instruction"], keyof import("./order").OrderInstruction>]: never; }) | undefined;
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
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
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
                } & { [K_15 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ClientOrderID"], keyof import("./broker").ClientOrderID>]: never; }) | undefined;
                SubmittedAt?: Date | undefined;
                FilledAt?: Date | undefined;
                ExpiredAt?: Date | undefined;
                CancelledAt?: Date | undefined;
                FailedAt?: Date | undefined;
                AssetID?: string | undefined;
                Symbol?: string | undefined;
                AssetClass?: import("../com-fs-asset-model/asset").AssetType | undefined;
                OrderClass?: import("./broker").OrderClass | undefined;
                Type?: import("./broker").TradeType | undefined;
                Side?: OrderType | undefined;
                TimeInForce?: import("./broker").TimeInForce | undefined;
                Notional?: any;
                OrderQty?: any;
                FilledQty?: any;
                FilledAvgPrice?: any;
                LimitPrice?: any;
                StopPrice?: any;
                TrailPrice?: any;
                TrailPercent?: any;
                HWM?: any;
                ExtendedHours?: boolean | undefined;
                CreatedAt?: Date | undefined;
                UpdatedAt?: Date | undefined;
                Status?: import("./broker").BrokerOrderStatus | undefined;
                TotalPosition?: any;
                PartialPrice?: any;
                PartialQty?: any;
                ProcessInfo?: ({
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & {
                    ProcessState?: import("./util").ProcessState | undefined;
                    ProcessedAt?: Date | undefined;
                } & { [K_16 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
                InstanceID?: string | undefined;
                ClearingBroker?: import("./broker").ClearingBroker | undefined;
            } & { [K_17 in Exclude<keyof I_1["Order"]["BrokerOrderDetails"], keyof import("./broker").BrokerOrderDetails>]: never; }) | undefined;
            ProcessInfo?: ({
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & {
                ProcessState?: import("./util").ProcessState | undefined;
                ProcessedAt?: Date | undefined;
            } & { [K_18 in Exclude<keyof I_1["Order"]["ProcessInfo"], keyof ProcessInfo>]: never; }) | undefined;
            InstanceID?: string | undefined;
            BlockTime?: Date | undefined;
            Sequence?: number | undefined;
            OrganizationID?: string | undefined;
            UserID?: string | undefined;
            AssetID?: string | undefined;
        } & { [K_19 in Exclude<keyof I_1["Order"], keyof Order>]: never; }) | undefined;
        MustHaveState?: (InternalOrderState[] & InternalOrderState[] & { [K_20 in Exclude<keyof I_1["MustHaveState"], keyof InternalOrderState[]>]: never; }) | undefined;
        TargetState?: InternalOrderState | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof OrderStepInstruction>]: never; }>(object: I_1): OrderStepInstruction;
};
export interface OrderService {
    GetByID(request: OrderID): Promise<Order>;
    GetByKey(request: Key): Promise<Order>;
    GetAll(request: OrderQuery): Promise<Orders>;
    /** TODO: determine if we need this method: recovery uses unprocessed (open or locked) logs */
    GetAllUnfinished(request: Empty): Promise<Orders>;
    /** Transactional operations */
    UpsertWithState(request: UpsertMessage): Promise<OrderID>;
    UpdateStep(request: OrderStepInstruction): Promise<Order>;
}
export declare const OrderServiceServiceName = "order.OrderService";
export declare class OrderServiceClientImpl implements OrderService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    GetByID(request: OrderID): Promise<Order>;
    GetByKey(request: Key): Promise<Order>;
    GetAll(request: OrderQuery): Promise<Orders>;
    GetAllUnfinished(request: Empty): Promise<Orders>;
    UpsertWithState(request: UpsertMessage): Promise<OrderID>;
    UpdateStep(request: OrderStepInstruction): Promise<Order>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
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
