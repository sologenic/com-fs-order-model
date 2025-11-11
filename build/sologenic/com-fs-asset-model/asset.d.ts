import _m0 from "protobufjs/minimal";
import { Audit } from "../com-fs-utils-lib/models/audit/audit";
import { MetaData, Network } from "../com-fs-utils-lib/models/metadata/metadata";
import { Denom } from "./domain/denom/denom";
export declare const protobufPackage = "asset";
export declare enum LinkType {
    LINK_TYPE_DO_NOT_USE = 0,
    WEBSITE = 1,
    GITHUB = 2,
    WHITEPAPER = 3,
    DOCS = 4,
    EXPLORER = 5,
    GOVERNANCE = 6,
    UNRECOGNIZED = -1
}
export declare function linkTypeFromJSON(object: any): LinkType;
export declare function linkTypeToJSON(object: LinkType): string;
export declare enum SocialMediaType {
    SOCIAL_MEDIA_TYPE_DO_NOT_USE = 0,
    TWITTER = 1,
    TELEGRAM = 2,
    DISCORD = 3,
    MEDIUM = 4,
    LINKEDIN = 5,
    UNRECOGNIZED = -1
}
export declare function socialMediaTypeFromJSON(object: any): SocialMediaType;
export declare function socialMediaTypeToJSON(object: SocialMediaType): string;
export declare enum AssetStatus {
    ASSET_STATUS_DO_NOT_USE = 0,
    DO_NOT_LIST = 1,
    REQUEST_LISTING = 2,
    LISTED = 3,
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
export declare enum AssetType {
    ASSET_TYPE_DO_NOT_USE = 0,
    FUNDS_AND_INVESTMENT_PRODUCT = 1,
    COMMODITY = 2,
    WRAPPED_STABLECOIN = 3,
    CRYPTO = 4,
    COLLECTIBLE = 5,
    VEHICLE_INDUSTRIAL_EQUIPMENT = 6,
    INTELLECTUAL_PROPERTY = 7,
    REAL_ESTATE = 8,
    EQUITY = 9,
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
export interface AssetDetails {
    /** Key string to prevent composing the key all the time and reduce errors */
    ID: string;
    OrganizationID: string;
    Status: AssetStatus;
    Reason?: Reason | undefined;
    Type: AssetType;
    Denom: Denom | undefined;
    IsIssuedInSmartContract: boolean;
    SmartContractIssuerAddr: string;
    RealEstateDetails?: RealEstate | undefined;
    StableCoinDetails?: StableCoin | undefined;
    CommodityDetails?: Commodity | undefined;
    CollectibleDetails?: Collectible | undefined;
    VehicleDetails?: Vehicle | undefined;
    IntellectualPropertyDetails?: IntellectualProperty | undefined;
    InvestmentFundDetails?: InvestmentFund | undefined;
    EquityDetails?: Equity | undefined;
    /** Financial-specific properties */
    FinancialProperties?: FinancialProperties | undefined;
    /** Human-readable descriptive properties */
    Description?: Description | undefined;
    /** External links and resources */
    ExternalResources?: ExternalResources | undefined;
}
export interface Asset {
    AssetDetails: AssetDetails | undefined;
    MetaData: MetaData | undefined;
    Audit: Audit | undefined;
    IssuerDetails: IssuerDetails | undefined;
}
export interface Assets {
    Assets: Asset[];
    /** If there is more data, this is the offset to pass to the next call */
    Offset?: number | undefined;
}
export interface UserAssetList {
    AccountID: string;
    Wallet: string;
    AssetKey: string;
    Status: UserAssetStatus;
    MetaData: MetaData | undefined;
    Visible: boolean;
}
export interface UserAssetLists {
    UserAssetLists: UserAssetList[];
}
export interface RealEstate {
    Address: string;
    Bathrooms?: number | undefined;
    Bedrooms?: number | undefined;
    Latitude: number;
    Longitude: number;
    OwnershipType?: string | undefined;
    PropertyType: string;
    RiskRating?: string | undefined;
    SquareFootage?: number | undefined;
    TenancyStatus?: string | undefined;
    YearBuilt?: number | undefined;
    YieldPercent: number[];
}
export interface StableCoin {
    Version?: string | undefined;
    PegType?: string | undefined;
    PegRatio?: number | undefined;
    BackingAsset?: string | undefined;
    ExchangeTickerSymbol?: string | undefined;
    Exchange?: string | undefined;
    MinTransactionAmount?: number | undefined;
    TradingMarginPercentage?: number | undefined;
    AssetMarginPercentage?: number | undefined;
}
export interface Commodity {
    Category: string;
    Quality?: string | undefined;
    UnitOfMeasure: string;
    Quantity?: number | undefined;
    OriginCountry?: string | undefined;
    ExchangeTickerSymbol?: string | undefined;
    Exchange?: string | undefined;
    MinTransactionAmount?: number | undefined;
    StorageLocation?: string | undefined;
    ContractType?: string | undefined;
    DeliveryDate?: string | undefined;
}
export interface Collectible {
    Category: string;
    CollectionName?: string | undefined;
    TokenStandard?: string | undefined;
    TokenID?: string | undefined;
    MetadataURI?: string | undefined;
    Creator?: string | undefined;
    OwnershipHistory: string[];
    CurrentOwner: string;
}
export interface Vehicle {
    Category: string;
    Manufacturer: string;
    Model: string;
    SerialNumber: string;
    Year?: number | undefined;
    Specifications?: string | undefined;
    FuelType?: string | undefined;
    UsageHours?: number | undefined;
    Mileage?: number | undefined;
    Condition: string;
    CurrentOwner: string;
    Location?: string | undefined;
}
export interface IntellectualProperty {
    Category: string;
    Owner: string;
    RegistrationNumber?: string | undefined;
    FilingDate?: string | undefined;
    ExpirationDate?: string | undefined;
    IPJurisdictionIDs: string[];
    LicenseType?: string | undefined;
    LicenseTerms?: string | undefined;
    Value?: number | undefined;
}
export interface InvestmentFund {
    FundType: string;
    Exchange: string;
    ISIN?: string | undefined;
    NAV?: number | undefined;
    InceptionDate?: string | undefined;
    Manager?: string | undefined;
    ExpenseRatio?: number | undefined;
    Holdings: string[];
}
export interface Equity {
    ExchangeTickerSymbol?: string | undefined;
    Exchange?: string | undefined;
    MinTransactionAmount: number;
    TradingMarginPercentage: number;
    AssetMarginPercentage: number;
}
export interface FinancialProperties {
    Symbol: string;
    Issuer: string;
    JurisdictionIDs: string[];
    JurisdictionRestrictions?: string | undefined;
    RedemptionTerms?: string | undefined;
    ComplianceRequired?: boolean | undefined;
    Type: string;
    TradeAllowances: string[];
    Transferable: boolean;
    Platform: string;
    PlatformType: string;
    ContractAddress?: string | undefined;
    Fractional: boolean;
    TotalSupply?: number | undefined;
    Subunit?: string | undefined;
    Price?: number | undefined;
    DecimalPlacesPrice: number;
    Currency: string;
    InitialValuation: number;
    CurrentValuation: number;
    ValuationDate?: string | undefined;
    Network: Network;
    Status: string;
}
export interface Description {
    Name: string;
    Description: string;
    Logo: LogoFile | undefined;
    AssetID: string;
    URL: string;
    Country: string[];
    Documents: string[];
    Images: string[];
    Vertical: string;
    CreatedAt?: string | undefined;
    UpdatedAt?: string | undefined;
}
export interface ExternalResources {
    /** Flexible list of links with type and URL */
    Links: Link[];
    /** Flexible list of social media with type and URL */
    Socials: SocialMedia[];
}
export interface Link {
    /** Type of link (e.g., "website", "github", "whitepaper", "docs", "explorer", "governance", etc.) */
    Type: LinkType;
    /** The actual URL */
    URL: string;
}
export interface SocialMedia {
    /** Type of social media (e.g., "twitter", "telegram", "discord", "medium", "linkedin", etc.) */
    Type: SocialMediaType;
    /** The actual URL */
    URL: string;
}
export interface IssuerDetails {
    Name: string;
    Description: string;
    Image: string;
    ExternalUrl: string;
    AddressLine1: string;
    AddressLine2?: string | undefined;
    City: string;
    Region?: string | undefined;
    PostalCode?: string | undefined;
    Country: string;
    YearFounded: number;
    Licensed: boolean;
    LicenseCountry?: string | undefined;
    LicenseNumber?: string | undefined;
    Phone?: string | undefined;
    Email?: string | undefined;
    SocialMediaLinks: string[];
    KeyClients?: string | undefined;
    Press?: string | undefined;
}
export interface LogoFile {
    /** The reference to the file */
    Reference: string;
    Extension: string;
    /** User defined name of the file, used as a "description" and not to reference the file */
    Name?: string | undefined;
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
        Type?: AssetType | undefined;
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
        RealEstateDetails?: {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } | undefined;
        StableCoinDetails?: {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } | undefined;
        CommodityDetails?: {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } | undefined;
        CollectibleDetails?: {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } | undefined;
        VehicleDetails?: {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } | undefined;
        IntellectualPropertyDetails?: {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } | undefined;
        InvestmentFundDetails?: {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } | undefined;
        EquityDetails?: {
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } | undefined;
        FinancialProperties?: {
            Symbol?: string | undefined;
            Issuer?: string | undefined;
            JurisdictionIDs?: string[] | undefined;
            JurisdictionRestrictions?: string | undefined;
            RedemptionTerms?: string | undefined;
            ComplianceRequired?: boolean | undefined;
            Type?: string | undefined;
            TradeAllowances?: string[] | undefined;
            Transferable?: boolean | undefined;
            Platform?: string | undefined;
            PlatformType?: string | undefined;
            ContractAddress?: string | undefined;
            Fractional?: boolean | undefined;
            TotalSupply?: number | undefined;
            Subunit?: string | undefined;
            Price?: number | undefined;
            DecimalPlacesPrice?: number | undefined;
            Currency?: string | undefined;
            InitialValuation?: number | undefined;
            CurrentValuation?: number | undefined;
            ValuationDate?: string | undefined;
            Network?: Network | undefined;
            Status?: string | undefined;
        } | undefined;
        Description?: {
            Name?: string | undefined;
            Description?: string | undefined;
            Logo?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            AssetID?: string | undefined;
            URL?: string | undefined;
            Country?: string[] | undefined;
            Documents?: string[] | undefined;
            Images?: string[] | undefined;
            Vertical?: string | undefined;
            CreatedAt?: string | undefined;
            UpdatedAt?: string | undefined;
        } | undefined;
        ExternalResources?: {
            Links?: {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[] | undefined;
            Socials?: {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Type?: AssetType | undefined;
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
            } & { [K in Exclude<keyof I["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_1 in Exclude<keyof I["Denom"], keyof Denom>]: never; }) | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
        RealEstateDetails?: ({
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } & {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
        StableCoinDetails?: ({
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & { [K_4 in Exclude<keyof I["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
        CommodityDetails?: ({
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & { [K_5 in Exclude<keyof I["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
        CollectibleDetails?: ({
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } & {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: (string[] & string[] & { [K_6 in Exclude<keyof I["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
            CurrentOwner?: string | undefined;
        } & { [K_7 in Exclude<keyof I["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
        VehicleDetails?: ({
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & { [K_8 in Exclude<keyof I["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
        IntellectualPropertyDetails?: ({
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: (string[] & string[] & { [K_9 in Exclude<keyof I["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & { [K_10 in Exclude<keyof I["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
        InvestmentFundDetails?: ({
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } & {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: (string[] & string[] & { [K_11 in Exclude<keyof I["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
        EquityDetails?: ({
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & {
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & { [K_13 in Exclude<keyof I["EquityDetails"], keyof Equity>]: never; }) | undefined;
        FinancialProperties?: ({
            Symbol?: string | undefined;
            Issuer?: string | undefined;
            JurisdictionIDs?: string[] | undefined;
            JurisdictionRestrictions?: string | undefined;
            RedemptionTerms?: string | undefined;
            ComplianceRequired?: boolean | undefined;
            Type?: string | undefined;
            TradeAllowances?: string[] | undefined;
            Transferable?: boolean | undefined;
            Platform?: string | undefined;
            PlatformType?: string | undefined;
            ContractAddress?: string | undefined;
            Fractional?: boolean | undefined;
            TotalSupply?: number | undefined;
            Subunit?: string | undefined;
            Price?: number | undefined;
            DecimalPlacesPrice?: number | undefined;
            Currency?: string | undefined;
            InitialValuation?: number | undefined;
            CurrentValuation?: number | undefined;
            ValuationDate?: string | undefined;
            Network?: Network | undefined;
            Status?: string | undefined;
        } & {
            Symbol?: string | undefined;
            Issuer?: string | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K_14 in Exclude<keyof I["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            JurisdictionRestrictions?: string | undefined;
            RedemptionTerms?: string | undefined;
            ComplianceRequired?: boolean | undefined;
            Type?: string | undefined;
            TradeAllowances?: (string[] & string[] & { [K_15 in Exclude<keyof I["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
            Transferable?: boolean | undefined;
            Platform?: string | undefined;
            PlatformType?: string | undefined;
            ContractAddress?: string | undefined;
            Fractional?: boolean | undefined;
            TotalSupply?: number | undefined;
            Subunit?: string | undefined;
            Price?: number | undefined;
            DecimalPlacesPrice?: number | undefined;
            Currency?: string | undefined;
            InitialValuation?: number | undefined;
            CurrentValuation?: number | undefined;
            ValuationDate?: string | undefined;
            Network?: Network | undefined;
            Status?: string | undefined;
        } & { [K_16 in Exclude<keyof I["FinancialProperties"], keyof FinancialProperties>]: never; }) | undefined;
        Description?: ({
            Name?: string | undefined;
            Description?: string | undefined;
            Logo?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            AssetID?: string | undefined;
            URL?: string | undefined;
            Country?: string[] | undefined;
            Documents?: string[] | undefined;
            Images?: string[] | undefined;
            Vertical?: string | undefined;
            CreatedAt?: string | undefined;
            UpdatedAt?: string | undefined;
        } & {
            Name?: string | undefined;
            Description?: string | undefined;
            Logo?: ({
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & { [K_17 in Exclude<keyof I["Description"]["Logo"], keyof LogoFile>]: never; }) | undefined;
            AssetID?: string | undefined;
            URL?: string | undefined;
            Country?: (string[] & string[] & { [K_18 in Exclude<keyof I["Description"]["Country"], keyof string[]>]: never; }) | undefined;
            Documents?: (string[] & string[] & { [K_19 in Exclude<keyof I["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
            Images?: (string[] & string[] & { [K_20 in Exclude<keyof I["Description"]["Images"], keyof string[]>]: never; }) | undefined;
            Vertical?: string | undefined;
            CreatedAt?: string | undefined;
            UpdatedAt?: string | undefined;
        } & { [K_21 in Exclude<keyof I["Description"], keyof Description>]: never; }) | undefined;
        ExternalResources?: ({
            Links?: {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[] | undefined;
            Socials?: {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[] | undefined;
        } & {
            Links?: ({
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[] & ({
                Type?: LinkType | undefined;
                URL?: string | undefined;
            } & {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            } & { [K_22 in Exclude<keyof I["ExternalResources"]["Links"][number], keyof Link>]: never; })[] & { [K_23 in Exclude<keyof I["ExternalResources"]["Links"], keyof {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[]>]: never; }) | undefined;
            Socials?: ({
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[] & ({
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            } & {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            } & { [K_24 in Exclude<keyof I["ExternalResources"]["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_25 in Exclude<keyof I["ExternalResources"]["Socials"], keyof {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_26 in Exclude<keyof I["ExternalResources"], keyof ExternalResources>]: never; }) | undefined;
    } & { [K_27 in Exclude<keyof I, keyof AssetDetails>]: never; }>(base?: I | undefined): AssetDetails;
    fromPartial<I_1 extends {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Type?: AssetType | undefined;
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
        RealEstateDetails?: {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } | undefined;
        StableCoinDetails?: {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } | undefined;
        CommodityDetails?: {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } | undefined;
        CollectibleDetails?: {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } | undefined;
        VehicleDetails?: {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } | undefined;
        IntellectualPropertyDetails?: {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } | undefined;
        InvestmentFundDetails?: {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } | undefined;
        EquityDetails?: {
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } | undefined;
        FinancialProperties?: {
            Symbol?: string | undefined;
            Issuer?: string | undefined;
            JurisdictionIDs?: string[] | undefined;
            JurisdictionRestrictions?: string | undefined;
            RedemptionTerms?: string | undefined;
            ComplianceRequired?: boolean | undefined;
            Type?: string | undefined;
            TradeAllowances?: string[] | undefined;
            Transferable?: boolean | undefined;
            Platform?: string | undefined;
            PlatformType?: string | undefined;
            ContractAddress?: string | undefined;
            Fractional?: boolean | undefined;
            TotalSupply?: number | undefined;
            Subunit?: string | undefined;
            Price?: number | undefined;
            DecimalPlacesPrice?: number | undefined;
            Currency?: string | undefined;
            InitialValuation?: number | undefined;
            CurrentValuation?: number | undefined;
            ValuationDate?: string | undefined;
            Network?: Network | undefined;
            Status?: string | undefined;
        } | undefined;
        Description?: {
            Name?: string | undefined;
            Description?: string | undefined;
            Logo?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            AssetID?: string | undefined;
            URL?: string | undefined;
            Country?: string[] | undefined;
            Documents?: string[] | undefined;
            Images?: string[] | undefined;
            Vertical?: string | undefined;
            CreatedAt?: string | undefined;
            UpdatedAt?: string | undefined;
        } | undefined;
        ExternalResources?: {
            Links?: {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[] | undefined;
            Socials?: {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[] | undefined;
        } | undefined;
    } & {
        ID?: string | undefined;
        OrganizationID?: string | undefined;
        Status?: AssetStatus | undefined;
        Reason?: Reason | undefined;
        Type?: AssetType | undefined;
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
            } & { [K_28 in Exclude<keyof I_1["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
            Subunit?: string | undefined;
            Issuer?: string | undefined;
            Precision?: number | undefined;
            Description?: string | undefined;
        } & { [K_29 in Exclude<keyof I_1["Denom"], keyof Denom>]: never; }) | undefined;
        IsIssuedInSmartContract?: boolean | undefined;
        SmartContractIssuerAddr?: string | undefined;
        RealEstateDetails?: ({
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: number[] | undefined;
        } & {
            Address?: string | undefined;
            Bathrooms?: number | undefined;
            Bedrooms?: number | undefined;
            Latitude?: number | undefined;
            Longitude?: number | undefined;
            OwnershipType?: string | undefined;
            PropertyType?: string | undefined;
            RiskRating?: string | undefined;
            SquareFootage?: number | undefined;
            TenancyStatus?: string | undefined;
            YearBuilt?: number | undefined;
            YieldPercent?: (number[] & number[] & { [K_30 in Exclude<keyof I_1["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I_1["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
        StableCoinDetails?: ({
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & {
            Version?: string | undefined;
            PegType?: string | undefined;
            PegRatio?: number | undefined;
            BackingAsset?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & { [K_32 in Exclude<keyof I_1["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
        CommodityDetails?: ({
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & {
            Category?: string | undefined;
            Quality?: string | undefined;
            UnitOfMeasure?: string | undefined;
            Quantity?: number | undefined;
            OriginCountry?: string | undefined;
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            StorageLocation?: string | undefined;
            ContractType?: string | undefined;
            DeliveryDate?: string | undefined;
        } & { [K_33 in Exclude<keyof I_1["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
        CollectibleDetails?: ({
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: string[] | undefined;
            CurrentOwner?: string | undefined;
        } & {
            Category?: string | undefined;
            CollectionName?: string | undefined;
            TokenStandard?: string | undefined;
            TokenID?: string | undefined;
            MetadataURI?: string | undefined;
            Creator?: string | undefined;
            OwnershipHistory?: (string[] & string[] & { [K_34 in Exclude<keyof I_1["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
            CurrentOwner?: string | undefined;
        } & { [K_35 in Exclude<keyof I_1["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
        VehicleDetails?: ({
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & {
            Category?: string | undefined;
            Manufacturer?: string | undefined;
            Model?: string | undefined;
            SerialNumber?: string | undefined;
            Year?: number | undefined;
            Specifications?: string | undefined;
            FuelType?: string | undefined;
            UsageHours?: number | undefined;
            Mileage?: number | undefined;
            Condition?: string | undefined;
            CurrentOwner?: string | undefined;
            Location?: string | undefined;
        } & { [K_36 in Exclude<keyof I_1["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
        IntellectualPropertyDetails?: ({
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: string[] | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & {
            Category?: string | undefined;
            Owner?: string | undefined;
            RegistrationNumber?: string | undefined;
            FilingDate?: string | undefined;
            ExpirationDate?: string | undefined;
            IPJurisdictionIDs?: (string[] & string[] & { [K_37 in Exclude<keyof I_1["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            LicenseType?: string | undefined;
            LicenseTerms?: string | undefined;
            Value?: number | undefined;
        } & { [K_38 in Exclude<keyof I_1["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
        InvestmentFundDetails?: ({
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: string[] | undefined;
        } & {
            FundType?: string | undefined;
            Exchange?: string | undefined;
            ISIN?: string | undefined;
            NAV?: number | undefined;
            InceptionDate?: string | undefined;
            Manager?: string | undefined;
            ExpenseRatio?: number | undefined;
            Holdings?: (string[] & string[] & { [K_39 in Exclude<keyof I_1["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
        } & { [K_40 in Exclude<keyof I_1["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
        EquityDetails?: ({
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & {
            ExchangeTickerSymbol?: string | undefined;
            Exchange?: string | undefined;
            MinTransactionAmount?: number | undefined;
            TradingMarginPercentage?: number | undefined;
            AssetMarginPercentage?: number | undefined;
        } & { [K_41 in Exclude<keyof I_1["EquityDetails"], keyof Equity>]: never; }) | undefined;
        FinancialProperties?: ({
            Symbol?: string | undefined;
            Issuer?: string | undefined;
            JurisdictionIDs?: string[] | undefined;
            JurisdictionRestrictions?: string | undefined;
            RedemptionTerms?: string | undefined;
            ComplianceRequired?: boolean | undefined;
            Type?: string | undefined;
            TradeAllowances?: string[] | undefined;
            Transferable?: boolean | undefined;
            Platform?: string | undefined;
            PlatformType?: string | undefined;
            ContractAddress?: string | undefined;
            Fractional?: boolean | undefined;
            TotalSupply?: number | undefined;
            Subunit?: string | undefined;
            Price?: number | undefined;
            DecimalPlacesPrice?: number | undefined;
            Currency?: string | undefined;
            InitialValuation?: number | undefined;
            CurrentValuation?: number | undefined;
            ValuationDate?: string | undefined;
            Network?: Network | undefined;
            Status?: string | undefined;
        } & {
            Symbol?: string | undefined;
            Issuer?: string | undefined;
            JurisdictionIDs?: (string[] & string[] & { [K_42 in Exclude<keyof I_1["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
            JurisdictionRestrictions?: string | undefined;
            RedemptionTerms?: string | undefined;
            ComplianceRequired?: boolean | undefined;
            Type?: string | undefined;
            TradeAllowances?: (string[] & string[] & { [K_43 in Exclude<keyof I_1["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
            Transferable?: boolean | undefined;
            Platform?: string | undefined;
            PlatformType?: string | undefined;
            ContractAddress?: string | undefined;
            Fractional?: boolean | undefined;
            TotalSupply?: number | undefined;
            Subunit?: string | undefined;
            Price?: number | undefined;
            DecimalPlacesPrice?: number | undefined;
            Currency?: string | undefined;
            InitialValuation?: number | undefined;
            CurrentValuation?: number | undefined;
            ValuationDate?: string | undefined;
            Network?: Network | undefined;
            Status?: string | undefined;
        } & { [K_44 in Exclude<keyof I_1["FinancialProperties"], keyof FinancialProperties>]: never; }) | undefined;
        Description?: ({
            Name?: string | undefined;
            Description?: string | undefined;
            Logo?: {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } | undefined;
            AssetID?: string | undefined;
            URL?: string | undefined;
            Country?: string[] | undefined;
            Documents?: string[] | undefined;
            Images?: string[] | undefined;
            Vertical?: string | undefined;
            CreatedAt?: string | undefined;
            UpdatedAt?: string | undefined;
        } & {
            Name?: string | undefined;
            Description?: string | undefined;
            Logo?: ({
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & {
                Reference?: string | undefined;
                Extension?: string | undefined;
                Name?: string | undefined;
            } & { [K_45 in Exclude<keyof I_1["Description"]["Logo"], keyof LogoFile>]: never; }) | undefined;
            AssetID?: string | undefined;
            URL?: string | undefined;
            Country?: (string[] & string[] & { [K_46 in Exclude<keyof I_1["Description"]["Country"], keyof string[]>]: never; }) | undefined;
            Documents?: (string[] & string[] & { [K_47 in Exclude<keyof I_1["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
            Images?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["Description"]["Images"], keyof string[]>]: never; }) | undefined;
            Vertical?: string | undefined;
            CreatedAt?: string | undefined;
            UpdatedAt?: string | undefined;
        } & { [K_49 in Exclude<keyof I_1["Description"], keyof Description>]: never; }) | undefined;
        ExternalResources?: ({
            Links?: {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[] | undefined;
            Socials?: {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[] | undefined;
        } & {
            Links?: ({
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[] & ({
                Type?: LinkType | undefined;
                URL?: string | undefined;
            } & {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            } & { [K_50 in Exclude<keyof I_1["ExternalResources"]["Links"][number], keyof Link>]: never; })[] & { [K_51 in Exclude<keyof I_1["ExternalResources"]["Links"], keyof {
                Type?: LinkType | undefined;
                URL?: string | undefined;
            }[]>]: never; }) | undefined;
            Socials?: ({
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[] & ({
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            } & {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            } & { [K_52 in Exclude<keyof I_1["ExternalResources"]["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_53 in Exclude<keyof I_1["ExternalResources"]["Socials"], keyof {
                Type?: SocialMediaType | undefined;
                URL?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_54 in Exclude<keyof I_1["ExternalResources"], keyof ExternalResources>]: never; }) | undefined;
    } & { [K_55 in Exclude<keyof I_1, keyof AssetDetails>]: never; }>(object: I_1): AssetDetails;
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
            Type?: AssetType | undefined;
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
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
            EquityDetails?: {
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            FinancialProperties?: {
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: string[] | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: string[] | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } | undefined;
            Description?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: string[] | undefined;
                Documents?: string[] | undefined;
                Images?: string[] | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } | undefined;
            ExternalResources?: {
                Links?: {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
                Socials?: {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
        IssuerDetails?: {
            Name?: string | undefined;
            Description?: string | undefined;
            Image?: string | undefined;
            ExternalUrl?: string | undefined;
            AddressLine1?: string | undefined;
            AddressLine2?: string | undefined;
            City?: string | undefined;
            Region?: string | undefined;
            PostalCode?: string | undefined;
            Country?: string | undefined;
            YearFounded?: number | undefined;
            Licensed?: boolean | undefined;
            LicenseCountry?: string | undefined;
            LicenseNumber?: string | undefined;
            Phone?: string | undefined;
            Email?: string | undefined;
            SocialMediaLinks?: string[] | undefined;
            KeyClients?: string | undefined;
            Press?: string | undefined;
        } | undefined;
    } & {
        AssetDetails?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Type?: AssetType | undefined;
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
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
            EquityDetails?: {
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            FinancialProperties?: {
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: string[] | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: string[] | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } | undefined;
            Description?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: string[] | undefined;
                Documents?: string[] | undefined;
                Images?: string[] | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } | undefined;
            ExternalResources?: {
                Links?: {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
                Socials?: {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Type?: AssetType | undefined;
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
                } & { [K in Exclude<keyof I["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_1 in Exclude<keyof I["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: ({
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } & {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
            } & { [K_3 in Exclude<keyof I["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
            StableCoinDetails?: ({
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & { [K_4 in Exclude<keyof I["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
            CommodityDetails?: ({
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & { [K_5 in Exclude<keyof I["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
            CollectibleDetails?: ({
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } & {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: (string[] & string[] & { [K_6 in Exclude<keyof I["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                CurrentOwner?: string | undefined;
            } & { [K_7 in Exclude<keyof I["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
            VehicleDetails?: ({
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & { [K_8 in Exclude<keyof I["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
            IntellectualPropertyDetails?: ({
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: (string[] & string[] & { [K_9 in Exclude<keyof I["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & { [K_10 in Exclude<keyof I["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
            InvestmentFundDetails?: ({
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } & {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: (string[] & string[] & { [K_11 in Exclude<keyof I["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
            } & { [K_12 in Exclude<keyof I["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
            EquityDetails?: ({
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & {
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & { [K_13 in Exclude<keyof I["AssetDetails"]["EquityDetails"], keyof Equity>]: never; }) | undefined;
            FinancialProperties?: ({
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: string[] | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: string[] | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K_14 in Exclude<keyof I["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: (string[] & string[] & { [K_15 in Exclude<keyof I["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } & { [K_16 in Exclude<keyof I["AssetDetails"]["FinancialProperties"], keyof FinancialProperties>]: never; }) | undefined;
            Description?: ({
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: string[] | undefined;
                Documents?: string[] | undefined;
                Images?: string[] | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } & {
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: ({
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & { [K_17 in Exclude<keyof I["AssetDetails"]["Description"]["Logo"], keyof LogoFile>]: never; }) | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: (string[] & string[] & { [K_18 in Exclude<keyof I["AssetDetails"]["Description"]["Country"], keyof string[]>]: never; }) | undefined;
                Documents?: (string[] & string[] & { [K_19 in Exclude<keyof I["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                Images?: (string[] & string[] & { [K_20 in Exclude<keyof I["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } & { [K_21 in Exclude<keyof I["AssetDetails"]["Description"], keyof Description>]: never; }) | undefined;
            ExternalResources?: ({
                Links?: {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
                Socials?: {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
            } & {
                Links?: ({
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] & ({
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                } & {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                } & { [K_22 in Exclude<keyof I["AssetDetails"]["ExternalResources"]["Links"][number], keyof Link>]: never; })[] & { [K_23 in Exclude<keyof I["AssetDetails"]["ExternalResources"]["Links"], keyof {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[]>]: never; }) | undefined;
                Socials?: ({
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] & ({
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                } & {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                } & { [K_24 in Exclude<keyof I["AssetDetails"]["ExternalResources"]["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_25 in Exclude<keyof I["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_26 in Exclude<keyof I["AssetDetails"]["ExternalResources"], keyof ExternalResources>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_28 in Exclude<keyof I["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_29 in Exclude<keyof I["Audit"], keyof Audit>]: never; }) | undefined;
        IssuerDetails?: ({
            Name?: string | undefined;
            Description?: string | undefined;
            Image?: string | undefined;
            ExternalUrl?: string | undefined;
            AddressLine1?: string | undefined;
            AddressLine2?: string | undefined;
            City?: string | undefined;
            Region?: string | undefined;
            PostalCode?: string | undefined;
            Country?: string | undefined;
            YearFounded?: number | undefined;
            Licensed?: boolean | undefined;
            LicenseCountry?: string | undefined;
            LicenseNumber?: string | undefined;
            Phone?: string | undefined;
            Email?: string | undefined;
            SocialMediaLinks?: string[] | undefined;
            KeyClients?: string | undefined;
            Press?: string | undefined;
        } & {
            Name?: string | undefined;
            Description?: string | undefined;
            Image?: string | undefined;
            ExternalUrl?: string | undefined;
            AddressLine1?: string | undefined;
            AddressLine2?: string | undefined;
            City?: string | undefined;
            Region?: string | undefined;
            PostalCode?: string | undefined;
            Country?: string | undefined;
            YearFounded?: number | undefined;
            Licensed?: boolean | undefined;
            LicenseCountry?: string | undefined;
            LicenseNumber?: string | undefined;
            Phone?: string | undefined;
            Email?: string | undefined;
            SocialMediaLinks?: (string[] & string[] & { [K_30 in Exclude<keyof I["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
            KeyClients?: string | undefined;
            Press?: string | undefined;
        } & { [K_31 in Exclude<keyof I["IssuerDetails"], keyof IssuerDetails>]: never; }) | undefined;
    } & { [K_32 in Exclude<keyof I, keyof Asset>]: never; }>(base?: I | undefined): Asset;
    fromPartial<I_1 extends {
        AssetDetails?: {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Type?: AssetType | undefined;
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
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
            EquityDetails?: {
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            FinancialProperties?: {
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: string[] | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: string[] | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } | undefined;
            Description?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: string[] | undefined;
                Documents?: string[] | undefined;
                Images?: string[] | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } | undefined;
            ExternalResources?: {
                Links?: {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
                Socials?: {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
            } | undefined;
        } | undefined;
        MetaData?: {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } | undefined;
        Audit?: {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } | undefined;
        IssuerDetails?: {
            Name?: string | undefined;
            Description?: string | undefined;
            Image?: string | undefined;
            ExternalUrl?: string | undefined;
            AddressLine1?: string | undefined;
            AddressLine2?: string | undefined;
            City?: string | undefined;
            Region?: string | undefined;
            PostalCode?: string | undefined;
            Country?: string | undefined;
            YearFounded?: number | undefined;
            Licensed?: boolean | undefined;
            LicenseCountry?: string | undefined;
            LicenseNumber?: string | undefined;
            Phone?: string | undefined;
            Email?: string | undefined;
            SocialMediaLinks?: string[] | undefined;
            KeyClients?: string | undefined;
            Press?: string | undefined;
        } | undefined;
    } & {
        AssetDetails?: ({
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Type?: AssetType | undefined;
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
            RealEstateDetails?: {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } | undefined;
            StableCoinDetails?: {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            CommodityDetails?: {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } | undefined;
            CollectibleDetails?: {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } | undefined;
            VehicleDetails?: {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } | undefined;
            IntellectualPropertyDetails?: {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } | undefined;
            InvestmentFundDetails?: {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } | undefined;
            EquityDetails?: {
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } | undefined;
            FinancialProperties?: {
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: string[] | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: string[] | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } | undefined;
            Description?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: string[] | undefined;
                Documents?: string[] | undefined;
                Images?: string[] | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } | undefined;
            ExternalResources?: {
                Links?: {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
                Socials?: {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
            } | undefined;
        } & {
            ID?: string | undefined;
            OrganizationID?: string | undefined;
            Status?: AssetStatus | undefined;
            Reason?: Reason | undefined;
            Type?: AssetType | undefined;
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
                } & { [K_33 in Exclude<keyof I_1["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                Subunit?: string | undefined;
                Issuer?: string | undefined;
                Precision?: number | undefined;
                Description?: string | undefined;
            } & { [K_34 in Exclude<keyof I_1["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
            IsIssuedInSmartContract?: boolean | undefined;
            SmartContractIssuerAddr?: string | undefined;
            RealEstateDetails?: ({
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: number[] | undefined;
            } & {
                Address?: string | undefined;
                Bathrooms?: number | undefined;
                Bedrooms?: number | undefined;
                Latitude?: number | undefined;
                Longitude?: number | undefined;
                OwnershipType?: string | undefined;
                PropertyType?: string | undefined;
                RiskRating?: string | undefined;
                SquareFootage?: number | undefined;
                TenancyStatus?: string | undefined;
                YearBuilt?: number | undefined;
                YieldPercent?: (number[] & number[] & { [K_35 in Exclude<keyof I_1["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I_1["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
            StableCoinDetails?: ({
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & {
                Version?: string | undefined;
                PegType?: string | undefined;
                PegRatio?: number | undefined;
                BackingAsset?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & { [K_37 in Exclude<keyof I_1["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
            CommodityDetails?: ({
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & {
                Category?: string | undefined;
                Quality?: string | undefined;
                UnitOfMeasure?: string | undefined;
                Quantity?: number | undefined;
                OriginCountry?: string | undefined;
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                StorageLocation?: string | undefined;
                ContractType?: string | undefined;
                DeliveryDate?: string | undefined;
            } & { [K_38 in Exclude<keyof I_1["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
            CollectibleDetails?: ({
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: string[] | undefined;
                CurrentOwner?: string | undefined;
            } & {
                Category?: string | undefined;
                CollectionName?: string | undefined;
                TokenStandard?: string | undefined;
                TokenID?: string | undefined;
                MetadataURI?: string | undefined;
                Creator?: string | undefined;
                OwnershipHistory?: (string[] & string[] & { [K_39 in Exclude<keyof I_1["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                CurrentOwner?: string | undefined;
            } & { [K_40 in Exclude<keyof I_1["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
            VehicleDetails?: ({
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & {
                Category?: string | undefined;
                Manufacturer?: string | undefined;
                Model?: string | undefined;
                SerialNumber?: string | undefined;
                Year?: number | undefined;
                Specifications?: string | undefined;
                FuelType?: string | undefined;
                UsageHours?: number | undefined;
                Mileage?: number | undefined;
                Condition?: string | undefined;
                CurrentOwner?: string | undefined;
                Location?: string | undefined;
            } & { [K_41 in Exclude<keyof I_1["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
            IntellectualPropertyDetails?: ({
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: string[] | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & {
                Category?: string | undefined;
                Owner?: string | undefined;
                RegistrationNumber?: string | undefined;
                FilingDate?: string | undefined;
                ExpirationDate?: string | undefined;
                IPJurisdictionIDs?: (string[] & string[] & { [K_42 in Exclude<keyof I_1["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                LicenseType?: string | undefined;
                LicenseTerms?: string | undefined;
                Value?: number | undefined;
            } & { [K_43 in Exclude<keyof I_1["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
            InvestmentFundDetails?: ({
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: string[] | undefined;
            } & {
                FundType?: string | undefined;
                Exchange?: string | undefined;
                ISIN?: string | undefined;
                NAV?: number | undefined;
                InceptionDate?: string | undefined;
                Manager?: string | undefined;
                ExpenseRatio?: number | undefined;
                Holdings?: (string[] & string[] & { [K_44 in Exclude<keyof I_1["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I_1["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
            EquityDetails?: ({
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & {
                ExchangeTickerSymbol?: string | undefined;
                Exchange?: string | undefined;
                MinTransactionAmount?: number | undefined;
                TradingMarginPercentage?: number | undefined;
                AssetMarginPercentage?: number | undefined;
            } & { [K_46 in Exclude<keyof I_1["AssetDetails"]["EquityDetails"], keyof Equity>]: never; }) | undefined;
            FinancialProperties?: ({
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: string[] | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: string[] | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } & {
                Symbol?: string | undefined;
                Issuer?: string | undefined;
                JurisdictionIDs?: (string[] & string[] & { [K_47 in Exclude<keyof I_1["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                JurisdictionRestrictions?: string | undefined;
                RedemptionTerms?: string | undefined;
                ComplianceRequired?: boolean | undefined;
                Type?: string | undefined;
                TradeAllowances?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                Transferable?: boolean | undefined;
                Platform?: string | undefined;
                PlatformType?: string | undefined;
                ContractAddress?: string | undefined;
                Fractional?: boolean | undefined;
                TotalSupply?: number | undefined;
                Subunit?: string | undefined;
                Price?: number | undefined;
                DecimalPlacesPrice?: number | undefined;
                Currency?: string | undefined;
                InitialValuation?: number | undefined;
                CurrentValuation?: number | undefined;
                ValuationDate?: string | undefined;
                Network?: Network | undefined;
                Status?: string | undefined;
            } & { [K_49 in Exclude<keyof I_1["AssetDetails"]["FinancialProperties"], keyof FinancialProperties>]: never; }) | undefined;
            Description?: ({
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: string[] | undefined;
                Documents?: string[] | undefined;
                Images?: string[] | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } & {
                Name?: string | undefined;
                Description?: string | undefined;
                Logo?: ({
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & {
                    Reference?: string | undefined;
                    Extension?: string | undefined;
                    Name?: string | undefined;
                } & { [K_50 in Exclude<keyof I_1["AssetDetails"]["Description"]["Logo"], keyof LogoFile>]: never; }) | undefined;
                AssetID?: string | undefined;
                URL?: string | undefined;
                Country?: (string[] & string[] & { [K_51 in Exclude<keyof I_1["AssetDetails"]["Description"]["Country"], keyof string[]>]: never; }) | undefined;
                Documents?: (string[] & string[] & { [K_52 in Exclude<keyof I_1["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                Images?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                Vertical?: string | undefined;
                CreatedAt?: string | undefined;
                UpdatedAt?: string | undefined;
            } & { [K_54 in Exclude<keyof I_1["AssetDetails"]["Description"], keyof Description>]: never; }) | undefined;
            ExternalResources?: ({
                Links?: {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
                Socials?: {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] | undefined;
            } & {
                Links?: ({
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[] & ({
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                } & {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                } & { [K_55 in Exclude<keyof I_1["AssetDetails"]["ExternalResources"]["Links"][number], keyof Link>]: never; })[] & { [K_56 in Exclude<keyof I_1["AssetDetails"]["ExternalResources"]["Links"], keyof {
                    Type?: LinkType | undefined;
                    URL?: string | undefined;
                }[]>]: never; }) | undefined;
                Socials?: ({
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[] & ({
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                } & {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                } & { [K_57 in Exclude<keyof I_1["AssetDetails"]["ExternalResources"]["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_58 in Exclude<keyof I_1["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                    Type?: SocialMediaType | undefined;
                    URL?: string | undefined;
                }[]>]: never; }) | undefined;
            } & { [K_59 in Exclude<keyof I_1["AssetDetails"]["ExternalResources"], keyof ExternalResources>]: never; }) | undefined;
        } & { [K_60 in Exclude<keyof I_1["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
        MetaData?: ({
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & { [K_61 in Exclude<keyof I_1["MetaData"], keyof MetaData>]: never; }) | undefined;
        Audit?: ({
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & {
            ChangedBy?: string | undefined;
            ChangedAt?: Date | undefined;
            Reason?: string | undefined;
        } & { [K_62 in Exclude<keyof I_1["Audit"], keyof Audit>]: never; }) | undefined;
        IssuerDetails?: ({
            Name?: string | undefined;
            Description?: string | undefined;
            Image?: string | undefined;
            ExternalUrl?: string | undefined;
            AddressLine1?: string | undefined;
            AddressLine2?: string | undefined;
            City?: string | undefined;
            Region?: string | undefined;
            PostalCode?: string | undefined;
            Country?: string | undefined;
            YearFounded?: number | undefined;
            Licensed?: boolean | undefined;
            LicenseCountry?: string | undefined;
            LicenseNumber?: string | undefined;
            Phone?: string | undefined;
            Email?: string | undefined;
            SocialMediaLinks?: string[] | undefined;
            KeyClients?: string | undefined;
            Press?: string | undefined;
        } & {
            Name?: string | undefined;
            Description?: string | undefined;
            Image?: string | undefined;
            ExternalUrl?: string | undefined;
            AddressLine1?: string | undefined;
            AddressLine2?: string | undefined;
            City?: string | undefined;
            Region?: string | undefined;
            PostalCode?: string | undefined;
            Country?: string | undefined;
            YearFounded?: number | undefined;
            Licensed?: boolean | undefined;
            LicenseCountry?: string | undefined;
            LicenseNumber?: string | undefined;
            Phone?: string | undefined;
            Email?: string | undefined;
            SocialMediaLinks?: (string[] & string[] & { [K_63 in Exclude<keyof I_1["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
            KeyClients?: string | undefined;
            Press?: string | undefined;
        } & { [K_64 in Exclude<keyof I_1["IssuerDetails"], keyof IssuerDetails>]: never; }) | undefined;
    } & { [K_65 in Exclude<keyof I_1, keyof Asset>]: never; }>(object: I_1): Asset;
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
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                    } & { [K in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_1 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: ({
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } & {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                } & { [K_3 in Exclude<keyof I["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
                StableCoinDetails?: ({
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_4 in Exclude<keyof I["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
                CommodityDetails?: ({
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & { [K_5 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
                CollectibleDetails?: ({
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } & {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: (string[] & string[] & { [K_6 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                    CurrentOwner?: string | undefined;
                } & { [K_7 in Exclude<keyof I["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
                VehicleDetails?: ({
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & { [K_8 in Exclude<keyof I["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
                IntellectualPropertyDetails?: ({
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: (string[] & string[] & { [K_9 in Exclude<keyof I["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & { [K_10 in Exclude<keyof I["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
                InvestmentFundDetails?: ({
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } & {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: (string[] & string[] & { [K_11 in Exclude<keyof I["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                } & { [K_12 in Exclude<keyof I["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
                EquityDetails?: ({
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_13 in Exclude<keyof I["Assets"][number]["AssetDetails"]["EquityDetails"], keyof Equity>]: never; }) | undefined;
                FinancialProperties?: ({
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: (string[] & string[] & { [K_14 in Exclude<keyof I["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: (string[] & string[] & { [K_15 in Exclude<keyof I["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & { [K_16 in Exclude<keyof I["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof FinancialProperties>]: never; }) | undefined;
                Description?: ({
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: ({
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & { [K_17 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof LogoFile>]: never; }) | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: (string[] & string[] & { [K_18 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Country"], keyof string[]>]: never; }) | undefined;
                    Documents?: (string[] & string[] & { [K_19 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                    Images?: (string[] & string[] & { [K_20 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & { [K_21 in Exclude<keyof I["Assets"][number]["AssetDetails"]["Description"], keyof Description>]: never; }) | undefined;
                ExternalResources?: ({
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } & {
                    Links?: ({
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    } & { [K_22 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof Link>]: never; })[] & { [K_23 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                    Socials?: ({
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & { [K_24 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_25 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_26 in Exclude<keyof I["Assets"][number]["AssetDetails"]["ExternalResources"], keyof ExternalResources>]: never; }) | undefined;
            } & { [K_27 in Exclude<keyof I["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_28 in Exclude<keyof I["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_29 in Exclude<keyof I["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
            IssuerDetails?: ({
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: (string[] & string[] & { [K_30 in Exclude<keyof I["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & { [K_31 in Exclude<keyof I["Assets"][number]["IssuerDetails"], keyof IssuerDetails>]: never; }) | undefined;
        } & { [K_32 in Exclude<keyof I["Assets"][number], keyof Asset>]: never; })[] & { [K_33 in Exclude<keyof I["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_34 in Exclude<keyof I, keyof Assets>]: never; }>(base?: I | undefined): Assets;
    fromPartial<I_1 extends {
        Assets?: {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] | undefined;
        Offset?: number | undefined;
    } & {
        Assets?: ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[] & ({
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        } & {
            AssetDetails?: ({
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } & {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                    } & { [K_35 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"]["Currency"], keyof import("./domain/currency/currency").Currency>]: never; }) | undefined;
                    Subunit?: string | undefined;
                    Issuer?: string | undefined;
                    Precision?: number | undefined;
                    Description?: string | undefined;
                } & { [K_36 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Denom"], keyof Denom>]: never; }) | undefined;
                IsIssuedInSmartContract?: boolean | undefined;
                SmartContractIssuerAddr?: string | undefined;
                RealEstateDetails?: ({
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } & {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: (number[] & number[] & { [K_37 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["RealEstateDetails"]["YieldPercent"], keyof number[]>]: never; }) | undefined;
                } & { [K_38 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["RealEstateDetails"], keyof RealEstate>]: never; }) | undefined;
                StableCoinDetails?: ({
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_39 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["StableCoinDetails"], keyof StableCoin>]: never; }) | undefined;
                CommodityDetails?: ({
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } & { [K_40 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CommodityDetails"], keyof Commodity>]: never; }) | undefined;
                CollectibleDetails?: ({
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } & {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: (string[] & string[] & { [K_41 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CollectibleDetails"]["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
                    CurrentOwner?: string | undefined;
                } & { [K_42 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["CollectibleDetails"], keyof Collectible>]: never; }) | undefined;
                VehicleDetails?: ({
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } & { [K_43 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["VehicleDetails"], keyof Vehicle>]: never; }) | undefined;
                IntellectualPropertyDetails?: ({
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: (string[] & string[] & { [K_44 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"]["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } & { [K_45 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["IntellectualPropertyDetails"], keyof IntellectualProperty>]: never; }) | undefined;
                InvestmentFundDetails?: ({
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } & {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: (string[] & string[] & { [K_46 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["InvestmentFundDetails"]["Holdings"], keyof string[]>]: never; }) | undefined;
                } & { [K_47 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["InvestmentFundDetails"], keyof InvestmentFund>]: never; }) | undefined;
                EquityDetails?: ({
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } & { [K_48 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["EquityDetails"], keyof Equity>]: never; }) | undefined;
                FinancialProperties?: ({
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["FinancialProperties"]["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["FinancialProperties"]["TradeAllowances"], keyof string[]>]: never; }) | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } & { [K_51 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["FinancialProperties"], keyof FinancialProperties>]: never; }) | undefined;
                Description?: ({
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: ({
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } & { [K_52 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Logo"], keyof LogoFile>]: never; }) | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Country"], keyof string[]>]: never; }) | undefined;
                    Documents?: (string[] & string[] & { [K_54 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Documents"], keyof string[]>]: never; }) | undefined;
                    Images?: (string[] & string[] & { [K_55 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"]["Images"], keyof string[]>]: never; }) | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } & { [K_56 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["Description"], keyof Description>]: never; }) | undefined;
                ExternalResources?: ({
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } & {
                    Links?: ({
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    } & { [K_57 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"][number], keyof Link>]: never; })[] & { [K_58 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Links"], keyof {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                    Socials?: ({
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] & ({
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    } & { [K_59 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_60 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"]["Socials"], keyof {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[]>]: never; }) | undefined;
                } & { [K_61 in Exclude<keyof I_1["Assets"][number]["AssetDetails"]["ExternalResources"], keyof ExternalResources>]: never; }) | undefined;
            } & { [K_62 in Exclude<keyof I_1["Assets"][number]["AssetDetails"], keyof AssetDetails>]: never; }) | undefined;
            MetaData?: ({
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & { [K_63 in Exclude<keyof I_1["Assets"][number]["MetaData"], keyof MetaData>]: never; }) | undefined;
            Audit?: ({
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } & { [K_64 in Exclude<keyof I_1["Assets"][number]["Audit"], keyof Audit>]: never; }) | undefined;
            IssuerDetails?: ({
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: (string[] & string[] & { [K_65 in Exclude<keyof I_1["Assets"][number]["IssuerDetails"]["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } & { [K_66 in Exclude<keyof I_1["Assets"][number]["IssuerDetails"], keyof IssuerDetails>]: never; }) | undefined;
        } & { [K_67 in Exclude<keyof I_1["Assets"][number], keyof Asset>]: never; })[] & { [K_68 in Exclude<keyof I_1["Assets"], keyof {
            AssetDetails?: {
                ID?: string | undefined;
                OrganizationID?: string | undefined;
                Status?: AssetStatus | undefined;
                Reason?: Reason | undefined;
                Type?: AssetType | undefined;
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
                RealEstateDetails?: {
                    Address?: string | undefined;
                    Bathrooms?: number | undefined;
                    Bedrooms?: number | undefined;
                    Latitude?: number | undefined;
                    Longitude?: number | undefined;
                    OwnershipType?: string | undefined;
                    PropertyType?: string | undefined;
                    RiskRating?: string | undefined;
                    SquareFootage?: number | undefined;
                    TenancyStatus?: string | undefined;
                    YearBuilt?: number | undefined;
                    YieldPercent?: number[] | undefined;
                } | undefined;
                StableCoinDetails?: {
                    Version?: string | undefined;
                    PegType?: string | undefined;
                    PegRatio?: number | undefined;
                    BackingAsset?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                CommodityDetails?: {
                    Category?: string | undefined;
                    Quality?: string | undefined;
                    UnitOfMeasure?: string | undefined;
                    Quantity?: number | undefined;
                    OriginCountry?: string | undefined;
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    StorageLocation?: string | undefined;
                    ContractType?: string | undefined;
                    DeliveryDate?: string | undefined;
                } | undefined;
                CollectibleDetails?: {
                    Category?: string | undefined;
                    CollectionName?: string | undefined;
                    TokenStandard?: string | undefined;
                    TokenID?: string | undefined;
                    MetadataURI?: string | undefined;
                    Creator?: string | undefined;
                    OwnershipHistory?: string[] | undefined;
                    CurrentOwner?: string | undefined;
                } | undefined;
                VehicleDetails?: {
                    Category?: string | undefined;
                    Manufacturer?: string | undefined;
                    Model?: string | undefined;
                    SerialNumber?: string | undefined;
                    Year?: number | undefined;
                    Specifications?: string | undefined;
                    FuelType?: string | undefined;
                    UsageHours?: number | undefined;
                    Mileage?: number | undefined;
                    Condition?: string | undefined;
                    CurrentOwner?: string | undefined;
                    Location?: string | undefined;
                } | undefined;
                IntellectualPropertyDetails?: {
                    Category?: string | undefined;
                    Owner?: string | undefined;
                    RegistrationNumber?: string | undefined;
                    FilingDate?: string | undefined;
                    ExpirationDate?: string | undefined;
                    IPJurisdictionIDs?: string[] | undefined;
                    LicenseType?: string | undefined;
                    LicenseTerms?: string | undefined;
                    Value?: number | undefined;
                } | undefined;
                InvestmentFundDetails?: {
                    FundType?: string | undefined;
                    Exchange?: string | undefined;
                    ISIN?: string | undefined;
                    NAV?: number | undefined;
                    InceptionDate?: string | undefined;
                    Manager?: string | undefined;
                    ExpenseRatio?: number | undefined;
                    Holdings?: string[] | undefined;
                } | undefined;
                EquityDetails?: {
                    ExchangeTickerSymbol?: string | undefined;
                    Exchange?: string | undefined;
                    MinTransactionAmount?: number | undefined;
                    TradingMarginPercentage?: number | undefined;
                    AssetMarginPercentage?: number | undefined;
                } | undefined;
                FinancialProperties?: {
                    Symbol?: string | undefined;
                    Issuer?: string | undefined;
                    JurisdictionIDs?: string[] | undefined;
                    JurisdictionRestrictions?: string | undefined;
                    RedemptionTerms?: string | undefined;
                    ComplianceRequired?: boolean | undefined;
                    Type?: string | undefined;
                    TradeAllowances?: string[] | undefined;
                    Transferable?: boolean | undefined;
                    Platform?: string | undefined;
                    PlatformType?: string | undefined;
                    ContractAddress?: string | undefined;
                    Fractional?: boolean | undefined;
                    TotalSupply?: number | undefined;
                    Subunit?: string | undefined;
                    Price?: number | undefined;
                    DecimalPlacesPrice?: number | undefined;
                    Currency?: string | undefined;
                    InitialValuation?: number | undefined;
                    CurrentValuation?: number | undefined;
                    ValuationDate?: string | undefined;
                    Network?: Network | undefined;
                    Status?: string | undefined;
                } | undefined;
                Description?: {
                    Name?: string | undefined;
                    Description?: string | undefined;
                    Logo?: {
                        Reference?: string | undefined;
                        Extension?: string | undefined;
                        Name?: string | undefined;
                    } | undefined;
                    AssetID?: string | undefined;
                    URL?: string | undefined;
                    Country?: string[] | undefined;
                    Documents?: string[] | undefined;
                    Images?: string[] | undefined;
                    Vertical?: string | undefined;
                    CreatedAt?: string | undefined;
                    UpdatedAt?: string | undefined;
                } | undefined;
                ExternalResources?: {
                    Links?: {
                        Type?: LinkType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                    Socials?: {
                        Type?: SocialMediaType | undefined;
                        URL?: string | undefined;
                    }[] | undefined;
                } | undefined;
            } | undefined;
            MetaData?: {
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Audit?: {
                ChangedBy?: string | undefined;
                ChangedAt?: Date | undefined;
                Reason?: string | undefined;
            } | undefined;
            IssuerDetails?: {
                Name?: string | undefined;
                Description?: string | undefined;
                Image?: string | undefined;
                ExternalUrl?: string | undefined;
                AddressLine1?: string | undefined;
                AddressLine2?: string | undefined;
                City?: string | undefined;
                Region?: string | undefined;
                PostalCode?: string | undefined;
                Country?: string | undefined;
                YearFounded?: number | undefined;
                Licensed?: boolean | undefined;
                LicenseCountry?: string | undefined;
                LicenseNumber?: string | undefined;
                Phone?: string | undefined;
                Email?: string | undefined;
                SocialMediaLinks?: string[] | undefined;
                KeyClients?: string | undefined;
                Press?: string | undefined;
            } | undefined;
        }[]>]: never; }) | undefined;
        Offset?: number | undefined;
    } & { [K_69 in Exclude<keyof I_1, keyof Assets>]: never; }>(object: I_1): Assets;
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
            Network?: Network | undefined;
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
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
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
            Network?: Network | undefined;
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
            Network?: Network | undefined;
            UpdatedAt?: Date | undefined;
            CreatedAt?: Date | undefined;
            UpdatedByAccount?: string | undefined;
        } & {
            Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
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
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } & {
                Network?: Network | undefined;
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
                Network?: Network | undefined;
                UpdatedAt?: Date | undefined;
                CreatedAt?: Date | undefined;
                UpdatedByAccount?: string | undefined;
            } | undefined;
            Visible?: boolean | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "UserAssetLists">]: never; }>(object: I_1): UserAssetLists;
};
export declare const RealEstate: {
    encode(message: RealEstate, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): RealEstate;
    fromJSON(object: any): RealEstate;
    toJSON(message: RealEstate): unknown;
    create<I extends {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: number[] | undefined;
    } & {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: (number[] & number[] & { [K in Exclude<keyof I["YieldPercent"], keyof number[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof RealEstate>]: never; }>(base?: I | undefined): RealEstate;
    fromPartial<I_1 extends {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: number[] | undefined;
    } & {
        Address?: string | undefined;
        Bathrooms?: number | undefined;
        Bedrooms?: number | undefined;
        Latitude?: number | undefined;
        Longitude?: number | undefined;
        OwnershipType?: string | undefined;
        PropertyType?: string | undefined;
        RiskRating?: string | undefined;
        SquareFootage?: number | undefined;
        TenancyStatus?: string | undefined;
        YearBuilt?: number | undefined;
        YieldPercent?: (number[] & number[] & { [K_2 in Exclude<keyof I_1["YieldPercent"], keyof number[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof RealEstate>]: never; }>(object: I_1): RealEstate;
};
export declare const StableCoin: {
    encode(message: StableCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StableCoin;
    fromJSON(object: any): StableCoin;
    toJSON(message: StableCoin): unknown;
    create<I extends {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & { [K in Exclude<keyof I, keyof StableCoin>]: never; }>(base?: I | undefined): StableCoin;
    fromPartial<I_1 extends {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & {
        Version?: string | undefined;
        PegType?: string | undefined;
        PegRatio?: number | undefined;
        BackingAsset?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StableCoin>]: never; }>(object: I_1): StableCoin;
};
export declare const Commodity: {
    encode(message: Commodity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Commodity;
    fromJSON(object: any): Commodity;
    toJSON(message: Commodity): unknown;
    create<I extends {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Commodity>]: never; }>(base?: I | undefined): Commodity;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & {
        Category?: string | undefined;
        Quality?: string | undefined;
        UnitOfMeasure?: string | undefined;
        Quantity?: number | undefined;
        OriginCountry?: string | undefined;
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        StorageLocation?: string | undefined;
        ContractType?: string | undefined;
        DeliveryDate?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Commodity>]: never; }>(object: I_1): Commodity;
};
export declare const Collectible: {
    encode(message: Collectible, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Collectible;
    fromJSON(object: any): Collectible;
    toJSON(message: Collectible): unknown;
    create<I extends {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: string[] | undefined;
        CurrentOwner?: string | undefined;
    } & {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: (string[] & string[] & { [K in Exclude<keyof I["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
        CurrentOwner?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Collectible>]: never; }>(base?: I | undefined): Collectible;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: string[] | undefined;
        CurrentOwner?: string | undefined;
    } & {
        Category?: string | undefined;
        CollectionName?: string | undefined;
        TokenStandard?: string | undefined;
        TokenID?: string | undefined;
        MetadataURI?: string | undefined;
        Creator?: string | undefined;
        OwnershipHistory?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["OwnershipHistory"], keyof string[]>]: never; }) | undefined;
        CurrentOwner?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Collectible>]: never; }>(object: I_1): Collectible;
};
export declare const Vehicle: {
    encode(message: Vehicle, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Vehicle;
    fromJSON(object: any): Vehicle;
    toJSON(message: Vehicle): unknown;
    create<I extends {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Vehicle>]: never; }>(base?: I | undefined): Vehicle;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & {
        Category?: string | undefined;
        Manufacturer?: string | undefined;
        Model?: string | undefined;
        SerialNumber?: string | undefined;
        Year?: number | undefined;
        Specifications?: string | undefined;
        FuelType?: string | undefined;
        UsageHours?: number | undefined;
        Mileage?: number | undefined;
        Condition?: string | undefined;
        CurrentOwner?: string | undefined;
        Location?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Vehicle>]: never; }>(object: I_1): Vehicle;
};
export declare const IntellectualProperty: {
    encode(message: IntellectualProperty, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntellectualProperty;
    fromJSON(object: any): IntellectualProperty;
    toJSON(message: IntellectualProperty): unknown;
    create<I extends {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: string[] | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & { [K_1 in Exclude<keyof I, keyof IntellectualProperty>]: never; }>(base?: I | undefined): IntellectualProperty;
    fromPartial<I_1 extends {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: string[] | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & {
        Category?: string | undefined;
        Owner?: string | undefined;
        RegistrationNumber?: string | undefined;
        FilingDate?: string | undefined;
        ExpirationDate?: string | undefined;
        IPJurisdictionIDs?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["IPJurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        LicenseType?: string | undefined;
        LicenseTerms?: string | undefined;
        Value?: number | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof IntellectualProperty>]: never; }>(object: I_1): IntellectualProperty;
};
export declare const InvestmentFund: {
    encode(message: InvestmentFund, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): InvestmentFund;
    fromJSON(object: any): InvestmentFund;
    toJSON(message: InvestmentFund): unknown;
    create<I extends {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: string[] | undefined;
    } & {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: (string[] & string[] & { [K in Exclude<keyof I["Holdings"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof InvestmentFund>]: never; }>(base?: I | undefined): InvestmentFund;
    fromPartial<I_1 extends {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: string[] | undefined;
    } & {
        FundType?: string | undefined;
        Exchange?: string | undefined;
        ISIN?: string | undefined;
        NAV?: number | undefined;
        InceptionDate?: string | undefined;
        Manager?: string | undefined;
        ExpenseRatio?: number | undefined;
        Holdings?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["Holdings"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof InvestmentFund>]: never; }>(object: I_1): InvestmentFund;
};
export declare const Equity: {
    encode(message: Equity, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Equity;
    fromJSON(object: any): Equity;
    toJSON(message: Equity): unknown;
    create<I extends {
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & {
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & { [K in Exclude<keyof I, keyof Equity>]: never; }>(base?: I | undefined): Equity;
    fromPartial<I_1 extends {
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & {
        ExchangeTickerSymbol?: string | undefined;
        Exchange?: string | undefined;
        MinTransactionAmount?: number | undefined;
        TradingMarginPercentage?: number | undefined;
        AssetMarginPercentage?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Equity>]: never; }>(object: I_1): Equity;
};
export declare const FinancialProperties: {
    encode(message: FinancialProperties, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FinancialProperties;
    fromJSON(object: any): FinancialProperties;
    toJSON(message: FinancialProperties): unknown;
    create<I extends {
        Symbol?: string | undefined;
        Issuer?: string | undefined;
        JurisdictionIDs?: string[] | undefined;
        JurisdictionRestrictions?: string | undefined;
        RedemptionTerms?: string | undefined;
        ComplianceRequired?: boolean | undefined;
        Type?: string | undefined;
        TradeAllowances?: string[] | undefined;
        Transferable?: boolean | undefined;
        Platform?: string | undefined;
        PlatformType?: string | undefined;
        ContractAddress?: string | undefined;
        Fractional?: boolean | undefined;
        TotalSupply?: number | undefined;
        Subunit?: string | undefined;
        Price?: number | undefined;
        DecimalPlacesPrice?: number | undefined;
        Currency?: string | undefined;
        InitialValuation?: number | undefined;
        CurrentValuation?: number | undefined;
        ValuationDate?: string | undefined;
        Network?: Network | undefined;
        Status?: string | undefined;
    } & {
        Symbol?: string | undefined;
        Issuer?: string | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K in Exclude<keyof I["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        JurisdictionRestrictions?: string | undefined;
        RedemptionTerms?: string | undefined;
        ComplianceRequired?: boolean | undefined;
        Type?: string | undefined;
        TradeAllowances?: (string[] & string[] & { [K_1 in Exclude<keyof I["TradeAllowances"], keyof string[]>]: never; }) | undefined;
        Transferable?: boolean | undefined;
        Platform?: string | undefined;
        PlatformType?: string | undefined;
        ContractAddress?: string | undefined;
        Fractional?: boolean | undefined;
        TotalSupply?: number | undefined;
        Subunit?: string | undefined;
        Price?: number | undefined;
        DecimalPlacesPrice?: number | undefined;
        Currency?: string | undefined;
        InitialValuation?: number | undefined;
        CurrentValuation?: number | undefined;
        ValuationDate?: string | undefined;
        Network?: Network | undefined;
        Status?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof FinancialProperties>]: never; }>(base?: I | undefined): FinancialProperties;
    fromPartial<I_1 extends {
        Symbol?: string | undefined;
        Issuer?: string | undefined;
        JurisdictionIDs?: string[] | undefined;
        JurisdictionRestrictions?: string | undefined;
        RedemptionTerms?: string | undefined;
        ComplianceRequired?: boolean | undefined;
        Type?: string | undefined;
        TradeAllowances?: string[] | undefined;
        Transferable?: boolean | undefined;
        Platform?: string | undefined;
        PlatformType?: string | undefined;
        ContractAddress?: string | undefined;
        Fractional?: boolean | undefined;
        TotalSupply?: number | undefined;
        Subunit?: string | undefined;
        Price?: number | undefined;
        DecimalPlacesPrice?: number | undefined;
        Currency?: string | undefined;
        InitialValuation?: number | undefined;
        CurrentValuation?: number | undefined;
        ValuationDate?: string | undefined;
        Network?: Network | undefined;
        Status?: string | undefined;
    } & {
        Symbol?: string | undefined;
        Issuer?: string | undefined;
        JurisdictionIDs?: (string[] & string[] & { [K_3 in Exclude<keyof I_1["JurisdictionIDs"], keyof string[]>]: never; }) | undefined;
        JurisdictionRestrictions?: string | undefined;
        RedemptionTerms?: string | undefined;
        ComplianceRequired?: boolean | undefined;
        Type?: string | undefined;
        TradeAllowances?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["TradeAllowances"], keyof string[]>]: never; }) | undefined;
        Transferable?: boolean | undefined;
        Platform?: string | undefined;
        PlatformType?: string | undefined;
        ContractAddress?: string | undefined;
        Fractional?: boolean | undefined;
        TotalSupply?: number | undefined;
        Subunit?: string | undefined;
        Price?: number | undefined;
        DecimalPlacesPrice?: number | undefined;
        Currency?: string | undefined;
        InitialValuation?: number | undefined;
        CurrentValuation?: number | undefined;
        ValuationDate?: string | undefined;
        Network?: Network | undefined;
        Status?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof FinancialProperties>]: never; }>(object: I_1): FinancialProperties;
};
export declare const Description: {
    encode(message: Description, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Description;
    fromJSON(object: any): Description;
    toJSON(message: Description): unknown;
    create<I extends {
        Name?: string | undefined;
        Description?: string | undefined;
        Logo?: {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } | undefined;
        AssetID?: string | undefined;
        URL?: string | undefined;
        Country?: string[] | undefined;
        Documents?: string[] | undefined;
        Images?: string[] | undefined;
        Vertical?: string | undefined;
        CreatedAt?: string | undefined;
        UpdatedAt?: string | undefined;
    } & {
        Name?: string | undefined;
        Description?: string | undefined;
        Logo?: ({
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & { [K in Exclude<keyof I["Logo"], keyof LogoFile>]: never; }) | undefined;
        AssetID?: string | undefined;
        URL?: string | undefined;
        Country?: (string[] & string[] & { [K_1 in Exclude<keyof I["Country"], keyof string[]>]: never; }) | undefined;
        Documents?: (string[] & string[] & { [K_2 in Exclude<keyof I["Documents"], keyof string[]>]: never; }) | undefined;
        Images?: (string[] & string[] & { [K_3 in Exclude<keyof I["Images"], keyof string[]>]: never; }) | undefined;
        Vertical?: string | undefined;
        CreatedAt?: string | undefined;
        UpdatedAt?: string | undefined;
    } & { [K_4 in Exclude<keyof I, keyof Description>]: never; }>(base?: I | undefined): Description;
    fromPartial<I_1 extends {
        Name?: string | undefined;
        Description?: string | undefined;
        Logo?: {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } | undefined;
        AssetID?: string | undefined;
        URL?: string | undefined;
        Country?: string[] | undefined;
        Documents?: string[] | undefined;
        Images?: string[] | undefined;
        Vertical?: string | undefined;
        CreatedAt?: string | undefined;
        UpdatedAt?: string | undefined;
    } & {
        Name?: string | undefined;
        Description?: string | undefined;
        Logo?: ({
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & {
            Reference?: string | undefined;
            Extension?: string | undefined;
            Name?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["Logo"], keyof LogoFile>]: never; }) | undefined;
        AssetID?: string | undefined;
        URL?: string | undefined;
        Country?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["Country"], keyof string[]>]: never; }) | undefined;
        Documents?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["Documents"], keyof string[]>]: never; }) | undefined;
        Images?: (string[] & string[] & { [K_8 in Exclude<keyof I_1["Images"], keyof string[]>]: never; }) | undefined;
        Vertical?: string | undefined;
        CreatedAt?: string | undefined;
        UpdatedAt?: string | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof Description>]: never; }>(object: I_1): Description;
};
export declare const ExternalResources: {
    encode(message: ExternalResources, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ExternalResources;
    fromJSON(object: any): ExternalResources;
    toJSON(message: ExternalResources): unknown;
    create<I extends {
        Links?: {
            Type?: LinkType | undefined;
            URL?: string | undefined;
        }[] | undefined;
        Socials?: {
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        }[] | undefined;
    } & {
        Links?: ({
            Type?: LinkType | undefined;
            URL?: string | undefined;
        }[] & ({
            Type?: LinkType | undefined;
            URL?: string | undefined;
        } & {
            Type?: LinkType | undefined;
            URL?: string | undefined;
        } & { [K in Exclude<keyof I["Links"][number], keyof Link>]: never; })[] & { [K_1 in Exclude<keyof I["Links"], keyof {
            Type?: LinkType | undefined;
            URL?: string | undefined;
        }[]>]: never; }) | undefined;
        Socials?: ({
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        }[] & ({
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        } & {
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        } & { [K_2 in Exclude<keyof I["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_3 in Exclude<keyof I["Socials"], keyof {
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ExternalResources>]: never; }>(base?: I | undefined): ExternalResources;
    fromPartial<I_1 extends {
        Links?: {
            Type?: LinkType | undefined;
            URL?: string | undefined;
        }[] | undefined;
        Socials?: {
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        }[] | undefined;
    } & {
        Links?: ({
            Type?: LinkType | undefined;
            URL?: string | undefined;
        }[] & ({
            Type?: LinkType | undefined;
            URL?: string | undefined;
        } & {
            Type?: LinkType | undefined;
            URL?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["Links"][number], keyof Link>]: never; })[] & { [K_6 in Exclude<keyof I_1["Links"], keyof {
            Type?: LinkType | undefined;
            URL?: string | undefined;
        }[]>]: never; }) | undefined;
        Socials?: ({
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        }[] & ({
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        } & {
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        } & { [K_7 in Exclude<keyof I_1["Socials"][number], keyof SocialMedia>]: never; })[] & { [K_8 in Exclude<keyof I_1["Socials"], keyof {
            Type?: SocialMediaType | undefined;
            URL?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof ExternalResources>]: never; }>(object: I_1): ExternalResources;
};
export declare const Link: {
    encode(message: Link, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Link;
    fromJSON(object: any): Link;
    toJSON(message: Link): unknown;
    create<I extends {
        Type?: LinkType | undefined;
        URL?: string | undefined;
    } & {
        Type?: LinkType | undefined;
        URL?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Link>]: never; }>(base?: I | undefined): Link;
    fromPartial<I_1 extends {
        Type?: LinkType | undefined;
        URL?: string | undefined;
    } & {
        Type?: LinkType | undefined;
        URL?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Link>]: never; }>(object: I_1): Link;
};
export declare const SocialMedia: {
    encode(message: SocialMedia, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SocialMedia;
    fromJSON(object: any): SocialMedia;
    toJSON(message: SocialMedia): unknown;
    create<I extends {
        Type?: SocialMediaType | undefined;
        URL?: string | undefined;
    } & {
        Type?: SocialMediaType | undefined;
        URL?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SocialMedia>]: never; }>(base?: I | undefined): SocialMedia;
    fromPartial<I_1 extends {
        Type?: SocialMediaType | undefined;
        URL?: string | undefined;
    } & {
        Type?: SocialMediaType | undefined;
        URL?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SocialMedia>]: never; }>(object: I_1): SocialMedia;
};
export declare const IssuerDetails: {
    encode(message: IssuerDetails, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IssuerDetails;
    fromJSON(object: any): IssuerDetails;
    toJSON(message: IssuerDetails): unknown;
    create<I extends {
        Name?: string | undefined;
        Description?: string | undefined;
        Image?: string | undefined;
        ExternalUrl?: string | undefined;
        AddressLine1?: string | undefined;
        AddressLine2?: string | undefined;
        City?: string | undefined;
        Region?: string | undefined;
        PostalCode?: string | undefined;
        Country?: string | undefined;
        YearFounded?: number | undefined;
        Licensed?: boolean | undefined;
        LicenseCountry?: string | undefined;
        LicenseNumber?: string | undefined;
        Phone?: string | undefined;
        Email?: string | undefined;
        SocialMediaLinks?: string[] | undefined;
        KeyClients?: string | undefined;
        Press?: string | undefined;
    } & {
        Name?: string | undefined;
        Description?: string | undefined;
        Image?: string | undefined;
        ExternalUrl?: string | undefined;
        AddressLine1?: string | undefined;
        AddressLine2?: string | undefined;
        City?: string | undefined;
        Region?: string | undefined;
        PostalCode?: string | undefined;
        Country?: string | undefined;
        YearFounded?: number | undefined;
        Licensed?: boolean | undefined;
        LicenseCountry?: string | undefined;
        LicenseNumber?: string | undefined;
        Phone?: string | undefined;
        Email?: string | undefined;
        SocialMediaLinks?: (string[] & string[] & { [K in Exclude<keyof I["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
        KeyClients?: string | undefined;
        Press?: string | undefined;
    } & { [K_1 in Exclude<keyof I, keyof IssuerDetails>]: never; }>(base?: I | undefined): IssuerDetails;
    fromPartial<I_1 extends {
        Name?: string | undefined;
        Description?: string | undefined;
        Image?: string | undefined;
        ExternalUrl?: string | undefined;
        AddressLine1?: string | undefined;
        AddressLine2?: string | undefined;
        City?: string | undefined;
        Region?: string | undefined;
        PostalCode?: string | undefined;
        Country?: string | undefined;
        YearFounded?: number | undefined;
        Licensed?: boolean | undefined;
        LicenseCountry?: string | undefined;
        LicenseNumber?: string | undefined;
        Phone?: string | undefined;
        Email?: string | undefined;
        SocialMediaLinks?: string[] | undefined;
        KeyClients?: string | undefined;
        Press?: string | undefined;
    } & {
        Name?: string | undefined;
        Description?: string | undefined;
        Image?: string | undefined;
        ExternalUrl?: string | undefined;
        AddressLine1?: string | undefined;
        AddressLine2?: string | undefined;
        City?: string | undefined;
        Region?: string | undefined;
        PostalCode?: string | undefined;
        Country?: string | undefined;
        YearFounded?: number | undefined;
        Licensed?: boolean | undefined;
        LicenseCountry?: string | undefined;
        LicenseNumber?: string | undefined;
        Phone?: string | undefined;
        Email?: string | undefined;
        SocialMediaLinks?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["SocialMediaLinks"], keyof string[]>]: never; }) | undefined;
        KeyClients?: string | undefined;
        Press?: string | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof IssuerDetails>]: never; }>(object: I_1): IssuerDetails;
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
