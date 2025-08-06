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
