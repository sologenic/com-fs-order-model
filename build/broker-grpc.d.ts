/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { BrokerOrderDetails, BrokerOrderDetailsList } from "./broker";
import { Empty } from "./google/protobuf/empty";
import { InstanceID, Key, LockLogRecord } from "./util";
export declare const protobufPackage = "order";
/** Broker Trade Update Log */
export type BrokerLogServiceService = typeof BrokerLogServiceService;
export declare const BrokerLogServiceService: {
    readonly create: {
        readonly path: "/order.BrokerLogService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: BrokerOrderDetails) => Buffer;
        readonly requestDeserialize: (value: Buffer) => BrokerOrderDetails;
        readonly responseSerialize: (value: Key) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Key;
    };
    /** Transaction */
    readonly setLock: {
        readonly path: "/order.BrokerLogService/SetLock";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LockLogRecord) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LockLogRecord;
        readonly responseSerialize: (value: BrokerOrderDetails) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BrokerOrderDetails;
    };
    /** For recovery, get all unprocessed Broker Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    readonly getAllUnprocessed: {
        readonly path: "/order.BrokerLogService/GetAllUnprocessed";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InstanceID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InstanceID;
        readonly responseSerialize: (value: BrokerOrderDetailsList) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BrokerOrderDetailsList;
    };
    /** Starting point for rescanner */
    readonly getLatest: {
        readonly path: "/order.BrokerLogService/GetLatest";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: BrokerOrderDetails) => Buffer;
        readonly responseDeserialize: (value: Buffer) => BrokerOrderDetails;
    };
};
export interface BrokerLogServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<BrokerOrderDetails, Key>;
    /** Transaction */
    setLock: handleUnaryCall<LockLogRecord, BrokerOrderDetails>;
    /** For recovery, get all unprocessed Broker Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    getAllUnprocessed: handleUnaryCall<InstanceID, BrokerOrderDetailsList>;
    /** Starting point for rescanner */
    getLatest: handleUnaryCall<Empty, BrokerOrderDetails>;
}
export interface BrokerLogServiceClient extends Client {
    create(request: BrokerOrderDetails, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    create(request: BrokerOrderDetails, metadata: Metadata, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    create(request: BrokerOrderDetails, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    /** Transaction */
    setLock(request: LockLogRecord, callback: (error: ServiceError | null, response: BrokerOrderDetails) => void): ClientUnaryCall;
    setLock(request: LockLogRecord, metadata: Metadata, callback: (error: ServiceError | null, response: BrokerOrderDetails) => void): ClientUnaryCall;
    setLock(request: LockLogRecord, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BrokerOrderDetails) => void): ClientUnaryCall;
    /** For recovery, get all unprocessed Broker Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    getAllUnprocessed(request: InstanceID, callback: (error: ServiceError | null, response: BrokerOrderDetailsList) => void): ClientUnaryCall;
    getAllUnprocessed(request: InstanceID, metadata: Metadata, callback: (error: ServiceError | null, response: BrokerOrderDetailsList) => void): ClientUnaryCall;
    getAllUnprocessed(request: InstanceID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BrokerOrderDetailsList) => void): ClientUnaryCall;
    /** Starting point for rescanner */
    getLatest(request: Empty, callback: (error: ServiceError | null, response: BrokerOrderDetails) => void): ClientUnaryCall;
    getLatest(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: BrokerOrderDetails) => void): ClientUnaryCall;
    getLatest(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: BrokerOrderDetails) => void): ClientUnaryCall;
}
export declare const BrokerLogServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): BrokerLogServiceClient;
    service: typeof BrokerLogServiceService;
    serviceName: string;
};
