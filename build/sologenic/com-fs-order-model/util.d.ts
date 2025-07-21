import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "order";
export declare enum OrderType {
    NOT_USED_ORDER_TYPE = 0,
    /** ORDER_TYPE_PURCHASE - Avoid naming conflicts with PURCHASE in the action enum */
    ORDER_TYPE_PURCHASE = 1,
    ORDER_TYPE_SELL = 2,
    UNRECOGNIZED = -1
}
export declare function orderTypeFromJSON(object: any): OrderType;
export declare function orderTypeToJSON(object: OrderType): string;
export declare enum ProcessState {
    NOT_USED_PROCESS_STATE = 0,
    PROCESS_STATE_OPEN = 1,
    PROCESS_STATE_LOCKED = 2,
    PROCESS_STATE_FAILED = 3,
    PROCESS_STATE_PROCESSED = 4,
    UNRECOGNIZED = -1
}
export declare function processStateFromJSON(object: any): ProcessState;
export declare function processStateToJSON(object: ProcessState): string;
export interface ProcessInfo {
    ProcessState: ProcessState;
    ProcessedAt: Date | undefined;
}
export interface LockLogRecord {
    Key: string;
    MustHaveState: ProcessState[];
    TargetState: ProcessState;
}
/**
 * The `Key` field represents the datastore key for the `Order` message.
 * The `KeyPrefix` field is used to create a key for broker or smart contract logs (prefix + key = key for logs).
 * The `IsNew` field identifies if the record linked to the key is new. This is helpful for recovery because
 * both the rescanner and the recovery service might pick up the same record. When creating log records, if `IsNew` is true, the Key is sent
 * through the channel for processing. Otherwise, it isn't sent, as an existing key signals the recovery service will handle it.
 */
export interface Key {
    Key: string;
    KeyPrefix?: string | undefined;
    IsNew?: boolean | undefined;
}
export interface InstanceID {
    InstanceID: string;
}
export declare const ProcessInfo: {
    encode(message: ProcessInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ProcessInfo;
    fromJSON(object: any): ProcessInfo;
    toJSON(message: ProcessInfo): unknown;
    create<I extends {
        ProcessState?: ProcessState | undefined;
        ProcessedAt?: Date | undefined;
    } & {
        ProcessState?: ProcessState | undefined;
        ProcessedAt?: Date | undefined;
    } & { [K in Exclude<keyof I, keyof ProcessInfo>]: never; }>(base?: I | undefined): ProcessInfo;
    fromPartial<I_1 extends {
        ProcessState?: ProcessState | undefined;
        ProcessedAt?: Date | undefined;
    } & {
        ProcessState?: ProcessState | undefined;
        ProcessedAt?: Date | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ProcessInfo>]: never; }>(object: I_1): ProcessInfo;
};
export declare const LockLogRecord: {
    encode(message: LockLogRecord, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LockLogRecord;
    fromJSON(object: any): LockLogRecord;
    toJSON(message: LockLogRecord): unknown;
    create<I extends {
        Key?: string | undefined;
        MustHaveState?: ProcessState[] | undefined;
        TargetState?: ProcessState | undefined;
    } & {
        Key?: string | undefined;
        MustHaveState?: (ProcessState[] & ProcessState[] & { [K in Exclude<keyof I["MustHaveState"], keyof ProcessState[]>]: never; }) | undefined;
        TargetState?: ProcessState | undefined;
    } & { [K_1 in Exclude<keyof I, keyof LockLogRecord>]: never; }>(base?: I | undefined): LockLogRecord;
    fromPartial<I_1 extends {
        Key?: string | undefined;
        MustHaveState?: ProcessState[] | undefined;
        TargetState?: ProcessState | undefined;
    } & {
        Key?: string | undefined;
        MustHaveState?: (ProcessState[] & ProcessState[] & { [K_2 in Exclude<keyof I_1["MustHaveState"], keyof ProcessState[]>]: never; }) | undefined;
        TargetState?: ProcessState | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof LockLogRecord>]: never; }>(object: I_1): LockLogRecord;
};
export declare const Key: {
    encode(message: Key, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Key;
    fromJSON(object: any): Key;
    toJSON(message: Key): unknown;
    create<I extends {
        Key?: string | undefined;
        KeyPrefix?: string | undefined;
        IsNew?: boolean | undefined;
    } & {
        Key?: string | undefined;
        KeyPrefix?: string | undefined;
        IsNew?: boolean | undefined;
    } & { [K in Exclude<keyof I, keyof Key>]: never; }>(base?: I | undefined): Key;
    fromPartial<I_1 extends {
        Key?: string | undefined;
        KeyPrefix?: string | undefined;
        IsNew?: boolean | undefined;
    } & {
        Key?: string | undefined;
        KeyPrefix?: string | undefined;
        IsNew?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Key>]: never; }>(object: I_1): Key;
};
export declare const InstanceID: {
    encode(message: InstanceID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InstanceID;
    fromJSON(object: any): InstanceID;
    toJSON(message: InstanceID): unknown;
    create<I extends {
        InstanceID?: string | undefined;
    } & {
        InstanceID?: string | undefined;
    } & { [K in Exclude<keyof I, "InstanceID">]: never; }>(base?: I | undefined): InstanceID;
    fromPartial<I_1 extends {
        InstanceID?: string | undefined;
    } & {
        InstanceID?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "InstanceID">]: never; }>(object: I_1): InstanceID;
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
