import _m0 from "protobufjs/minimal";
import { Audit } from "../com-fs-utils-lib/models/audit/audit";
import { MetaData } from "../com-fs-utils-lib/models/metadata/metadata";
import { Denom } from "./domain/denom/denom";
export declare const protobufPackage = "asset";
export declare enum AssetStatus {
    ASSET_STATUS_DO_NOT_USE = 0,
    /** DO_NOT_LIST - BROKER_ASSET_ADMINISTRATOR only */
    DO_NOT_LIST = 1,
    /** REQUEST_LISTING - BROKER_ASSET_ADMINISTRATOR only */
    REQUEST_LISTING = 2,
    /** LISTED - ORGANIZATION_ASSET_ADMINISTRATOR only */
    LISTED = 3,
    /** ORGANIZATION_ADMIN_DO_NOT_LIST - ORGANIZATION_ASSET_ADMINISTRATOR only */
    ORGANIZATION_ADMIN_DO_NOT_LIST = 4,
    OUTDATED_ASSET_VERSION = 5,
    UNRECOGNIZED = -1
}
export declare function assetStatusFromJSON(object: any): AssetStatus;
export declare function assetStatusToJSON(object: AssetStatus): string;
export declare enum Reason {
    REASON_DO_NOT_USE = 0,
    DUPLICATE = 1,
    UNWANTED_ASSET = 2,
    UNSTABLE_ASSET = 3,
    UNRECOGNIZED = -1
}
export declare function reasonFromJSON(object: any): Reason;
export declare function reasonToJSON(object: Reason): string;
/** TODO: to have shared between order */
export declare enum AssetType {
    ASSET_TYPE_DO_NOT_USE = 0,
    STOCKS = 1,
    BONDS = 2,
    /** WRAPPED_STABLECOIN - Represents a stablecoin that is wrapped for internal use within the system, such as WUSDC. */
    WRAPPED_STABLECOIN = 3,
    CRYPTO = 4,
    FOREX = 5,
    FUTURES = 6,
    OPTIONS = 7,
    UNRECOGNIZED = -1
}
export declare function assetTypeFromJSON(object: any): AssetType;
export declare function assetTypeToJSON(object: AssetType): string;
export declare enum UserAssetStatus {
    USER_ASSET_STATUS_DO_NOT_USE = 0,
    NOT_WHITELISTED = 1,
    WHITELISTING_REQUESTED = 2,
    WHITELISTED = 3,
    OUTDATED_VERSION = 4,
    UNRECOGNIZED = -1
}
export declare function userAssetStatusFromJSON(object: any): UserAssetStatus;
export declare function userAssetStatusToJSON(object: UserAssetStatus): string;
export declare enum Exchange {
    EXCHANGE_DO_NOT_USE = 0,
    NASDAQ = 1,
    NYSE = 2,
    /** ONCHAIN - On‑chain token/cryptocurrency markets, e.g. wrapped USDC */
    ONCHAIN = 3,
    UNRECOGNIZED = -1
}
export declare function exchangeFromJSON(object: any): Exchange;
export declare function exchangeToJSON(object: Exchange): string;
/**
 * Global Industry Classification Standard (GICS®) 11 sectors
 * Source: https://www.msci.com/our-solutions/indexes/gics
 */
