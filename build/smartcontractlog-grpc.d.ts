/// <reference types="node" />
/// <reference types="node" />
import { type CallOptions, ChannelCredentials, Client, type ClientOptions, type ClientUnaryCall, type handleUnaryCall, Metadata, type ServiceError, type UntypedServiceImplementation } from "@grpc/grpc-js";
import { Empty } from "./google/protobuf/empty";
import { Order, Orders } from "./order";
import { InstanceID, Key, LockLogRecord } from "./util";
export declare const protobufPackage = "order";
/** Smart Contract Log */
export type SmartContractLogServiceService = typeof SmartContractLogServiceService;
export declare const SmartContractLogServiceService: {
    readonly create: {
        readonly path: "/order.SmartContractLogService/Create";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Order) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Order;
        readonly responseSerialize: (value: Key) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Key;
    };
    /** Transaction */
    readonly setLock: {
        readonly path: "/order.SmartContractLogService/SetLock";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: LockLogRecord) => Buffer;
        readonly requestDeserialize: (value: Buffer) => LockLogRecord;
        readonly responseSerialize: (value: Order) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Order;
    };
    /** For recovery, get all unprocessed Smart Contract Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    readonly getAllUnprocessed: {
        readonly path: "/order.SmartContractLogService/GetAllUnprocessed";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: InstanceID) => Buffer;
        readonly requestDeserialize: (value: Buffer) => InstanceID;
        readonly responseSerialize: (value: Orders) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Orders;
    };
    /** Starting point for rescanner */
    readonly getLatest: {
        readonly path: "/order.SmartContractLogService/GetLatest";
        readonly requestStream: false;
        readonly responseStream: false;
        readonly requestSerialize: (value: Empty) => Buffer;
        readonly requestDeserialize: (value: Buffer) => Empty;
        readonly responseSerialize: (value: Order) => Buffer;
        readonly responseDeserialize: (value: Buffer) => Order;
    };
};
export interface SmartContractLogServiceServer extends UntypedServiceImplementation {
    create: handleUnaryCall<Order, Key>;
    /** Transaction */
    setLock: handleUnaryCall<LockLogRecord, Order>;
    /** For recovery, get all unprocessed Smart Contract Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    getAllUnprocessed: handleUnaryCall<InstanceID, Orders>;
    /** Starting point for rescanner */
    getLatest: handleUnaryCall<Empty, Order>;
}
export interface SmartContractLogServiceClient extends Client {
    create(request: Order, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    create(request: Order, metadata: Metadata, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    create(request: Order, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Key) => void): ClientUnaryCall;
    /** Transaction */
    setLock(request: LockLogRecord, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    setLock(request: LockLogRecord, metadata: Metadata, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    setLock(request: LockLogRecord, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    /** For recovery, get all unprocessed Smart Contract Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    getAllUnprocessed(request: InstanceID, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    getAllUnprocessed(request: InstanceID, metadata: Metadata, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    getAllUnprocessed(request: InstanceID, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Orders) => void): ClientUnaryCall;
    /** Starting point for rescanner */
    getLatest(request: Empty, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getLatest(request: Empty, metadata: Metadata, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
    getLatest(request: Empty, metadata: Metadata, options: Partial<CallOptions>, callback: (error: ServiceError | null, response: Order) => void): ClientUnaryCall;
}
export declare const SmartContractLogServiceClient: {
    new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): SmartContractLogServiceClient;
    service: typeof SmartContractLogServiceService;
    serviceName: string;
};
