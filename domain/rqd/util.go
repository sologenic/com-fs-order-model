package rqd

import (
	"fmt"
	"strings"
)

type RQDAccountDetails struct {
	CorrespondentID string      // Correspondent Identifier (MPID)
	OfficeID        string      // Office Identifier
	AccountNumber   string      // Account Identifier (12 alphanumeric characters, unique per corr and office)
	AccountType     AccountType // Type of account (C, M, P, etc.)
}

// ParseBrokerAccountDetails parses a broker account string into RQD account details.
// Format: "MPID-OFFICE-ACCOUNTNO-ACCOUNTTYPE"
// Example: "TXTR-001-USER123-C"
func ParseBrokerAccountDetails(accStr string) (*RQDAccountDetails, error) {
	if accStr == "" {
		return nil, fmt.Errorf("account ID is empty")
	}
	parts := strings.Split(accStr, "-")
	if len(parts) < 4 {
		return nil, fmt.Errorf("invalid RQD account ID format, expected 'MPID-OFFICE-ACCOUNT-TYPE', got: %s", accStr)
	}
	accountTypeStr := parts[3]
	switch t := AccountType(accountTypeStr); t {
	case Cash, Margin, PortfolioMargin, GeneralLedger, DVPRVP, CorrespondentFlip, HouseFirm, FullyPaidLending, FullyPaidOmnibus:
		return &RQDAccountDetails{
			CorrespondentID: parts[0],
			OfficeID:        parts[1],
			AccountNumber:   parts[2],
			AccountType:     t,
		}, nil
	default:
		return nil, fmt.Errorf("invalid account type '%s' in RQD account ID '%s'", accountTypeStr, accStr)
	}
}
