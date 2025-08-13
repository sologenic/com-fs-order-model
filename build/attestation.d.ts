import _m0 from "protobufjs/minimal";
import { Decimal } from "../com-fs-utils-lib/go/decimal/decimal";
import { Network } from "../com-fs-utils-lib/models/metadata/metadata";
export declare const protobufPackage = "order";
/** key: Denom-SmartContractAddr-Network-BlockHeight */
export interface Attestation {
    Network: Network;
    SmartContractAddr: string;
    Denom: string;
    BrokerQuantity?: Decimal | undefined;
    ChainQuantity: Decimal | undefined;
    BlockHeight: number;
    Timestamp: Date | undefined;
    ReattestationBlockHeight?: number | undefined;
}
export interface Attestations {
    Attestations: Attestation[];
    Offset?: number | undefined;
}
export declare const Attestation: {
    encode(message: Attestation, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attestation;
    fromJSON(object: any): Attestation;
    toJSON(message: Attestation): unknown;
    create<I extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BrokerQuantity?: Decimal | undefined;
        ChainQuantity?: Decimal | undefined;
        BlockHeight?: number | undefined;
        Timestamp?: Date | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BrokerQuantity?: Decimal | undefined;
        ChainQuantity?: Decimal | undefined;
        BlockHeight?: number | undefined;
        Timestamp?: Date | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Attestation>]: never; }>(base?: I | undefined): Attestation;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BrokerQuantity?: Decimal | undefined;
        ChainQuantity?: Decimal | undefined;
        BlockHeight?: number | undefined;
        Timestamp?: Date | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BrokerQuantity?: Decimal | undefined;
        ChainQuantity?: Decimal | undefined;
        BlockHeight?: number | undefined;
        Timestamp?: Date | undefined;
        ReattestationBlockHeight?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Attestation>]: never; }>(object: I_1): Attestation;
};
export declare const Attestations: {
    encode(message: Attestations, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Attestations;
    fromJSON(object: any): Attestations;
    toJSON(message: Attestations): unknown;
    create<I extends {
        Attestations?: {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Attestations?: ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        }[] & ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & { [K in Exclude<keyof I["Attestations"][number], keyof Attestation>]: never; })[] & { [K_1 in Exclude<keyof I["Attestations"], keyof {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Attestations>]: never; }>(base?: I | undefined): Attestations;
    fromPartial<I_1 extends {
        Attestations?: {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Attestations?: ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        }[] & ({
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        } & { [K_3 in Exclude<keyof I_1["Attestations"][number], keyof Attestation>]: never; })[] & { [K_4 in Exclude<keyof I_1["Attestations"], keyof {
            Network?: Network | undefined;
            SmartContractAddr?: string | undefined;
            Denom?: string | undefined;
            BrokerQuantity?: Decimal | undefined;
            ChainQuantity?: Decimal | undefined;
            BlockHeight?: number | undefined;
            Timestamp?: Date | undefined;
            ReattestationBlockHeight?: number | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Attestations>]: never; }>(object: I_1): Attestations;
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
