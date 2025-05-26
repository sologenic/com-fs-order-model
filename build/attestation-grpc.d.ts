/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";
import { Attestation, Attestations } from "./attestation";
import { Empty } from "./google/protobuf/empty";
import { Network } from "./sologenic/com-fs-utils-lib/models/metadata/metadata";
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
export type AttestationServiceService = typeof AttestationServiceService;
export declare const AttestationServiceService: {
    readonly create: {
        readonly path: "/order.AttestationService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Attestation) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Attestation;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly update: {
        readonly path: "/order.AttestationService/Update";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Attestation) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Attestation;
        readonly responseSerialize: (value: Empty) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Empty;
    };
    readonly get: {
        readonly path: "/order.AttestationService/Get";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttestationID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttestationID;
        readonly responseSerialize: (value: Attestation) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Attestation;
    };
    readonly list: {
        readonly path: "/order.AttestationService/List";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: AttestationQuery) => Buffer;
        readonly requestDeserialize: (value: Buffer) => AttestationQuery;
        readonly responseSerialize: (value: Attestations) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Attestations;
    };
};
export interface AttestationServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<Attestation, Empty>;
    update: handleUnaryCall<Attestation, Empty>;
    get: handleUnaryCall<AttestationID, Attestation>;
    list: handleUnaryCall<AttestationQuery, Attestations>;
}
export interface AttestationServiceClient extends Client {
    create(request: Attestation, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    create(request: Attestation, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    create(request: Attestation, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    update(request: Attestation, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    update(request: Attestation, metadata: Metadata, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    update(request: Attestation, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Empty) => void): ClientUnaryCall;
    get(request: AttestationID, callback: (error: ServiceError | null, response: Attestation) => void): ClientUnaryCall;
    get(request: AttestationID, metadata: Metadata, callback: (error: ServiceError | null, response: Attestation) => void): ClientUnaryCall;
    get(request: AttestationID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Attestation) => void): ClientUnaryCall;
    list(request: AttestationQuery, callback: (error: ServiceError | null, response: Attestations) => void): ClientUnaryCall;
    list(request: AttestationQuery, metadata: Metadata, callback: (error: ServiceError | null, response: Attestations) => void): ClientUnaryCall;
    list(request: AttestationQuery, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Attestations) => void): ClientUnaryCall;
}
export declare const AttestationServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): AttestationServiceClient;
    service: typeof AttestationServiceService;
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
