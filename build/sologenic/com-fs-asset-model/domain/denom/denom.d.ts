import _m0 from "protobufjs/minimal";
import { Currency } from "../currency/currency";
export declare const protobufPackage = "denom";
/**
 * Denom defines the on-chain denomination of a token and include on-chain data such as the issuer, precision, and description.
 * It is constructed according to the following conventions:
 *   1. Currency:  {lowercase(symbol)}_{version}
 *      - Example: "aapl_1", "btc-usd_2"
 *   2. Subunit:   su{currency}
 *      - Example: "suaapl_1"
 *   3. Denom:     {subunit}-{issuer}
 *      - Example: "suaapl_1-testcore1et29cek95pl0zralsf43u4uply0g9nmxnj7fyt9yfy74spch7fpq3f8j0e"
 */
export interface Denom {
    /** Format: {symbol}_{version} */
    Currency: Currency | undefined;
    /** Format: su{currency} */
    Subunit: string;
    Issuer: string;
    /** Decimal precision for the share count. e.g, if set to 6, the smallest unit represents 0.000001 shares. */
    Precision: number;
    /** On-chain description */
    Description: string;
}
export declare const Denom: {
    encode(message: Denom, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Denom;
    fromJSON(object: any): Denom;
    toJSON(message: Denom): unknown;
    create<I extends {
        Currency?: {
            Symbol?: string | undefined;
            Version?: string | undefined;
        } | undefined;
        Subunit?: string | undefined;
        Issuer?: string | undefined;
        Precision?: number | undefined;
        Description?: string | undefined;
    } & {
        Currency?: ({
            Symbol?: string | undefined;
            Version?: string | undefined;
        } & {
            Symbol?: string | undefined;
            Version?: string | undefined;
        } & { [K in Exclude<keyof I["Currency"], keyof Currency>]: never; }) | undefined;
        Subunit?: string | undefined;
        Issuer?: string | undefined;
        Precision?: number | undefined;
        Description?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Denom>]: never; }>(base?: I | undefined): Denom;
    fromPartial<I_1 extends {
        Currency?: {
            Symbol?: string | undefined;
            Version?: string | undefined;
        } | undefined;
        Subunit?: string | undefined;
        Issuer?: string | undefined;
        Precision?: number | undefined;
        Description?: string | undefined;
    } & {
        Currency?: ({
            Symbol?: string | undefined;
            Version?: string | undefined;
        } & {
            Symbol?: string | undefined;
            Version?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["Currency"], keyof Currency>]: never; }) | undefined;
        Subunit?: string | undefined;
        Issuer?: string | undefined;
        Precision?: number | undefined;
        Description?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Denom>]: never; }>(object: I_1): Denom;
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
