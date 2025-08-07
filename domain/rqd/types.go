package rqd

// AccountType represents the type of brokerage account
type AccountType string

const (
	Cash              AccountType = "C"  // Cash account
	Margin            AccountType = "M"  // Margin account
	PortfolioMargin   AccountType = "P"  // Portfolio Margin account
	GeneralLedger     AccountType = "G"  // General Ledger account
	DVPRVP            AccountType = "D"  // DVP/RVP account
	CorrespondentFlip AccountType = "F"  // Correspondent Flip account
	HouseFirm         AccountType = "H"  // House/Firm account
	FullyPaidLending  AccountType = "L"  // Fully paid lending account
	FullyPaidOmnibus  AccountType = "LS" // Fully paid lending (omnibus) account
)

type TradeType string

const (
	Buy         TradeType = "B"  // Buy
	BuyToClose  TradeType = "CB" // Buy to close (options only)
	SellToClose TradeType = "CS" // Sell to close (options only)
	BuyToOpen   TradeType = "OB" // Buy to open (options only)
	SellToOpen  TradeType = "OS" // Sell to open (options only)
	Sell        TradeType = "S"  // Sell
	Short       TradeType = "SS" // Sell short
)

type OrderType string

const (
	Open          = "OPEN"
	Filled        = "FILLED"
	Rejected      = "REJECTED"
	Cxld          = "CXLD" // Same as cancelled
	Acknowledged  = "ACKED"
	Sent          = "SENT"
	Expired       = "EXPIRED"
	Cancelled     = "CANCELLED"
	PartialFilled = "PARTIALLY_FILLED"
)

const (
	Market OrderType = "MARKET" // Market order - fill immediately at best available price
	Limit  OrderType = "LIMIT"  // Limit order - fill only at limit price or better
)

type TimeInForce string

const (
	Day TimeInForce = "DAY" // Day order - active until end of trading day
	GTC TimeInForce = "GTC" // Good Till Canceled - active until manually cancelled
)

type Destination string

const (
	EquitySimulator Destination = "EQ_SIM"    // Equity simulator (UAT environment only)
	RQDRoute        Destination = "RQDROUTE"  // RQD primary routing rules (production)
	RQDRoute2       Destination = "RQDROUTE2" // RQD alternate routing rules
	Manual          Destination = "MANUAL"    // Manual staging for trade desk handling
)

type ResponseStatus string

const (
	OK           ResponseStatus = "OK"           // Successful response
	FAILED       ResponseStatus = "FAILED"       // Failed response
	UNAUTHORIZED ResponseStatus = "UNAUTHORIZED" // Unauthorized access
)

// Common response fields used across RQD API endpoints
type BaseResponse struct {
	RequestID       string `json:"requestID"`
	ResponseStatus  string `json:"responseStatus,omitempty"`
	ResponseMessage string `json:"responseMessage,omitempty"`
	ErrorStatus     string `json:"errorStatus,omitempty"`
	ErrorMessage    string `json:"errorMessage,omitempty"`
}

