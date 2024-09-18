import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "transaction";
export declare enum Action {
    NOT_USED_ACTION = 0,
    PURCHASE = 1,
    SELL = 2,
    REQUEST_ORDER_CANCEL = 3,
    EXECUTE_ORDER = 4,
    PAY_ORDER = 5,
    REQUEST_REATTESTATION = 6,
    UNRECOGNIZED = -1
}
export declare function actionFromJSON(object: any): Action;
export declare function actionToJSON(object: Action): string;
export declare enum OrderType {
    NOT_USED_ORDER_TYPE = 0,
    /** ORDER_TYPE_PURCHASE - Avoid nmaing conflicts with PURCHASE in the action enum */
    ORDER_TYPE_PURCHASE = 1,
    ORDER_TYPE_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
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
    BROKER_ORACLE = 2,
    USER = 3,
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
export interface Transaction {
    TXID: string;
    Height: number;
    Network: string;
    CreatedAt: number;
    /**
     * int64 UpdatedAt = 5; // TODO: consider: do we update TX record, otherwise no need for this field
     * int64 DetectedAt = 6;
     */
    AssetKey: string;
    SmartContractAddr: string;
    Action: Action;
    Sender: string;
    /** Store the snapshot of the order at the time of the transaction */
    OrderDetail: OrderBase | undefined;
    /** Attenstation Details (optional) */
    Attestation?: Attestation | undefined;
    FeeUSD: number;
}
export interface Transactions {
    Transactions: Transaction[];
    Offset?: number | undefined;
}
/** Same structure as Order in the Smart Contract */
export interface OrderBase {
    OrderID: number;
    Creator: string;
    Denom: string;
    Amount: number;
    AmountExp: number;
    Instruction: Instruction | undefined;
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
}
export interface Order {
    /** Key combination: Network-SmartContractAddr-AssetKey-OrderID */
    Network: string;
    SmartContractAddr: string;
    AssetKey: string;
    OrderBase: OrderBase | undefined;
    CreatedAt: number;
    /** Additional fields to keep track of the order */
    UpdatedAt: Date | undefined;
}
export interface Orders {
    Orders: Order[];
    Offset?: number | undefined;
}
export interface Instruction {
    limitPrice: string;
    limitPriceExp: string;
    /** Base64 encoded JSON string */
    options: string;
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
export interface Attestation {
    /** Using string to represent Uint128 */
    BrokerQuantity: string;
    /** Using string to represent Uint128 */
    ChainQuantity: string;
    BlockHeight: number;
    timestamp: number;
    ReattestationBlockHeight: number;
}
export declare const Transaction: {
    encode(message: Transaction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transaction;
    fromJSON(object: any): Transaction;
    toJSON(message: Transaction): unknown;
    create<I extends {
        TXID?: string | undefined;
        Height?: number | undefined;
        Network?: string | undefined;
        CreatedAt?: number | undefined;
        AssetKey?: string | undefined;
        SmartContractAddr?: string | undefined;
        Action?: Action | undefined;
        Sender?: string | undefined;
        OrderDetail?: {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } | undefined;
        Attestation?: {
            BrokerQuantity?: string | undefined;
            ChainQuantity?: string | undefined;
            BlockHeight?: number | undefined;
            timestamp?: number | undefined;
            ReattestationBlockHeight?: number | undefined;
        } | undefined;
        FeeUSD?: number | undefined;
    } & {
        TXID?: string | undefined;
        Height?: number | undefined;
        Network?: string | undefined;
        CreatedAt?: number | undefined;
        AssetKey?: string | undefined;
        SmartContractAddr?: string | undefined;
        Action?: Action | undefined;
        Sender?: string | undefined;
        OrderDetail?: ({
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } & {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: ({
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & { [K in Exclude<keyof I["OrderDetail"]["Instruction"], keyof Instruction>]: never; }) | undefined;
            Hold?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & { [K_1 in Exclude<keyof I["OrderDetail"]["Hold"], keyof Hold>]: never; }) | undefined;
            FundsSent?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & { [K_2 in Exclude<keyof I["OrderDetail"]["FundsSent"], keyof Coin>]: never; }) | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: ({
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & { [K_3 in Exclude<keyof I["OrderDetail"]["OrderState"], keyof OrderState>]: never; }) | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
        } & { [K_4 in Exclude<keyof I["OrderDetail"], keyof OrderBase>]: never; }) | undefined;
        Attestation?: ({
            BrokerQuantity?: string | undefined;
            ChainQuantity?: string | undefined;
            BlockHeight?: number | undefined;
            timestamp?: number | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & {
            BrokerQuantity?: string | undefined;
            ChainQuantity?: string | undefined;
            BlockHeight?: number | undefined;
            timestamp?: number | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & { [K_5 in Exclude<keyof I["Attestation"], keyof Attestation>]: never; }) | undefined;
        FeeUSD?: number | undefined;
    } & { [K_6 in Exclude<keyof I, keyof Transaction>]: never; }>(base?: I | undefined): Transaction;
    fromPartial<I_1 extends {
        TXID?: string | undefined;
        Height?: number | undefined;
        Network?: string | undefined;
        CreatedAt?: number | undefined;
        AssetKey?: string | undefined;
        SmartContractAddr?: string | undefined;
        Action?: Action | undefined;
        Sender?: string | undefined;
        OrderDetail?: {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } | undefined;
        Attestation?: {
            BrokerQuantity?: string | undefined;
            ChainQuantity?: string | undefined;
            BlockHeight?: number | undefined;
            timestamp?: number | undefined;
            ReattestationBlockHeight?: number | undefined;
        } | undefined;
        FeeUSD?: number | undefined;
    } & {
        TXID?: string | undefined;
        Height?: number | undefined;
        Network?: string | undefined;
        CreatedAt?: number | undefined;
        AssetKey?: string | undefined;
        SmartContractAddr?: string | undefined;
        Action?: Action | undefined;
        Sender?: string | undefined;
        OrderDetail?: ({
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } & {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: ({
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["OrderDetail"]["Instruction"], keyof Instruction>]: never; }) | undefined;
            Hold?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & { [K_8 in Exclude<keyof I_1["OrderDetail"]["Hold"], keyof Hold>]: never; }) | undefined;
            FundsSent?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & { [K_9 in Exclude<keyof I_1["OrderDetail"]["FundsSent"], keyof Coin>]: never; }) | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: ({
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & { [K_10 in Exclude<keyof I_1["OrderDetail"]["OrderState"], keyof OrderState>]: never; }) | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
        } & { [K_11 in Exclude<keyof I_1["OrderDetail"], keyof OrderBase>]: never; }) | undefined;
        Attestation?: ({
            BrokerQuantity?: string | undefined;
            ChainQuantity?: string | undefined;
            BlockHeight?: number | undefined;
            timestamp?: number | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & {
            BrokerQuantity?: string | undefined;
            ChainQuantity?: string | undefined;
            BlockHeight?: number | undefined;
            timestamp?: number | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & { [K_12 in Exclude<keyof I_1["Attestation"], keyof Attestation>]: never; }) | undefined;
        FeeUSD?: number | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof Transaction>]: never; }>(object: I_1): Transaction;
};
export declare const Transactions: {
    encode(message: Transactions, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Transactions;
    fromJSON(object: any): Transactions;
    toJSON(message: Transactions): unknown;
    create<I extends {
        Transactions?: {
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Transactions?: ({
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        }[] & ({
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        } & {
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: ({
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } & {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: ({
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & { [K in Exclude<keyof I["Transactions"][number]["OrderDetail"]["Instruction"], keyof Instruction>]: never; }) | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_1 in Exclude<keyof I["Transactions"][number]["OrderDetail"]["Hold"], keyof Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_2 in Exclude<keyof I["Transactions"][number]["OrderDetail"]["FundsSent"], keyof Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & { [K_3 in Exclude<keyof I["Transactions"][number]["OrderDetail"]["OrderState"], keyof OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_4 in Exclude<keyof I["Transactions"][number]["OrderDetail"], keyof OrderBase>]: never; }) | undefined;
            Attestation?: ({
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } & {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } & { [K_5 in Exclude<keyof I["Transactions"][number]["Attestation"], keyof Attestation>]: never; }) | undefined;
            FeeUSD?: number | undefined;
        } & { [K_6 in Exclude<keyof I["Transactions"][number], keyof Transaction>]: never; })[] & { [K_7 in Exclude<keyof I["Transactions"], keyof {
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_8 in Exclude<keyof I, keyof Transactions>]: never; }>(base?: I | undefined): Transactions;
    fromPartial<I_1 extends {
        Transactions?: {
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Transactions?: ({
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        }[] & ({
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        } & {
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: ({
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } & {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: ({
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & { [K_9 in Exclude<keyof I_1["Transactions"][number]["OrderDetail"]["Instruction"], keyof Instruction>]: never; }) | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_10 in Exclude<keyof I_1["Transactions"][number]["OrderDetail"]["Hold"], keyof Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_11 in Exclude<keyof I_1["Transactions"][number]["OrderDetail"]["FundsSent"], keyof Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & { [K_12 in Exclude<keyof I_1["Transactions"][number]["OrderDetail"]["OrderState"], keyof OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_13 in Exclude<keyof I_1["Transactions"][number]["OrderDetail"], keyof OrderBase>]: never; }) | undefined;
            Attestation?: ({
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } & {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } & { [K_14 in Exclude<keyof I_1["Transactions"][number]["Attestation"], keyof Attestation>]: never; }) | undefined;
            FeeUSD?: number | undefined;
        } & { [K_15 in Exclude<keyof I_1["Transactions"][number], keyof Transaction>]: never; })[] & { [K_16 in Exclude<keyof I_1["Transactions"], keyof {
            TXID?: string | undefined;
            Height?: number | undefined;
            Network?: string | undefined;
            CreatedAt?: number | undefined;
            AssetKey?: string | undefined;
            SmartContractAddr?: string | undefined;
            Action?: Action | undefined;
            Sender?: string | undefined;
            OrderDetail?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            Attestation?: {
                BrokerQuantity?: string | undefined;
                ChainQuantity?: string | undefined;
                BlockHeight?: number | undefined;
                timestamp?: number | undefined;
                ReattestationBlockHeight?: number | undefined;
            } | undefined;
            FeeUSD?: number | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_17 in Exclude<keyof I_1, keyof Transactions>]: never; }>(object: I_1): Transactions;
};
export declare const OrderBase: {
    encode(message: OrderBase, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): OrderBase;
    fromJSON(object: any): OrderBase;
    toJSON(message: OrderBase): unknown;
    create<I extends {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        Instruction?: {
            limitPrice?: string | undefined;
            limitPriceExp?: string | undefined;
            options?: string | undefined;
        } | undefined;
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
    } & {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        Instruction?: ({
            limitPrice?: string | undefined;
            limitPriceExp?: string | undefined;
            options?: string | undefined;
        } & {
            limitPrice?: string | undefined;
            limitPriceExp?: string | undefined;
            options?: string | undefined;
        } & { [K in Exclude<keyof I["Instruction"], keyof Instruction>]: never; }) | undefined;
        Hold?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & { [K_1 in Exclude<keyof I["Hold"], keyof Hold>]: never; }) | undefined;
        FundsSent?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & { [K_2 in Exclude<keyof I["FundsSent"], keyof Coin>]: never; }) | undefined;
        OrderType?: OrderType | undefined;
        OrderState?: ({
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & {
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & { [K_3 in Exclude<keyof I["OrderState"], keyof OrderState>]: never; }) | undefined;
        PaymentState?: PaymentState | undefined;
        AmountExecuted?: number | undefined;
        AmountExecutedExp?: number | undefined;
        UsedFundsAmount?: number | undefined;
        UsedFundsAmountExp?: number | undefined;
        Costs?: number | undefined;
        CostsExp?: number | undefined;
    } & { [K_4 in Exclude<keyof I, keyof OrderBase>]: never; }>(base?: I | undefined): OrderBase;
    fromPartial<I_1 extends {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        Instruction?: {
            limitPrice?: string | undefined;
            limitPriceExp?: string | undefined;
            options?: string | undefined;
        } | undefined;
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
    } & {
        OrderID?: number | undefined;
        Creator?: string | undefined;
        Denom?: string | undefined;
        Amount?: number | undefined;
        AmountExp?: number | undefined;
        Instruction?: ({
            limitPrice?: string | undefined;
            limitPriceExp?: string | undefined;
            options?: string | undefined;
        } & {
            limitPrice?: string | undefined;
            limitPriceExp?: string | undefined;
            options?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["Instruction"], keyof Instruction>]: never; }) | undefined;
        Hold?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
        } & { [K_6 in Exclude<keyof I_1["Hold"], keyof Hold>]: never; }) | undefined;
        FundsSent?: ({
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & {
            Denom?: string | undefined;
            Amount?: number | undefined;
        } & { [K_7 in Exclude<keyof I_1["FundsSent"], keyof Coin>]: never; }) | undefined;
        OrderType?: OrderType | undefined;
        OrderState?: ({
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & {
            OrderStateType?: OrderStateType | undefined;
            OrderCancelledBy?: OrderCancelledBy | undefined;
        } & { [K_8 in Exclude<keyof I_1["OrderState"], keyof OrderState>]: never; }) | undefined;
        PaymentState?: PaymentState | undefined;
        AmountExecuted?: number | undefined;
        AmountExecutedExp?: number | undefined;
        UsedFundsAmount?: number | undefined;
        UsedFundsAmountExp?: number | undefined;
        Costs?: number | undefined;
        CostsExp?: number | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof OrderBase>]: never; }>(object: I_1): OrderBase;
};
export declare const Order: {
    encode(message: Order, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Order;
    fromJSON(object: any): Order;
    toJSON(message: Order): unknown;
    create<I extends {
        Network?: string | undefined;
        SmartContractAddr?: string | undefined;
        AssetKey?: string | undefined;
        OrderBase?: {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } | undefined;
        CreatedAt?: number | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        Network?: string | undefined;
        SmartContractAddr?: string | undefined;
        AssetKey?: string | undefined;
        OrderBase?: ({
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } & {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: ({
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & { [K in Exclude<keyof I["OrderBase"]["Instruction"], keyof Instruction>]: never; }) | undefined;
            Hold?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & { [K_1 in Exclude<keyof I["OrderBase"]["Hold"], keyof Hold>]: never; }) | undefined;
            FundsSent?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & { [K_2 in Exclude<keyof I["OrderBase"]["FundsSent"], keyof Coin>]: never; }) | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: ({
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & { [K_3 in Exclude<keyof I["OrderBase"]["OrderState"], keyof OrderState>]: never; }) | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
        } & { [K_4 in Exclude<keyof I["OrderBase"], keyof OrderBase>]: never; }) | undefined;
        CreatedAt?: number | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K_5 in Exclude<keyof I, keyof Order>]: never; }>(base?: I | undefined): Order;
    fromPartial<I_1 extends {
        Network?: string | undefined;
        SmartContractAddr?: string | undefined;
        AssetKey?: string | undefined;
        OrderBase?: {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } | undefined;
        CreatedAt?: number | undefined;
        UpdatedAt?: Date | undefined;
    } & {
        Network?: string | undefined;
        SmartContractAddr?: string | undefined;
        AssetKey?: string | undefined;
        OrderBase?: ({
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } | undefined;
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
        } & {
            OrderID?: number | undefined;
            Creator?: string | undefined;
            Denom?: string | undefined;
            Amount?: number | undefined;
            AmountExp?: number | undefined;
            Instruction?: ({
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & {
                limitPrice?: string | undefined;
                limitPriceExp?: string | undefined;
                options?: string | undefined;
            } & { [K_6 in Exclude<keyof I_1["OrderBase"]["Instruction"], keyof Instruction>]: never; }) | undefined;
            Hold?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
            } & { [K_7 in Exclude<keyof I_1["OrderBase"]["Hold"], keyof Hold>]: never; }) | undefined;
            FundsSent?: ({
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & {
                Denom?: string | undefined;
                Amount?: number | undefined;
            } & { [K_8 in Exclude<keyof I_1["OrderBase"]["FundsSent"], keyof Coin>]: never; }) | undefined;
            OrderType?: OrderType | undefined;
            OrderState?: ({
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & {
                OrderStateType?: OrderStateType | undefined;
                OrderCancelledBy?: OrderCancelledBy | undefined;
            } & { [K_9 in Exclude<keyof I_1["OrderBase"]["OrderState"], keyof OrderState>]: never; }) | undefined;
            PaymentState?: PaymentState | undefined;
            AmountExecuted?: number | undefined;
            AmountExecutedExp?: number | undefined;
            UsedFundsAmount?: number | undefined;
            UsedFundsAmountExp?: number | undefined;
            Costs?: number | undefined;
            CostsExp?: number | undefined;
        } & { [K_10 in Exclude<keyof I_1["OrderBase"], keyof OrderBase>]: never; }) | undefined;
        CreatedAt?: number | undefined;
        UpdatedAt?: Date | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof Order>]: never; }>(object: I_1): Order;
};
export declare const Orders: {
    encode(message: Orders, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Orders;
    fromJSON(object: any): Orders;
    toJSON(message: Orders): unknown;
    create<I extends {
        Orders?: {
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Orders?: ({
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        }[] & ({
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        } & {
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: ({
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } & {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: ({
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & { [K in Exclude<keyof I["Orders"][number]["OrderBase"]["Instruction"], keyof Instruction>]: never; }) | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_1 in Exclude<keyof I["Orders"][number]["OrderBase"]["Hold"], keyof Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_2 in Exclude<keyof I["Orders"][number]["OrderBase"]["FundsSent"], keyof Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & { [K_3 in Exclude<keyof I["Orders"][number]["OrderBase"]["OrderState"], keyof OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_4 in Exclude<keyof I["Orders"][number]["OrderBase"], keyof OrderBase>]: never; }) | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        } & { [K_5 in Exclude<keyof I["Orders"][number], keyof Order>]: never; })[] & { [K_6 in Exclude<keyof I["Orders"], keyof {
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_7 in Exclude<keyof I, keyof Orders>]: never; }>(base?: I | undefined): Orders;
    fromPartial<I_1 extends {
        Orders?: {
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Orders?: ({
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        }[] & ({
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        } & {
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: ({
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } & {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: ({
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } & { [K_8 in Exclude<keyof I_1["Orders"][number]["OrderBase"]["Instruction"], keyof Instruction>]: never; }) | undefined;
                Hold?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                    AmountExp?: number | undefined;
                } & { [K_9 in Exclude<keyof I_1["Orders"][number]["OrderBase"]["Hold"], keyof Hold>]: never; }) | undefined;
                FundsSent?: ({
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & {
                    Denom?: string | undefined;
                    Amount?: number | undefined;
                } & { [K_10 in Exclude<keyof I_1["Orders"][number]["OrderBase"]["FundsSent"], keyof Coin>]: never; }) | undefined;
                OrderType?: OrderType | undefined;
                OrderState?: ({
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & {
                    OrderStateType?: OrderStateType | undefined;
                    OrderCancelledBy?: OrderCancelledBy | undefined;
                } & { [K_11 in Exclude<keyof I_1["Orders"][number]["OrderBase"]["OrderState"], keyof OrderState>]: never; }) | undefined;
                PaymentState?: PaymentState | undefined;
                AmountExecuted?: number | undefined;
                AmountExecutedExp?: number | undefined;
                UsedFundsAmount?: number | undefined;
                UsedFundsAmountExp?: number | undefined;
                Costs?: number | undefined;
                CostsExp?: number | undefined;
            } & { [K_12 in Exclude<keyof I_1["Orders"][number]["OrderBase"], keyof OrderBase>]: never; }) | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        } & { [K_13 in Exclude<keyof I_1["Orders"][number], keyof Order>]: never; })[] & { [K_14 in Exclude<keyof I_1["Orders"], keyof {
            Network?: string | undefined;
            SmartContractAddr?: string | undefined;
            AssetKey?: string | undefined;
            OrderBase?: {
                OrderID?: number | undefined;
                Creator?: string | undefined;
                Denom?: string | undefined;
                Amount?: number | undefined;
                AmountExp?: number | undefined;
                Instruction?: {
                    limitPrice?: string | undefined;
                    limitPriceExp?: string | undefined;
                    options?: string | undefined;
                } | undefined;
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
            } | undefined;
            CreatedAt?: number | undefined;
            UpdatedAt?: Date | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof Orders>]: never; }>(object: I_1): Orders;
};
export declare const Instruction: {
    encode(message: Instruction, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Instruction;
    fromJSON(object: any): Instruction;
    toJSON(message: Instruction): unknown;
    create<I extends {
        limitPrice?: string | undefined;
        limitPriceExp?: string | undefined;
        options?: string | undefined;
    } & {
        limitPrice?: string | undefined;
        limitPriceExp?: string | undefined;
        options?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Instruction>]: never; }>(base?: I | undefined): Instruction;
    fromPartial<I_1 extends {
        limitPrice?: string | undefined;
        limitPriceExp?: string | undefined;
        options?: string | undefined;
    } & {
        limitPrice?: string | undefined;
        limitPriceExp?: string | undefined;
        options?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Instruction>]: never; }>(object: I_1): Instruction;
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
export declare const Attestation: {
    encode(message: Attestation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attestation;
    fromJSON(object: any): Attestation;
    toJSON(message: Attestation): unknown;
    create<I extends {
        BrokerQuantity?: string | undefined;
        ChainQuantity?: string | undefined;
        BlockHeight?: number | undefined;
        timestamp?: number | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & {
        BrokerQuantity?: string | undefined;
        ChainQuantity?: string | undefined;
        BlockHeight?: number | undefined;
        timestamp?: number | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Attestation>]: never; }>(base?: I | undefined): Attestation;
    fromPartial<I_1 extends {
        BrokerQuantity?: string | undefined;
        ChainQuantity?: string | undefined;
        BlockHeight?: number | undefined;
        timestamp?: number | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & {
        BrokerQuantity?: string | undefined;
        ChainQuantity?: string | undefined;
        BlockHeight?: number | undefined;
        timestamp?: number | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Attestation>]: never; }>(object: I_1): Attestation;
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
