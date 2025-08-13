import _m0 from "protobufjs/minimal";
import { Empty } from "../../google/protobuf/empty";
import { Network } from "../com-fs-utils-lib/models/metadata/metadata";
import { Attestation, Attestations } from "./attestation";
export declare const protobufPackage = "order";
export interface AttestationID {
    Network: Network;
    SmartContractAddr: string;
    Denom: string;
    /** Default will return the latest attestation */
    BlockHeight?: number | undefined;
}
export interface AttestationQuery {
    Network: Network;
    SmartContractAddr: string;
    Denom: string;
    Offset?: number | undefined;
}
export declare const AttestationID: {
    encode(message: AttestationID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttestationID;
    fromJSON(object: any): AttestationID;
    toJSON(message: AttestationID): unknown;
    create<I extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BlockHeight?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BlockHeight?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AttestationID>]: never; }>(base?: I | undefined): AttestationID;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BlockHeight?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        BlockHeight?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AttestationID>]: never; }>(object: I_1): AttestationID;
};
export declare const AttestationQuery: {
    encode(message: AttestationQuery, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AttestationQuery;
    fromJSON(object: any): AttestationQuery;
    toJSON(message: AttestationQuery): unknown;
    create<I extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        Offset?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        Offset?: number | undefined;
    } & { [K in Exclude<keyof I, keyof AttestationQuery>]: never; }>(base?: I | undefined): AttestationQuery;
    fromPartial<I_1 extends {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        Offset?: number | undefined;
    } & {
        Network?: Network | undefined;
        SmartContractAddr?: string | undefined;
        Denom?: string | undefined;
        Offset?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AttestationQuery>]: never; }>(object: I_1): AttestationQuery;
};
export interface AttestationService {
    Create(request: Attestation): Promise<Empty>;
    Update(request: Attestation): Promise<Empty>;
    Get(request: AttestationID): Promise<Attestation>;
    List(request: AttestationQuery): Promise<Attestations>;
}
export declare const AttestationServiceServiceName = "order.AttestationService";
export declare class AttestationServiceClientImpl implements AttestationService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: Attestation): Promise<Empty>;
    Update(request: Attestation): Promise<Empty>;
    Get(request: AttestationID): Promise<Attestation>;
    List(request: AttestationQuery): Promise<Attestations>;
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
