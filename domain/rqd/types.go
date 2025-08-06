package rqd

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