export declare enum Industry {
    INDUSTRY_DO_NOT_USE = 0,
    ENERGY = 1,
    MATERIALS = 2,
    INDUSTRIALS = 3,
    CONSUMER_DISCRETIONARY = 4,
    CONSUMER_STAPLES = 5,
    HEALTH_CARE = 6,
    FINANCIALS = 7,
    INFORMATION_TECHNOLOGY = 8,
    COMMUNICATION_SERVICES = 9,
    UTILITIES = 10,
    REAL_ESTATE = 11,
    UNRECOGNIZED = -1
}
export declare function industryFromJSON(object: any): Industry;
export declare function industryToJSON(object: Industry): string;
export interface AssetDetails {
    /** Key combination: Currency_OrganizationID_SmartContractIssuerAddr e.g "appl_1_72c4c072-2fe4-4f72-ae9d-d9d52a05fd71_testcore1et29c..." */
    ID: string;
    /** External entity (broker) that owns this asset */
    OrganizationID: string;
    Status: AssetStatus;
    Reason?: Reason | undefined;
    /** list of jurisdictionIDs where this asset is allowed to be traded */
    JurisdictionIDs: string[];
    Type: AssetType;
    /** Asset specific properties */
    Name: string;
    ExchangeTickerSymbol: string;
    Exchange: Exchange;
    /** Description for internal use, not for on-chain */
    InternalDescription: string;
    MinTransactionAmount: number;
    /**
     * TradingMarginPercentage is required additional margin as a percentage of the order value that buyers must provide.
     * Value should be between 0.0 and 1.0 (0% to 100%)
     * Example: If TradingMarginPercentage = 0.1 (10%) and order value is $100:
     *  - Buyer must provide $110 total ($100 asset cost + $10 margin)
     *  - $5 (5%, cost) is kept for transaction costs
     *  - $5 (5%, refundable) is returned to the buyer after execution
     */
    TradingMarginPercentage: number;
    LogoFile: LogoFile | undefined;
    /** Global Industry Classification Standard (GICS®) sector */
    Industry: Industry;
    /**
     * Margin percentage specific to the asset. This is the asset's individual margin percentage used to calculate buying power.
     * Buying Power = AvailableFunds(On-chain) + (Σ Assets(non-stablecoin)  × AssetMarginPercentage)
     * Asset Margin Percentage: represents the collateral value of the asset (e.g., 50% → 10,000BTC → 10,000BTC → 5,000 buying power contribution)
     */
    AssetMarginPercentage: number;
    /** On-chain properties */
    Denom: Denom | undefined;
    /** Flag to indicate if the asset is issued in the smart contract */
    IsIssuedInSmartContract: boolean;
    /** Issuer address of the smart contract (distinct from Denom.Issuer which is the smart contract address that minted the token) */
    SmartContractIssuerAddr: string;
}
export interface Asset {
    AssetDetails: AssetDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
}
export interface Assets {
    Assets: Asset[];
}
export interface LogoFile {
    /** The reference to the file */
    Reference: string;
    Extension: string;
    /** User defined name of the file, used as a "description" and not to reference the file */
    Name?: string | undefined;
}
export interface UserAssetList {
    /** Key combination: Currency-OrganizationID-AccountID-Wallet (AssetKey-AccountID-Wallet) */
    AccountID: string;
    Wallet: string;
    /** Currency-OrganizationID */
    AssetKey: string;
    Status: UserAssetStatus;
    MetaData: MetaData | undefined;
    Visible: boolean;
}
export interface UserAssetLists {
    UserAssetLists: UserAssetList[];
}
export declare const AssetDetails: {
    encode(message: AssetDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AssetDetails;
    fromJSON(object: any): AssetDetails;
    toJSON(message: AssetDetails): unknown;
    create<I extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: string[] | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
        Denom?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: ({
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & { [K_1 in Exclude<keyof I["LogoFile"], keyof LogoFile>]: never; }) | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
        Denom?: ({
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
            } & { [K_2 in Exclude<keyof I["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_3 in Exclude<keyof I["Denom"], keyof Denom>]: never; }) | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof AssetDetails>]: never; }>(base?: I | undefined): AssetDetails;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: string[] | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
        Denom?: {
            Currency?: {
                Symbol?: string | undefined;
                Version?: string | undefined;
            } | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        Type?: AssetType | undefined;
        Name?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: Exchange | undefined;
        InternalDescription?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        LogoFile?: ({
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["LogoFile"], keyof LogoFile>]: never; }) | undefined;
        Industry?: Industry | undefined;
        AssetMarginPercentage?: number | undefined;
        Denom?: ({
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
            } & { [K_7 in Exclude<keyof I_1["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["Denom"], keyof Denom>]: never; }) | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof AssetDetails>]: never; }>(object: I_1): AssetDetails;
};
export declare const Asset: {
    encode(message: Asset, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Asset;
    fromJSON(object: any): Asset;
    toJSON(message: Asset): unknown;
    create<I extends {
        AssetDetails?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        AssetDetails?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: ({
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & { [K_1 in Exclude<keyof I["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
            Denom?: ({
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
                } & { [K_2 in Exclude<keyof I["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_3 in Exclude<keyof I["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
        } & { [K_4 in Exclude<keyof I["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_5 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_6 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        AssetDetails?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
        } | undefined;
        MetaData?: {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
    } & {
        AssetDetails?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: string[] | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
            Denom?: {
                Currency?: {
                    Symbol?: string | undefined;
                    Version?: string | undefined;
                } | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            Type?: AssetType | undefined;
            Name?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: Exchange | undefined;
            InternalDescription?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            LogoFile?: ({
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
            Industry?: Industry | undefined;
            AssetMarginPercentage?: number | undefined;
            Denom?: ({
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
                } & { [K_10 in Exclude<keyof I_1["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_11 in Exclude<keyof I_1["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
        } & { [K_12 in Exclude<keyof I_1["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_13 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_14 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
    } & { [K_15 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
};
export declare const Assets: {
    encode(message: Assets, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Assets;
    fromJSON(object: any): Assets;
    toJSON(message: Assets): unknown;
    create<I extends {
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["Assets"][number]["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: ({
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & { [K_1 in Exclude<keyof I["Assets"][number]["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: ({
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
                    } & { [K_2 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_3 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } & { [K_4 in Exclude<keyof I["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_5 in Exclude<keyof I["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_6 in Exclude<keyof I["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_7 in Exclude<keyof I["Assets"][number], keyof Asset>]: never; })[] & { [K_8 in Exclude<keyof I["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I, "Assets">]: never; }>(base?: I | undefined): Assets;
    fromPartial<I_1 extends {
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] | undefined;
    } & {
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K_10 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: ({
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & { [K_11 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["LogoFile"], keyof LogoFile>]: never; }) | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: ({
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
                    } & { [K_12 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_13 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } & { [K_14 in Exclude<keyof I_1["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_15 in Exclude<keyof I_1["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_16 in Exclude<keyof I_1["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I_1["Assets"][number], keyof Asset>]: never; })[] & { [K_18 in Exclude<keyof I_1["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                JurisdictionIDs?: string[] | undefined;
                Type?: AssetType | undefined;
                Name?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: Exchange | undefined;
                InternalDescription?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                LogoFile?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                Industry?: Industry | undefined;
                AssetMarginPercentage?: number | undefined;
                Denom?: {
                    Currency?: {
                        Symbol?: string | undefined;
                        Version?: string | undefined;
                    } | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
            } | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_19 in Exclude<keyof I_1, "Assets">]: never; }>(object: I_1): Assets;
};
export declare const LogoFile: {
    encode(message: LogoFile, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): LogoFile;
    fromJSON(object: any): LogoFile;
    toJSON(message: LogoFile): unknown;
    create<I extends {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & { [K in Exclude<keyof I, keyof LogoFile>]: never; }>(base?: I | undefined): LogoFile;
    fromPartial<I_1 extends {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & {
        Reference?: string | undefined;
        Extension?: string | undefined;
        Name?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof LogoFile>]: never; }>(object: I_1): LogoFile;
};
export declare const UserAssetList: {
    encode(message: UserAssetList, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetList;
    fromJSON(object: any): UserAssetList;
    toJSON(message: UserAssetList): unknown;
    create<I extends {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Visible?: boolean | undefined;
    } & {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: ({
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Visible?: boolean | undefined;
    } & { [K_1 in Exclude<keyof I, keyof UserAssetList>]: never; }>(base?: I | undefined): UserAssetList;
    fromPartial<I_1 extends {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Visible?: boolean | undefined;
    } & {
        AccountID?: string | undefined;
        Wallet?: string | undefined;
        AssetKey?: string | undefined;
        Status?: UserAssetStatus | undefined;
        MetaData?: ({
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_2 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Visible?: boolean | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof UserAssetList>]: never; }>(object: I_1): UserAssetList;
};
export declare const UserAssetLists: {
    encode(message: UserAssetLists, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): UserAssetLists;
    fromJSON(object: any): UserAssetLists;
    toJSON(message: UserAssetLists): unknown;
    create<I extends {
        UserAssetLists?: {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] | undefined;
    } & {
        UserAssetLists?: ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] & ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        } & {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: ({
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K in Exclude<keyof I["UserAssetLists"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Visible?: boolean | undefined;
        } & { [K_1 in Exclude<keyof I["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_2 in Exclude<keyof I["UserAssetLists"], keyof {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "UserAssetLists">]: never; }>(base?: I | undefined): UserAssetLists;
    fromPartial<I_1 extends {
        UserAssetLists?: {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] | undefined;
    } & {
        UserAssetLists?: ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[] & ({
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        } & {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: ({
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["UserAssetLists"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Visible?: boolean | undefined;
        } & { [K_5 in Exclude<keyof I_1["UserAssetLists"][number], keyof UserAssetList>]: never; })[] & { [K_6 in Exclude<keyof I_1["UserAssetLists"], keyof {
            AccountID?: string | undefined;
            Wallet?: string | undefined;
            AssetKey?: string | undefined;
            Status?: UserAssetStatus | undefined;
            MetaData?: {
                Network?: import("../com-fs-utils-lib/models/metadata/metadata").Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "UserAssetLists">]: never; }>(object: I_1): UserAssetLists;
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
