/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "transaction";

export enum Action {
  NOT_USED_ACTION = 0,
  PURCHASE = 1,
  SELL = 2,
  REQUEST_ORDER_CANCEL = 3,
  EXECUTE_ORDER = 4,
  PAY_ORDER = 5,
  REQUEST_REATTESTATION = 6,
  UNRECOGNIZED = -1,
}

export function actionFromJSON(object: any): Action {
  switch (object) {
    case 0:
    case "NOT_USED_ACTION":
      return Action.NOT_USED_ACTION;
    case 1:
    case "PURCHASE":
      return Action.PURCHASE;
    case 2:
    case "SELL":
      return Action.SELL;
    case 3:
    case "REQUEST_ORDER_CANCEL":
      return Action.REQUEST_ORDER_CANCEL;
    case 4:
    case "EXECUTE_ORDER":
      return Action.EXECUTE_ORDER;
    case 5:
    case "PAY_ORDER":
      return Action.PAY_ORDER;
    case 6:
    case "REQUEST_REATTESTATION":
      return Action.REQUEST_REATTESTATION;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Action.UNRECOGNIZED;
  }
}

export function actionToJSON(object: Action): string {
  switch (object) {
    case Action.NOT_USED_ACTION:
      return "NOT_USED_ACTION";
    case Action.PURCHASE:
      return "PURCHASE";
    case Action.SELL:
      return "SELL";
    case Action.REQUEST_ORDER_CANCEL:
      return "REQUEST_ORDER_CANCEL";
    case Action.EXECUTE_ORDER:
      return "EXECUTE_ORDER";
    case Action.PAY_ORDER:
      return "PAY_ORDER";
    case Action.REQUEST_REATTESTATION:
      return "REQUEST_REATTESTATION";
    case Action.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OrderType {
  NOT_USED_ORDER_TYPE = 0,
  /** ORDER_TYPE_PURCHASE - Avoid nmaing conflicts with PURCHASE in the action enum */
  ORDER_TYPE_PURCHASE = 1,
  ORDER_TYPE_SELL = 2,
  UNRECOGNIZED = -1,
}

export function orderTypeFromJSON(object: any): OrderType {
  switch (object) {
    case 0:
    case "NOT_USED_ORDER_TYPE":
      return OrderType.NOT_USED_ORDER_TYPE;
    case 1:
    case "ORDER_TYPE_PURCHASE":
      return OrderType.ORDER_TYPE_PURCHASE;
    case 2:
    case "ORDER_TYPE_SELL":
      return OrderType.ORDER_TYPE_SELL;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderType.UNRECOGNIZED;
  }
}

export function orderTypeToJSON(object: OrderType): string {
  switch (object) {
    case OrderType.NOT_USED_ORDER_TYPE:
      return "NOT_USED_ORDER_TYPE";
    case OrderType.ORDER_TYPE_PURCHASE:
      return "ORDER_TYPE_PURCHASE";
    case OrderType.ORDER_TYPE_SELL:
      return "ORDER_TYPE_SELL";
    case OrderType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OrderStateType {
  NOT_USED_ORDER_STATE_TYPE = 0,
  OPEN = 1,
  PLACED = 2,
  PARTIALLY_EXECUTED = 3,
  EXECUTED = 4,
  CANCELLATION_REQUESTED = 5,
  CANCELLED = 6,
  UNRECOGNIZED = -1,
}

export function orderStateTypeFromJSON(object: any): OrderStateType {
  switch (object) {
    case 0:
    case "NOT_USED_ORDER_STATE_TYPE":
      return OrderStateType.NOT_USED_ORDER_STATE_TYPE;
    case 1:
    case "OPEN":
      return OrderStateType.OPEN;
    case 2:
    case "PLACED":
      return OrderStateType.PLACED;
    case 3:
    case "PARTIALLY_EXECUTED":
      return OrderStateType.PARTIALLY_EXECUTED;
    case 4:
    case "EXECUTED":
      return OrderStateType.EXECUTED;
    case 5:
    case "CANCELLATION_REQUESTED":
      return OrderStateType.CANCELLATION_REQUESTED;
    case 6:
    case "CANCELLED":
      return OrderStateType.CANCELLED;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderStateType.UNRECOGNIZED;
  }
}

export function orderStateTypeToJSON(object: OrderStateType): string {
  switch (object) {
    case OrderStateType.NOT_USED_ORDER_STATE_TYPE:
      return "NOT_USED_ORDER_STATE_TYPE";
    case OrderStateType.OPEN:
      return "OPEN";
    case OrderStateType.PLACED:
      return "PLACED";
    case OrderStateType.PARTIALLY_EXECUTED:
      return "PARTIALLY_EXECUTED";
    case OrderStateType.EXECUTED:
      return "EXECUTED";
    case OrderStateType.CANCELLATION_REQUESTED:
      return "CANCELLATION_REQUESTED";
    case OrderStateType.CANCELLED:
      return "CANCELLED";
    case OrderStateType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum OrderCancelledBy {
  NOT_USED_ORDER_CANCEL_BY = 0,
  SMART_CONTRACT_OWNER = 1,
  BROKER_ORACLE = 2,
  USER = 3,
  UNRECOGNIZED = -1,
}

export function orderCancelledByFromJSON(object: any): OrderCancelledBy {
  switch (object) {
    case 0:
    case "NOT_USED_ORDER_CANCEL_BY":
      return OrderCancelledBy.NOT_USED_ORDER_CANCEL_BY;
    case 1:
    case "SMART_CONTRACT_OWNER":
      return OrderCancelledBy.SMART_CONTRACT_OWNER;
    case 2:
    case "BROKER_ORACLE":
      return OrderCancelledBy.BROKER_ORACLE;
    case 3:
    case "USER":
      return OrderCancelledBy.USER;
    case -1:
    case "UNRECOGNIZED":
    default:
      return OrderCancelledBy.UNRECOGNIZED;
  }
}

export function orderCancelledByToJSON(object: OrderCancelledBy): string {
  switch (object) {
    case OrderCancelledBy.NOT_USED_ORDER_CANCEL_BY:
      return "NOT_USED_ORDER_CANCEL_BY";
    case OrderCancelledBy.SMART_CONTRACT_OWNER:
      return "SMART_CONTRACT_OWNER";
    case OrderCancelledBy.BROKER_ORACLE:
      return "BROKER_ORACLE";
    case OrderCancelledBy.USER:
      return "USER";
    case OrderCancelledBy.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export enum PaymentState {
  NOT_USED_PAYMENT_STATE = 0,
  NOT_PAID = 1,
  PAID = 2,
  UNRECOGNIZED = -1,
}

export function paymentStateFromJSON(object: any): PaymentState {
  switch (object) {
    case 0:
    case "NOT_USED_PAYMENT_STATE":
      return PaymentState.NOT_USED_PAYMENT_STATE;
    case 1:
    case "NOT_PAID":
      return PaymentState.NOT_PAID;
    case 2:
    case "PAID":
      return PaymentState.PAID;
    case -1:
    case "UNRECOGNIZED":
    default:
      return PaymentState.UNRECOGNIZED;
  }
}

export function paymentStateToJSON(object: PaymentState): string {
  switch (object) {
    case PaymentState.NOT_USED_PAYMENT_STATE:
      return "NOT_USED_PAYMENT_STATE";
    case PaymentState.NOT_PAID:
      return "NOT_PAID";
    case PaymentState.PAID:
      return "PAID";
    case PaymentState.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface Transaction {
  TXID: string;
  Height: number;
  Network: string;
  CreatedAt: number;
  /**
   * int64 UpdatedAt = 5; // TODO: consider: do we update TX record, otherwise no need for this field
   * int64 DetectedAt = 6;
   */
  AssetKey: string;
  SmartContractAddr: string;
  Action: Action;
  Sender: string;
  /** Store the snapshot of the order at the time of the transaction */
  OrderDetail:
    | OrderBase
    | undefined;
  /** Attenstation Details (optional) */
  Attestation?: Attestation | undefined;
  FeeUSD: number;
}

export interface Transactions {
  Transactions: Transaction[];
  Offset?: number | undefined;
}

/** Same structure as Order in the Smart Contract */
export interface OrderBase {
  OrderID: number;
  Creator: string;
  Denom: string;
  Amount: number;
  AmountExp: number;
  Instruction: Instruction | undefined;
  Hold?: Hold | undefined;
  FundsSent: Coin | undefined;
  OrderType: OrderType;
  OrderState: OrderState | undefined;
  PaymentState?: PaymentState | undefined;
  AmountExecuted?: number | undefined;
  AmountExecutedExp?: number | undefined;
  UsedFundsAmount?: number | undefined;
  UsedFundsAmountExp?: number | undefined;
  Costs?: number | undefined;
  CostsExp?: number | undefined;
}

export interface Order {
  /** Key combination: Network-SmartContractAddr-AssetKey-OrderID */
  Network: string;
  SmartContractAddr: string;
  AssetKey: string;
  OrderBase: OrderBase | undefined;
  CreatedAt: number;
  /** Additional fields to keep track of the order */
  UpdatedAt: Date | undefined;
}

export interface Orders {
  Orders: Order[];
  Offset?: number | undefined;
}

export interface Instruction {
  limitPrice: string;
  limitPriceExp: string;
  /** Base64 encoded JSON string */
  options: string;
}

export interface Hold {
  Denom: string;
  Amount: number;
  AmountExp: number;
}

export interface Coin {
  Denom: string;
  Amount: number;
}

export interface OrderState {
  OrderStateType: OrderStateType;
  OrderCancelledBy?: OrderCancelledBy | undefined;
}

export interface Attestation {
  /** Using string to represent Uint128 */
  BrokerQuantity: string;
  /** Using string to represent Uint128 */
  ChainQuantity: string;
  BlockHeight: number;
  timestamp: number;
  ReattestationBlockHeight: number;
}

function createBaseTransaction(): Transaction {
  return {
    TXID: "",
    Height: 0,
    Network: "",
    CreatedAt: 0,
    AssetKey: "",
    SmartContractAddr: "",
    Action: 0,
    Sender: "",
    OrderDetail: undefined,
    Attestation: undefined,
    FeeUSD: 0,
  };
}

export const Transaction = {
  encode(message: Transaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.TXID !== "") {
      writer.uint32(10).string(message.TXID);
    }
    if (message.Height !== 0) {
      writer.uint32(16).int64(message.Height);
    }
    if (message.Network !== "") {
      writer.uint32(26).string(message.Network);
    }
    if (message.CreatedAt !== 0) {
      writer.uint32(32).int64(message.CreatedAt);
    }
    if (message.AssetKey !== "") {
      writer.uint32(42).string(message.AssetKey);
    }
    if (message.SmartContractAddr !== "") {
      writer.uint32(50).string(message.SmartContractAddr);
    }
    if (message.Action !== 0) {
      writer.uint32(56).int32(message.Action);
    }
    if (message.Sender !== "") {
      writer.uint32(66).string(message.Sender);
    }
    if (message.OrderDetail !== undefined) {
      OrderBase.encode(message.OrderDetail, writer.uint32(74).fork()).ldelim();
    }
    if (message.Attestation !== undefined) {
      Attestation.encode(message.Attestation, writer.uint32(82).fork()).ldelim();
    }
    if (message.FeeUSD !== 0) {
      writer.uint32(88).int64(message.FeeUSD);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transaction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.TXID = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Height = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Network = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.CreatedAt = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.AssetKey = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.SmartContractAddr = reader.string();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.Action = reader.int32() as any;
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.Sender = reader.string();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.OrderDetail = OrderBase.decode(reader, reader.uint32());
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.Attestation = Attestation.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.FeeUSD = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transaction {
    return {
      TXID: isSet(object.TXID) ? globalThis.String(object.TXID) : "",
      Height: isSet(object.Height) ? globalThis.Number(object.Height) : 0,
      Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
      CreatedAt: isSet(object.CreatedAt) ? globalThis.Number(object.CreatedAt) : 0,
      AssetKey: isSet(object.AssetKey) ? globalThis.String(object.AssetKey) : "",
      SmartContractAddr: isSet(object.SmartContractAddr) ? globalThis.String(object.SmartContractAddr) : "",
      Action: isSet(object.Action) ? actionFromJSON(object.Action) : 0,
      Sender: isSet(object.Sender) ? globalThis.String(object.Sender) : "",
      OrderDetail: isSet(object.OrderDetail) ? OrderBase.fromJSON(object.OrderDetail) : undefined,
      Attestation: isSet(object.Attestation) ? Attestation.fromJSON(object.Attestation) : undefined,
      FeeUSD: isSet(object.FeeUSD) ? globalThis.Number(object.FeeUSD) : 0,
    };
  },

  toJSON(message: Transaction): unknown {
    const obj: any = {};
    if (message.TXID !== "") {
      obj.TXID = message.TXID;
    }
    if (message.Height !== 0) {
      obj.Height = Math.round(message.Height);
    }
    if (message.Network !== "") {
      obj.Network = message.Network;
    }
    if (message.CreatedAt !== 0) {
      obj.CreatedAt = Math.round(message.CreatedAt);
    }
    if (message.AssetKey !== "") {
      obj.AssetKey = message.AssetKey;
    }
    if (message.SmartContractAddr !== "") {
      obj.SmartContractAddr = message.SmartContractAddr;
    }
    if (message.Action !== 0) {
      obj.Action = actionToJSON(message.Action);
    }
    if (message.Sender !== "") {
      obj.Sender = message.Sender;
    }
    if (message.OrderDetail !== undefined) {
      obj.OrderDetail = OrderBase.toJSON(message.OrderDetail);
    }
    if (message.Attestation !== undefined) {
      obj.Attestation = Attestation.toJSON(message.Attestation);
    }
    if (message.FeeUSD !== 0) {
      obj.FeeUSD = Math.round(message.FeeUSD);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.TXID = object.TXID ?? "";
    message.Height = object.Height ?? 0;
    message.Network = object.Network ?? "";
    message.CreatedAt = object.CreatedAt ?? 0;
    message.AssetKey = object.AssetKey ?? "";
    message.SmartContractAddr = object.SmartContractAddr ?? "";
    message.Action = object.Action ?? 0;
    message.Sender = object.Sender ?? "";
    message.OrderDetail = (object.OrderDetail !== undefined && object.OrderDetail !== null)
      ? OrderBase.fromPartial(object.OrderDetail)
      : undefined;
    message.Attestation = (object.Attestation !== undefined && object.Attestation !== null)
      ? Attestation.fromPartial(object.Attestation)
      : undefined;
    message.FeeUSD = object.FeeUSD ?? 0;
    return message;
  },
};

function createBaseTransactions(): Transactions {
  return { Transactions: [], Offset: undefined };
}

export const Transactions = {
  encode(message: Transactions, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Transactions) {
      Transaction.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.Offset !== undefined) {
      writer.uint32(16).int32(message.Offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Transactions {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseTransactions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Transactions.push(Transaction.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Offset = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Transactions {
    return {
      Transactions: globalThis.Array.isArray(object?.Transactions)
        ? object.Transactions.map((e: any) => Transaction.fromJSON(e))
        : [],
      Offset: isSet(object.Offset) ? globalThis.Number(object.Offset) : undefined,
    };
  },

  toJSON(message: Transactions): unknown {
    const obj: any = {};
    if (message.Transactions?.length) {
      obj.Transactions = message.Transactions.map((e) => Transaction.toJSON(e));
    }
    if (message.Offset !== undefined) {
      obj.Offset = Math.round(message.Offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Transactions>, I>>(base?: I): Transactions {
    return Transactions.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Transactions>, I>>(object: I): Transactions {
    const message = createBaseTransactions();
    message.Transactions = object.Transactions?.map((e) => Transaction.fromPartial(e)) || [];
    message.Offset = object.Offset ?? undefined;
    return message;
  },
};

function createBaseOrderBase(): OrderBase {
  return {
    OrderID: 0,
    Creator: "",
    Denom: "",
    Amount: 0,
    AmountExp: 0,
    Instruction: undefined,
    Hold: undefined,
    FundsSent: undefined,
    OrderType: 0,
    OrderState: undefined,
    PaymentState: undefined,
    AmountExecuted: undefined,
    AmountExecutedExp: undefined,
    UsedFundsAmount: undefined,
    UsedFundsAmountExp: undefined,
    Costs: undefined,
    CostsExp: undefined,
  };
}

export const OrderBase = {
  encode(message: OrderBase, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OrderID !== 0) {
      writer.uint32(8).uint64(message.OrderID);
    }
    if (message.Creator !== "") {
      writer.uint32(18).string(message.Creator);
    }
    if (message.Denom !== "") {
      writer.uint32(26).string(message.Denom);
    }
    if (message.Amount !== 0) {
      writer.uint32(32).int64(message.Amount);
    }
    if (message.AmountExp !== 0) {
      writer.uint32(40).int32(message.AmountExp);
    }
    if (message.Instruction !== undefined) {
      Instruction.encode(message.Instruction, writer.uint32(50).fork()).ldelim();
    }
    if (message.Hold !== undefined) {
      Hold.encode(message.Hold, writer.uint32(58).fork()).ldelim();
    }
    if (message.FundsSent !== undefined) {
      Coin.encode(message.FundsSent, writer.uint32(66).fork()).ldelim();
    }
    if (message.OrderType !== 0) {
      writer.uint32(72).int32(message.OrderType);
    }
    if (message.OrderState !== undefined) {
      OrderState.encode(message.OrderState, writer.uint32(82).fork()).ldelim();
    }
    if (message.PaymentState !== undefined) {
      writer.uint32(88).int32(message.PaymentState);
    }
    if (message.AmountExecuted !== undefined) {
      writer.uint32(96).int64(message.AmountExecuted);
    }
    if (message.AmountExecutedExp !== undefined) {
      writer.uint32(104).int32(message.AmountExecutedExp);
    }
    if (message.UsedFundsAmount !== undefined) {
      writer.uint32(112).int64(message.UsedFundsAmount);
    }
    if (message.UsedFundsAmountExp !== undefined) {
      writer.uint32(120).int32(message.UsedFundsAmountExp);
    }
    if (message.Costs !== undefined) {
      writer.uint32(128).int64(message.Costs);
    }
    if (message.CostsExp !== undefined) {
      writer.uint32(136).int32(message.CostsExp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderBase {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderBase();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.OrderID = longToNumber(reader.uint64() as Long);
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Creator = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Denom = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.Amount = longToNumber(reader.int64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.AmountExp = reader.int32();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.Instruction = Instruction.decode(reader, reader.uint32());
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.Hold = Hold.decode(reader, reader.uint32());
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.FundsSent = Coin.decode(reader, reader.uint32());
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.OrderType = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.OrderState = OrderState.decode(reader, reader.uint32());
          continue;
        case 11:
          if (tag !== 88) {
            break;
          }

          message.PaymentState = reader.int32() as any;
          continue;
        case 12:
          if (tag !== 96) {
            break;
          }

          message.AmountExecuted = longToNumber(reader.int64() as Long);
          continue;
        case 13:
          if (tag !== 104) {
            break;
          }

          message.AmountExecutedExp = reader.int32();
          continue;
        case 14:
          if (tag !== 112) {
            break;
          }

          message.UsedFundsAmount = longToNumber(reader.int64() as Long);
          continue;
        case 15:
          if (tag !== 120) {
            break;
          }

          message.UsedFundsAmountExp = reader.int32();
          continue;
        case 16:
          if (tag !== 128) {
            break;
          }

          message.Costs = longToNumber(reader.int64() as Long);
          continue;
        case 17:
          if (tag !== 136) {
            break;
          }

          message.CostsExp = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderBase {
    return {
      OrderID: isSet(object.OrderID) ? globalThis.Number(object.OrderID) : 0,
      Creator: isSet(object.Creator) ? globalThis.String(object.Creator) : "",
      Denom: isSet(object.Denom) ? globalThis.String(object.Denom) : "",
      Amount: isSet(object.Amount) ? globalThis.Number(object.Amount) : 0,
      AmountExp: isSet(object.AmountExp) ? globalThis.Number(object.AmountExp) : 0,
      Instruction: isSet(object.Instruction) ? Instruction.fromJSON(object.Instruction) : undefined,
      Hold: isSet(object.Hold) ? Hold.fromJSON(object.Hold) : undefined,
      FundsSent: isSet(object.FundsSent) ? Coin.fromJSON(object.FundsSent) : undefined,
      OrderType: isSet(object.OrderType) ? orderTypeFromJSON(object.OrderType) : 0,
      OrderState: isSet(object.OrderState) ? OrderState.fromJSON(object.OrderState) : undefined,
      PaymentState: isSet(object.PaymentState) ? paymentStateFromJSON(object.PaymentState) : undefined,
      AmountExecuted: isSet(object.AmountExecuted) ? globalThis.Number(object.AmountExecuted) : undefined,
      AmountExecutedExp: isSet(object.AmountExecutedExp) ? globalThis.Number(object.AmountExecutedExp) : undefined,
      UsedFundsAmount: isSet(object.UsedFundsAmount) ? globalThis.Number(object.UsedFundsAmount) : undefined,
      UsedFundsAmountExp: isSet(object.UsedFundsAmountExp) ? globalThis.Number(object.UsedFundsAmountExp) : undefined,
      Costs: isSet(object.Costs) ? globalThis.Number(object.Costs) : undefined,
      CostsExp: isSet(object.CostsExp) ? globalThis.Number(object.CostsExp) : undefined,
    };
  },

  toJSON(message: OrderBase): unknown {
    const obj: any = {};
    if (message.OrderID !== 0) {
      obj.OrderID = Math.round(message.OrderID);
    }
    if (message.Creator !== "") {
      obj.Creator = message.Creator;
    }
    if (message.Denom !== "") {
      obj.Denom = message.Denom;
    }
    if (message.Amount !== 0) {
      obj.Amount = Math.round(message.Amount);
    }
    if (message.AmountExp !== 0) {
      obj.AmountExp = Math.round(message.AmountExp);
    }
    if (message.Instruction !== undefined) {
      obj.Instruction = Instruction.toJSON(message.Instruction);
    }
    if (message.Hold !== undefined) {
      obj.Hold = Hold.toJSON(message.Hold);
    }
    if (message.FundsSent !== undefined) {
      obj.FundsSent = Coin.toJSON(message.FundsSent);
    }
    if (message.OrderType !== 0) {
      obj.OrderType = orderTypeToJSON(message.OrderType);
    }
    if (message.OrderState !== undefined) {
      obj.OrderState = OrderState.toJSON(message.OrderState);
    }
    if (message.PaymentState !== undefined) {
      obj.PaymentState = paymentStateToJSON(message.PaymentState);
    }
    if (message.AmountExecuted !== undefined) {
      obj.AmountExecuted = Math.round(message.AmountExecuted);
    }
    if (message.AmountExecutedExp !== undefined) {
      obj.AmountExecutedExp = Math.round(message.AmountExecutedExp);
    }
    if (message.UsedFundsAmount !== undefined) {
      obj.UsedFundsAmount = Math.round(message.UsedFundsAmount);
    }
    if (message.UsedFundsAmountExp !== undefined) {
      obj.UsedFundsAmountExp = Math.round(message.UsedFundsAmountExp);
    }
    if (message.Costs !== undefined) {
      obj.Costs = Math.round(message.Costs);
    }
    if (message.CostsExp !== undefined) {
      obj.CostsExp = Math.round(message.CostsExp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OrderBase>, I>>(base?: I): OrderBase {
    return OrderBase.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OrderBase>, I>>(object: I): OrderBase {
    const message = createBaseOrderBase();
    message.OrderID = object.OrderID ?? 0;
    message.Creator = object.Creator ?? "";
    message.Denom = object.Denom ?? "";
    message.Amount = object.Amount ?? 0;
    message.AmountExp = object.AmountExp ?? 0;
    message.Instruction = (object.Instruction !== undefined && object.Instruction !== null)
      ? Instruction.fromPartial(object.Instruction)
      : undefined;
    message.Hold = (object.Hold !== undefined && object.Hold !== null) ? Hold.fromPartial(object.Hold) : undefined;
    message.FundsSent = (object.FundsSent !== undefined && object.FundsSent !== null)
      ? Coin.fromPartial(object.FundsSent)
      : undefined;
    message.OrderType = object.OrderType ?? 0;
    message.OrderState = (object.OrderState !== undefined && object.OrderState !== null)
      ? OrderState.fromPartial(object.OrderState)
      : undefined;
    message.PaymentState = object.PaymentState ?? undefined;
    message.AmountExecuted = object.AmountExecuted ?? undefined;
    message.AmountExecutedExp = object.AmountExecutedExp ?? undefined;
    message.UsedFundsAmount = object.UsedFundsAmount ?? undefined;
    message.UsedFundsAmountExp = object.UsedFundsAmountExp ?? undefined;
    message.Costs = object.Costs ?? undefined;
    message.CostsExp = object.CostsExp ?? undefined;
    return message;
  },
};

function createBaseOrder(): Order {
  return { Network: "", SmartContractAddr: "", AssetKey: "", OrderBase: undefined, CreatedAt: 0, UpdatedAt: undefined };
}

export const Order = {
  encode(message: Order, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Network !== "") {
      writer.uint32(10).string(message.Network);
    }
    if (message.SmartContractAddr !== "") {
      writer.uint32(18).string(message.SmartContractAddr);
    }
    if (message.AssetKey !== "") {
      writer.uint32(26).string(message.AssetKey);
    }
    if (message.OrderBase !== undefined) {
      OrderBase.encode(message.OrderBase, writer.uint32(34).fork()).ldelim();
    }
    if (message.CreatedAt !== 0) {
      writer.uint32(40).int64(message.CreatedAt);
    }
    if (message.UpdatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.UpdatedAt), writer.uint32(50).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Order {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrder();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Network = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.SmartContractAddr = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.AssetKey = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.OrderBase = OrderBase.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.CreatedAt = longToNumber(reader.int64() as Long);
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.UpdatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Order {
    return {
      Network: isSet(object.Network) ? globalThis.String(object.Network) : "",
      SmartContractAddr: isSet(object.SmartContractAddr) ? globalThis.String(object.SmartContractAddr) : "",
      AssetKey: isSet(object.AssetKey) ? globalThis.String(object.AssetKey) : "",
      OrderBase: isSet(object.OrderBase) ? OrderBase.fromJSON(object.OrderBase) : undefined,
      CreatedAt: isSet(object.CreatedAt) ? globalThis.Number(object.CreatedAt) : 0,
      UpdatedAt: isSet(object.UpdatedAt) ? fromJsonTimestamp(object.UpdatedAt) : undefined,
    };
  },

  toJSON(message: Order): unknown {
    const obj: any = {};
    if (message.Network !== "") {
      obj.Network = message.Network;
    }
    if (message.SmartContractAddr !== "") {
      obj.SmartContractAddr = message.SmartContractAddr;
    }
    if (message.AssetKey !== "") {
      obj.AssetKey = message.AssetKey;
    }
    if (message.OrderBase !== undefined) {
      obj.OrderBase = OrderBase.toJSON(message.OrderBase);
    }
    if (message.CreatedAt !== 0) {
      obj.CreatedAt = Math.round(message.CreatedAt);
    }
    if (message.UpdatedAt !== undefined) {
      obj.UpdatedAt = message.UpdatedAt.toISOString();
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Order>, I>>(base?: I): Order {
    return Order.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Order>, I>>(object: I): Order {
    const message = createBaseOrder();
    message.Network = object.Network ?? "";
    message.SmartContractAddr = object.SmartContractAddr ?? "";
    message.AssetKey = object.AssetKey ?? "";
    message.OrderBase = (object.OrderBase !== undefined && object.OrderBase !== null)
      ? OrderBase.fromPartial(object.OrderBase)
      : undefined;
    message.CreatedAt = object.CreatedAt ?? 0;
    message.UpdatedAt = object.UpdatedAt ?? undefined;
    return message;
  },
};

function createBaseOrders(): Orders {
  return { Orders: [], Offset: undefined };
}

export const Orders = {
  encode(message: Orders, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Orders) {
      Order.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.Offset !== undefined) {
      writer.uint32(16).int32(message.Offset);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Orders {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrders();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Orders.push(Order.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Offset = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Orders {
    return {
      Orders: globalThis.Array.isArray(object?.Orders) ? object.Orders.map((e: any) => Order.fromJSON(e)) : [],
      Offset: isSet(object.Offset) ? globalThis.Number(object.Offset) : undefined,
    };
  },

  toJSON(message: Orders): unknown {
    const obj: any = {};
    if (message.Orders?.length) {
      obj.Orders = message.Orders.map((e) => Order.toJSON(e));
    }
    if (message.Offset !== undefined) {
      obj.Offset = Math.round(message.Offset);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Orders>, I>>(base?: I): Orders {
    return Orders.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Orders>, I>>(object: I): Orders {
    const message = createBaseOrders();
    message.Orders = object.Orders?.map((e) => Order.fromPartial(e)) || [];
    message.Offset = object.Offset ?? undefined;
    return message;
  },
};

function createBaseInstruction(): Instruction {
  return { limitPrice: "", limitPriceExp: "", options: "" };
}

export const Instruction = {
  encode(message: Instruction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.limitPrice !== "") {
      writer.uint32(10).string(message.limitPrice);
    }
    if (message.limitPriceExp !== "") {
      writer.uint32(18).string(message.limitPriceExp);
    }
    if (message.options !== "") {
      writer.uint32(26).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Instruction {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseInstruction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.limitPrice = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.limitPriceExp = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.options = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Instruction {
    return {
      limitPrice: isSet(object.limitPrice) ? globalThis.String(object.limitPrice) : "",
      limitPriceExp: isSet(object.limitPriceExp) ? globalThis.String(object.limitPriceExp) : "",
      options: isSet(object.options) ? globalThis.String(object.options) : "",
    };
  },

  toJSON(message: Instruction): unknown {
    const obj: any = {};
    if (message.limitPrice !== "") {
      obj.limitPrice = message.limitPrice;
    }
    if (message.limitPriceExp !== "") {
      obj.limitPriceExp = message.limitPriceExp;
    }
    if (message.options !== "") {
      obj.options = message.options;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Instruction>, I>>(base?: I): Instruction {
    return Instruction.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Instruction>, I>>(object: I): Instruction {
    const message = createBaseInstruction();
    message.limitPrice = object.limitPrice ?? "";
    message.limitPriceExp = object.limitPriceExp ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseHold(): Hold {
  return { Denom: "", Amount: 0, AmountExp: 0 };
}

export const Hold = {
  encode(message: Hold, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Denom !== "") {
      writer.uint32(10).string(message.Denom);
    }
    if (message.Amount !== 0) {
      writer.uint32(16).int64(message.Amount);
    }
    if (message.AmountExp !== 0) {
      writer.uint32(24).int32(message.AmountExp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Hold {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHold();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Denom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Amount = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.AmountExp = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Hold {
    return {
      Denom: isSet(object.Denom) ? globalThis.String(object.Denom) : "",
      Amount: isSet(object.Amount) ? globalThis.Number(object.Amount) : 0,
      AmountExp: isSet(object.AmountExp) ? globalThis.Number(object.AmountExp) : 0,
    };
  },

  toJSON(message: Hold): unknown {
    const obj: any = {};
    if (message.Denom !== "") {
      obj.Denom = message.Denom;
    }
    if (message.Amount !== 0) {
      obj.Amount = Math.round(message.Amount);
    }
    if (message.AmountExp !== 0) {
      obj.AmountExp = Math.round(message.AmountExp);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Hold>, I>>(base?: I): Hold {
    return Hold.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Hold>, I>>(object: I): Hold {
    const message = createBaseHold();
    message.Denom = object.Denom ?? "";
    message.Amount = object.Amount ?? 0;
    message.AmountExp = object.AmountExp ?? 0;
    return message;
  },
};

function createBaseCoin(): Coin {
  return { Denom: "", Amount: 0 };
}

export const Coin = {
  encode(message: Coin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Denom !== "") {
      writer.uint32(10).string(message.Denom);
    }
    if (message.Amount !== 0) {
      writer.uint32(16).int64(message.Amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Coin {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCoin();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Denom = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Amount = longToNumber(reader.int64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Coin {
    return {
      Denom: isSet(object.Denom) ? globalThis.String(object.Denom) : "",
      Amount: isSet(object.Amount) ? globalThis.Number(object.Amount) : 0,
    };
  },

  toJSON(message: Coin): unknown {
    const obj: any = {};
    if (message.Denom !== "") {
      obj.Denom = message.Denom;
    }
    if (message.Amount !== 0) {
      obj.Amount = Math.round(message.Amount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Coin>, I>>(base?: I): Coin {
    return Coin.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Coin>, I>>(object: I): Coin {
    const message = createBaseCoin();
    message.Denom = object.Denom ?? "";
    message.Amount = object.Amount ?? 0;
    return message;
  },
};

function createBaseOrderState(): OrderState {
  return { OrderStateType: 0, OrderCancelledBy: undefined };
}

export const OrderState = {
  encode(message: OrderState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.OrderStateType !== 0) {
      writer.uint32(8).int32(message.OrderStateType);
    }
    if (message.OrderCancelledBy !== undefined) {
      writer.uint32(16).int32(message.OrderCancelledBy);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OrderState {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOrderState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.OrderStateType = reader.int32() as any;
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.OrderCancelledBy = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): OrderState {
    return {
      OrderStateType: isSet(object.OrderStateType) ? orderStateTypeFromJSON(object.OrderStateType) : 0,
      OrderCancelledBy: isSet(object.OrderCancelledBy) ? orderCancelledByFromJSON(object.OrderCancelledBy) : undefined,
    };
  },

  toJSON(message: OrderState): unknown {
    const obj: any = {};
    if (message.OrderStateType !== 0) {
      obj.OrderStateType = orderStateTypeToJSON(message.OrderStateType);
    }
    if (message.OrderCancelledBy !== undefined) {
      obj.OrderCancelledBy = orderCancelledByToJSON(message.OrderCancelledBy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<OrderState>, I>>(base?: I): OrderState {
    return OrderState.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<OrderState>, I>>(object: I): OrderState {
    const message = createBaseOrderState();
    message.OrderStateType = object.OrderStateType ?? 0;
    message.OrderCancelledBy = object.OrderCancelledBy ?? undefined;
    return message;
  },
};

function createBaseAttestation(): Attestation {
  return { BrokerQuantity: "", ChainQuantity: "", BlockHeight: 0, timestamp: 0, ReattestationBlockHeight: 0 };
}

export const Attestation = {
  encode(message: Attestation, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.BrokerQuantity !== "") {
      writer.uint32(10).string(message.BrokerQuantity);
    }
    if (message.ChainQuantity !== "") {
      writer.uint32(18).string(message.ChainQuantity);
    }
    if (message.BlockHeight !== 0) {
      writer.uint32(24).uint64(message.BlockHeight);
    }
    if (message.timestamp !== 0) {
      writer.uint32(32).uint64(message.timestamp);
    }
    if (message.ReattestationBlockHeight !== 0) {
      writer.uint32(40).uint64(message.ReattestationBlockHeight);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Attestation {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAttestation();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.BrokerQuantity = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ChainQuantity = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.BlockHeight = longToNumber(reader.uint64() as Long);
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.timestamp = longToNumber(reader.uint64() as Long);
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.ReattestationBlockHeight = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Attestation {
    return {
      BrokerQuantity: isSet(object.BrokerQuantity) ? globalThis.String(object.BrokerQuantity) : "",
      ChainQuantity: isSet(object.ChainQuantity) ? globalThis.String(object.ChainQuantity) : "",
      BlockHeight: isSet(object.BlockHeight) ? globalThis.Number(object.BlockHeight) : 0,
      timestamp: isSet(object.timestamp) ? globalThis.Number(object.timestamp) : 0,
      ReattestationBlockHeight: isSet(object.ReattestationBlockHeight)
        ? globalThis.Number(object.ReattestationBlockHeight)
        : 0,
    };
  },

  toJSON(message: Attestation): unknown {
    const obj: any = {};
    if (message.BrokerQuantity !== "") {
      obj.BrokerQuantity = message.BrokerQuantity;
    }
    if (message.ChainQuantity !== "") {
      obj.ChainQuantity = message.ChainQuantity;
    }
    if (message.BlockHeight !== 0) {
      obj.BlockHeight = Math.round(message.BlockHeight);
    }
    if (message.timestamp !== 0) {
      obj.timestamp = Math.round(message.timestamp);
    }
    if (message.ReattestationBlockHeight !== 0) {
      obj.ReattestationBlockHeight = Math.round(message.ReattestationBlockHeight);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Attestation>, I>>(base?: I): Attestation {
    return Attestation.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Attestation>, I>>(object: I): Attestation {
    const message = createBaseAttestation();
    message.BrokerQuantity = object.BrokerQuantity ?? "";
    message.ChainQuantity = object.ChainQuantity ?? "";
    message.BlockHeight = object.BlockHeight ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.ReattestationBlockHeight = object.ReattestationBlockHeight ?? 0;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