// AddAccountRequest represents the request structure for creating a new account
type AddAccountRequest struct {
	// Required fields
	Corr          string `json:"corr"`                 // Required: Correspondent identifier
	Office        string `json:"office"`               // Required: Office identifier
	AccountType   string `json:"acct_type"`            // Required: Account type (C, M, etc.)
	AccountName   string `json:"acct_name"`            // Required: Full legal name
	Designator    string `json:"designator"`           // Required: Account designator
	SSN           string `json:"ssn"`                  // Required: Tax ID
	SSNType       string `json:"ssn_type"`             // Required: SSN type
	LegalEntity   string `json:"legal_entity"`         // Required: Legal entity type
	ContactFirst  string `json:"contactf"`             // Required: First name
	ContactLast   string `json:"contactl"`             // Required: Last name
	DateOfBirth   string `json:"dob"`                  // Required: Date of birth (MM/DD/YYYY)
	Email         string `json:"email"`                // Required: Email address
	Citizenship   string `json:"citizenship"`          // Required: Country code
	Address       string `json:"consolidated_address"` // Required: Address
	City          string `json:"city"`                 // Required: City
	State         string `json:"st_cd"`                // Required: State code
	ZIP           string `json:"zip"`                  // Required: ZIP code
	Country       string `json:"country"`              // Required: Country code
	CostDesig     string `json:"cost_desig"`           // Required: Cost basis
	DayTrader     string `json:"day_trader"`           // Required: Day trader flag
	InvObjective  string `json:"inv_objective"`        // Required: Investment objective
	RiskTolerance string `json:"risk_tolerence"`       // Required: Risk tolerance
	AnnualIncome  int    `json:"annual_inc"`           // Required: Annual income
	NetWorthLiq   int    `json:"net_worth_liq"`        // Required: Liquid net worth
	NetWorth      int    `json:"net_worth"`            // Required: Total net worth
	LevelStocks   string `json:"level_stocks"`         // Required: Stock experience
	YearsStocks   int    `json:"years_stocks"`         // Required: Years of stock experience
	LevelOptions  string `json:"level_options"`        // Required: Options experience
	YearsOptions  int    `json:"years_options"`        // Required: Years of options experience
	OptionLevel   string `json:"optn_level"`           // Required: Options level (0-5)

	// Agreement attestations (Required)
	NewAccountFormVersion      string `json:"new_account_form_version"`     // Required: Form version
	NewAccountFormTimestamp    string `json:"new_account_form_timestamp"`   // Required: Form timestamp
	CustomerAgreementVersion   string `json:"customer_agreement_version"`   // Required: Agreement version
	CustomerAgreementTimestamp string `json:"customer_agreement_timestamp"` // Required: Agreement timestamp
	PrincipalApprovalName      string `json:"principal_approval_name"`      // Required: Principal name
	PrincipalApprovalTimestamp string `json:"principal_approval_timestamp"` // Required: Principal timestamp

	// Required for margin accounts
	MarginAgreementVersion   string `json:"margin_agreement_version,omitempty"`   // Required for margin accounts: Margin agreement version
	MarginAgreementTimestamp string `json:"margin_agreement_timestamp,omitempty"` // Required for margin accounts: Margin agreement timestamp

	// Optional fields with defaults
	AccountNumber string `json:"acct_no,omitempty"`    // Optional: Auto-generated if not provided
	ShortName     string `json:"short_name,omitempty"` // Optional: Account nickname
	MiddleInitial string `json:"m_initial,omitempty"`  // Optional: Middle initial
	Phone         string `json:"phone,omitempty"`      // Optional: Phone number
	NASDEmp       string `json:"nasd_emp,omitempty"`   // Optional: NASD employee flag
	StatementMail string `json:"stmnt_mail,omitempty"` // Optional: Statement delivery (E)
	ConfirmMail   string `json:"cnfrm_mail,omitempty"` // Optional: Confirm delivery (E)

	// Disclosure fields
	DirectorShrDec    string `json:"dir_shr_dec,omitempty"`     // Optional: Director disclosure
	DirectorShrDecDtl string `json:"dir_shr_dec_dtl,omitempty"` // Optional: Director details
}

// AddAccountResponse represents the response from AddAccount endpoint
type AddAccountResponse struct {
	BaseResponse
	Account       string `json:"account"`
	FDID          string `json:"fdid"`
	AccountStatus string `json:"accountStatus"`
	RecordStatus  string `json:"recordStatus"`
}

