import { Empty } from "../../google/protobuf/empty";
import { BrokerOrderDetails, BrokerOrderDetailsList } from "./broker";
import { InstanceID, Key, LockLogRecord } from "./util";
export declare const protobufPackage = "order";
/** Broker Trade Update Log */
export interface BrokerLogService {
    Create(request: BrokerOrderDetails): Promise<Key>;
    /** Transaction */
    SetLock(request: LockLogRecord): Promise<BrokerOrderDetails>;
    /** For recovery, get all unprocessed Broker Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    GetAllUnprocessed(request: InstanceID): Promise<BrokerOrderDetailsList>;
    /** Starting point for rescanner */
    GetLatest(request: Empty): Promise<BrokerOrderDetails>;
}
export declare const BrokerLogServiceServiceName = "order.BrokerLogService";
export declare class BrokerLogServiceClientImpl implements BrokerLogService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: BrokerOrderDetails): Promise<Key>;
    SetLock(request: LockLogRecord): Promise<BrokerOrderDetails>;
    GetAllUnprocessed(request: InstanceID): Promise<BrokerOrderDetailsList>;
    GetLatest(request: Empty): Promise<BrokerOrderDetails>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
