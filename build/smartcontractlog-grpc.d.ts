import { Empty } from "../../google/protobuf/empty";
import { Order, Orders } from "./order";
import { InstanceID, Key, LockLogRecord } from "./util";
export declare const protobufPackage = "order";
/** Smart Contract Log */
export interface SmartContractLogService {
    Create(request: Order): Promise<Key>;
    /** Transaction */
    SetLock(request: LockLogRecord): Promise<Order>;
    /** For recovery, get all unprocessed Smart Contract Logs. Unprocessed logs are logs that are in the states `OPEN` or `LOCKED`. */
    GetAllUnprocessed(request: InstanceID): Promise<Orders>;
    /** Starting point for rescanner */
    GetLatest(request: Empty): Promise<Order>;
}
export declare const SmartContractLogServiceServiceName = "order.SmartContractLogService";
export declare class SmartContractLogServiceClientImpl implements SmartContractLogService {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Create(request: Order): Promise<Key>;
    SetLock(request: LockLogRecord): Promise<Order>;
    GetAllUnprocessed(request: InstanceID): Promise<Orders>;
    GetLatest(request: Empty): Promise<Order>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