// UpdateAccountRequest represents the request structure for updating an account
type UpdateAccountRequest struct {
	// Required fields
	Corr          string `json:"corr"`                           // Required: Correspondent identifier
	Office        string `json:"office"`                         // Required: Office identifier
	AccountNumber string `json:"acct_no"`                        // Required: Account number
	AccountName   string `json:"acct_name,omitempty"`            // Optional: Full legal name
	Phone         string `json:"phone,omitempty"`                // Optional: Phone number
	Email         string `json:"email,omitempty"`                // Optional: Email address
	Address       string `json:"consolidated_address,omitempty"` // Optional: Address
	City          string `json:"city,omitempty"`                 // Optional: City
	State         string `json:"st_cd,omitempty"`                // Optional: State code
	ZIP           string `json:"zip,omitempty"`                  // Optional: ZIP code
	InvObjective  string `json:"inv_objective,omitempty"`        // Optional: Investment objective
	RiskTolerance string `json:"risk_tolerence,omitempty"`       // Optional: Risk tolerance
	AnnualIncome  int    `json:"annual_inc,omitempty"`           // Optional: Annual income
	NetWorthLiq   int    `json:"net_worth_liq,omitempty"`        // Optional: Liquid net worth
	NetWorth      int    `json:"net_worth,omitempty"`            // Optional: Total net worth
	LevelStocks   string `json:"level_stocks,omitempty"`         // Optional: Stock experience
	YearsStocks   int    `json:"years_stocks,omitempty"`         // Optional: Years of stock experience
	LevelOptions  string `json:"level_options,omitempty"`        // Optional: Options experience
	YearsOptions  int    `json:"years_options,omitempty"`        // Optional: Years of options experience
	OptionLevel   string `json:"optn_level,omitempty"`           // Optional: Options level (0-5)
}

// UpdateAccountResponse represents the response from UpdateAccount endpoint
type UpdateAccountResponse struct {
	BaseResponse
	Account       string `json:"account"`
	AccountStatus string `json:"accountStatus"`
}

// GetAccountsResponse represents the response from GetAccounts endpoint
type GetAccountsResponse struct {
	BaseResponse
	Account       string `json:"account,omitempty"` // Legacy field name
	AccountNumber string `json:"acct_no,omitempty"` // Actual API field name
	FDID          string `json:"fdid,omitempty"`
	CIPAction     string `json:"cipAction,omitempty"`
	AccountStatus string `json:"accountStatus,omitempty"`
	RecordStatus  string `json:"recordStatus,omitempty"`
	FraudFlag     bool   `json:"fraudFlag,omitempty"`
	IsDeceased    bool   `json:"isDeceased,omitempty"`
	WatchlistHit  bool   `json:"watchlistHit,omitempty"`

	// Customer information
	AccountName  string `json:"acct_name,omitempty"`
	ContactFirst string `json:"contactf,omitempty"`
	ContactLast  string `json:"contactl,omitempty"`
	Email        string `json:"email,omitempty"`
	DateOfBirth  string `json:"dob,omitempty"`
	Citizenship  string `json:"citizenship,omitempty"`

	// Address information
	Address string `json:"consolidated_address,omitempty"`
	City    string `json:"city,omitempty"`
	State   string `json:"st_cd,omitempty"`
	ZIP     string `json:"zip,omitempty"`
	Country string `json:"country,omitempty"`

	// Account settings
	AccountType   string `json:"acct_type,omitempty"`
	Designator    string `json:"designator,omitempty"`
	Status        string `json:"status,omitempty"`
	LegalEntity   string `json:"legal_entity,omitempty"`
	RiskTolerance string `json:"risk_tolerence,omitempty"`

	// Trading permissions
	OptionLevel  string `json:"optn_level,omitempty"`
	LevelStocks  string `json:"level_stocks,omitempty"`
	YearsStocks  int    `json:"years_stocks,omitempty"`
	LevelOptions string `json:"level_options,omitempty"`
	YearsOptions int    `json:"years_options,omitempty"`

	// Financial information
	AnnualIncome float64 `json:"annual_inc,omitempty"`
	NetWorth     float64 `json:"net_worth,omitempty"`
	NetWorthLiq  float64 `json:"net_worth_liq,omitempty"`
}

