import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "currency";
export interface Currency {
    /** User-entered ticker with format:[a-zA-Z0-9]{1,45}. e.g., APPL, PLTR, MSFT */
    Symbol: string;
    /** Auto-incremented version (no leading zeros) with max length 3 characters (values 1 to 999) */
    Version: string;
}
export declare const Currency: {
    encode(message: Currency, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Currency;
    fromJSON(object: any): Currency;
    toJSON(message: Currency): unknown;
    create<I extends {
        Symbol?: string | undefined;
        Version?: string | undefined;
    } & {
        Symbol?: string | undefined;
        Version?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Currency>]: never; }>(base?: I | undefined): Currency;
    fromPartial<I_1 extends {
        Symbol?: string | undefined;
        Version?: string | undefined;
    } & {
        Symbol?: string | undefined;
        Version?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Currency>]: never; }>(object: I_1): Currency;
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