type AddOrderRequest struct {
	// Required fields
	MPID        string      `json:"corr"`        // Required: MPID (Correspondent identifier)
	Office      string      `json:"office"`      // Required: Office identifier
	AccountNo   string      `json:"acct_no"`     // Required: Account number
	AccountType AccountType `json:"acct_type"`   // Required: Account type
	Side        TradeType   `json:"side"`        // Required: Trade type
	Symbol      string      `json:"symbol"`      // Required: Stock ticker in CMS symbology
	OrderType   OrderType   `json:"orderType"`   // Required: Order type
	TimeInForce TimeInForce `json:"tif"`         // Required: Time-in-force
	Destination Destination `json:"destination"` // Required: Destination

	// Optional quantity/notional (specify either qty OR notional, not both)
	Qty      *float64 `json:"qty,omitempty"`      // Quantity to buy/sell (can be fractional)
	Notional *float64 `json:"notional,omitempty"` // Dollar value to buy/sell (min $0.01, initial purchases min $1)

	// Optional fields
	LimitPrice      *float64 `json:"limitPrice,omitempty"`      // Limit price (required when OrderType is LIMIT)
	Comment         string   `json:"comment,omitempty"`         // Comment to carry through to order
	OrderAcceptTime string   `json:"orderAcceptTime,omitempty"` // Customer order acceptance time (Eastern Time, for CAT reporting)
}

type AddOrderResponse struct {
	BaseResponse
	OrderID string `json:"orderID,omitempty"` // Unique order identifier for tracking
}

type CancelOrderRequest struct {
	OrderID string `json:"orderID"` // Required: Order ID
	Account string `json:"account"` // Required: RQD account in the format "TXTR-001-USER123-C"
}

type GetOrderResponse struct {
	BaseResponse

	// Order identification
	OrderID     string `json:"orderID,omitempty"`     // Order ID from AddOrder endpoint
	OMSOrderID  string `json:"omsOrderID,omitempty"`  // Order management system ID
	Account     string `json:"account,omitempty"`     // OMS account identifier
	Corr        string `json:"corr,omitempty"`        // OMS correspondent ID
	Destination string `json:"destination,omitempty"` // Destination/route order was sent to

	// Order details
	Status string `json:"status,omitempty"` // Order status (NEW, OPEN, FILLED, CANCELLED, etc.)
	Side   string `json:"side,omitempty"`   // Trade side (B, S, SS, etc.)
	Symbol string `json:"symbol,omitempty"` // Stock ticker
	TIF    string `json:"tif,omitempty"`    // Time-in-force (DAY, GTC)

	// Quantity and pricing
	OrderQty      float64 `json:"orderQty,omitempty"`      // Original order quantity
	ExecutedQty   float64 `json:"executedQty,omitempty"`   // Total executed quantity
	ExecutedPrice string  `json:"executedPrice,omitempty"` // Average execution price
	LeavesQty     float64 `json:"leavesQty,omitempty"`     // Remaining quantity working

	// Notional order fields
	IsNotional          bool    `json:"isNotional,omitempty"`          // Is this a notional (dollar-based) order?
	OriginalNotionalAmt float64 `json:"originalNotionalAmt,omitempty"` // Original notional amount if applicable

	// Additional information
	OrderCreationTime string `json:"orderCreationTime,omitempty"` // Time order was accepted in OMS
	OrderMessage      string `json:"orderMessage,omitempty"`      // Order-related messages including rejects
	Currency          string `json:"currency,omitempty"`          // Currency code (USD)
	OriginalComment   string `json:"originalComment,omitempty"`   // Original comment from order submission
}

// ACHRequest represents a request for ACH deposit
type ACHFundTransferRequest struct {
	Corr              string  `json:"corr"`
	Office            string  `json:"office"`
	AccountNumber     string  `json:"acct_no"`
	AccountType       string  `json:"acct_type"`
	CashieringProfile string  `json:"cashiering_Profile"`
	ValueDate         string  `json:"value_dt"`
	Amount            float64 `json:"amount"`
	Comment           string  `json:"comment,omitempty"`
}

// ACHRequestResponse represents the response from ACH request
type ACHFundTransferResponse struct {
	BaseResponse
	CashID        string `json:"cashID"`
	ExternalRefID string `json:"externalRefID"`
}

// GetTransactionsResponse represents the response from GetTransactions endpoint
type GetTransactionsResponse struct {
	BaseResponse

	// Transaction identification
	TransactionNumber float64 `json:"tr_no"`      // Unique identifier for transactions in RQD's transaction ledger
	SourceCode        string  `json:"src_cd"`     // Source of transaction
	EntryType         string  `json:"entry_type"` // Transaction entry type (e.g., ACATC, ACATS, ACHFEE, CADJ, etc.)
	TradeType         string  `json:"trd_type"`   // Type of trade (e.g., B(buy), S(sell), CB(buy to close), SS(sell short), etc.)

	// Account identification
	CorrespondentID  string `json:"corr"`   // Correspondent identifier, usually MPID
	OfficeID         string `json:"office"` // Office identifier - a subdivision of the correspondent, unique per corr
	AccountNumber    string `json:"acct_no"`
	SubAccountNumber string `json:"sub_acct_no"`
	AccountType      string `json:"acct_type"` // Types of accounts (e.g., C(cash), M(margin), P(portfolio margin), etc.)

	// Contra account identification
	ContraCorr             string `json:"contra_corr"`        // Contra-side identifier, usually MPID
	ContraOffice           string `json:"contra_office"`      // Contra-side office identifier, unique per contra_corr
	ContraAccountNumber    string `json:"contra_acct_no"`     // Contra-side account number, unique per corr and office
	ContraSubAccountNumber string `json:"contra_sub_acct_no"` // Contra-side sub-account identifier
	ContraAccountType      string `json:"contra_acct_type"`   // Types of accounts (same as AccountType)

	// Dates
	SystemDate    string `json:"system_dt"` // Processing/system date in the RQD system (represents business date for each transaction)
	EntryDate     string `json:"entry_dt"`  // Date when the transaction was entered
	TradeDate     string `json:"trade_dt"`
	SettleDate    string `json:"settle_dt"`
	AvailableDate string `json:"avail_dt"` // Date that this trade is included as part of the available cash balance
	ExecutionDate string `json:"exec_dt"`  // Official timestamp of the execution of the transaction

	// Security information
	Symbol         string `json:"symbol"`
	SymbolNumber   int32  `json:"sym_no"` // Unique identifier for security in RQD system
	SecurityNumber string `json:"sec_no"` // Global identifier for security (e.g., CUSIP, ISIN)

	// Transaction amounts
	Quantity    float64 `json:"qty"`   // Quantity of transaction
	Price       float64 `json:"price"` // Price of transaction
	GrossAmount float64 `json:"g_amt"` // Gross amount (quantity * price)
	NetAmount   float64 `json:"n_amt"` // Net amount (gross amount +/- any additional fees or charges)

	// Fees
	Commission  float64 `json:"comm"`    // Commission amount
	SecurityFee float64 `json:"sec_fee"` // Section 31/SEC fees
	ExchangeFee float64 `json:"exch_fee"`
	ClearingFee float64 `json:"clr_fee"`
	ECNFee      float64 `json:"ecn_fee"`
	BrokerFee   float64 `json:"brk_fee"`
	OCCFee      float64 `json:"occ_fee"`
	OtherFee    float64 `json:"oth_fee"`

	// Custom fees
	MFee1Code string  `json:"m_fee1_cd"`   // Custom Fee Code
	MFee1DBCR string  `json:"m_fee1_dbcr"` // Custom Fee Debit/Credit
	MFee1     float64 `json:"m_fee1"`      // Custom fee Value
	MFee2Code string  `json:"m_fee2_cd"`
	MFee2DBCR string  `json:"m_fee2_dbcr"`
	MFee2     float64 `json:"m_fee2"`
	MFee3Code string  `json:"m_fee3_cd"`
	MFee3DBCR string  `json:"m_fee3_dbcr"`
	MFee3     float64 `json:"m_fee3"`
	MFee4Code string  `json:"m_fee4_cd"`
	MFee4DBCR string  `json:"m_fee4_dbcr"`
	MFee4     float64 `json:"m_fee4"`
	MFee5Code string  `json:"m_fee5_cd"`
	MFee5DBCR string  `json:"m_fee5_dbcr"`
	MFee5     float64 `json:"m_fee5"`
	MFee6Code string  `json:"m_fee6_cd"`
	MFee6DBCR string  `json:"m_fee6_dbcr"`
	MFee6     float64 `json:"m_fee6"`

	// Additional information
	Currency        string `json:"currency"`
	Capacity        string `json:"capacity"`  // Order Capacity (Principal vs. Agent)
	SolicitedUnsold string `json:"sol_unsol"` // Was order solicited?
	Settled         string `json:"settled"`   // Has trade settled?
	Availed         string `json:"availed"`   // Is cash from transaction available?
	Posted          string `json:"posted"`    // Has transaction been posted to positions and balances?

	// Transaction status
	// R - Transaction has been successfully processed, not cancelled and/or corrected.
	// X - Transaction has been cancelled. Status is updated form R to X after being cancelled.
	// C - Transaction represents a cancellation offset. This record offsets another transaction with status of X. Can be identified as the tr_no of the original transaction + 0.000001
	// P - Transaction is pending processing to the RQD ledger. To include pending transactions, use the 'Pending' query parameter in the GetTransactions endpoint with value of true.
	Status string `json:"status"`

	// Order and execution information
	TradeTag          string `json:"trd_tag"` // Client-specified tag to indicate transaction grouping
	ClientOrderID     string `json:"cl_order_id"`
	OrderID           string `json:"order_id"` // Order ID with added suffix "RQDCU"
	ExecutionID       string `json:"exec_id"`  // Order ID with added suffix "RQDCU2"
	ReferenceID       string `json:"ref_id"`   // RQD internal message reference ID
	FillID            string `json:"fill_id"`  // RQD internal execution reference ID
	Route             string `json:"route"`
	Liquidity         string `json:"liquidity"`          // Liquidity indicator
	ExecutionExchange string `json:"exec_exch"`          // Execution venue
	SecondaryOrderID  string `json:"secondary_order_id"` // Secondary Order ID (typically FIX tag 198). For trades routed via LiquidityBook, this is the original ClientOrderId provided on inbound FIX orders.

	// Miscellaneous
	Description          string `json:"descr"` // Miscellaneous description
	Memo1                string `json:"memo1"`
	Memo2                string `json:"memo2"`
	Memo3                string `json:"memo3"`
	TaxLot               string `json:"tax_lot"`   // Tax Lot identifier
	LotTransactionNumber string `json:"lot_tr_no"` // Tax Lot transaction number
}

// ACHProfileRequest represents the request for adding ACH profile
type ACHProfileRequest struct {
	Corr                           string `json:"corr"`
	Office                         string `json:"office"`
	AccountNumber                  string `json:"acct_no"`
	AccountType                    string `json:"acct_type"`
	CashieringProfile              string `json:"cashiering_Profile"`
	AccountName                    string `json:"accountName"`
	ABA                            string `json:"aba"`
	BankAccountNumber              string `json:"accountNumber"`
	ThirdPartyVerification         bool   `json:"thirdPartyVerification,omitempty"`
	ThirdPartyVerificationReviewer string `json:"thirdPartyVerificationReviewer,omitempty"`
}

// GetACHProfileRequest represents the request for getting ACH profile
type GetACHProfileRequest struct {
	Corr              string `json:"corr"`
	Office            string `json:"office"`
	AccountNumber     string `json:"acct_no"`
	AccountType       string `json:"acct_type"`
	CashieringProfile string `json:"cashiering_Profile"`
}

// ACHProfile represents the response from GetACHProfile endpoint
type ACHProfile struct {
	RequestID         string `json:"requestID"`
	Office            string `json:"office"`
	AccountNumber     string `json:"acct_no"`
	AccountType       string `json:"acct_type"`
	CashieringProfile string `json:"cashiering_Profile"`
	AccountName       string `json:"accountName"`
	BankAccountNumber string `json:"accountNumber"`
	ABA               string `json:"aba"`
}
