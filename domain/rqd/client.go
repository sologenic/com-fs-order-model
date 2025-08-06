package rqd

import (
	"crypto/tls"
	"encoding/json"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/sologenic/com-fs-utils-lib/go/logger"
)

// Client represents an RQD API client
type Client struct {
	BaseURL    string
	APIKey     string
	MPID       string
	OfficeID   string
	httpClient *http.Client
}

// Config holds configuration for the RQD client
type Config struct {
	BaseURL string
	APIKey  string
	Timeout time.Duration
}

type RQDConfig struct {
	APIKey      string `json:"APIKey"`
	BaseURL     string `json:"BaseURL"`
	MPID        string `json:"MPID"`                  // Correspondent identifier
	OfficeID    string `json:"OfficeID"`              // Office identifier
	Destination string `json:"Destination,omitempty"` // Destination
}

// NewClient creates a new RQD API client
func NewClient() *Client {
	transport := &http.Transport{
		MaxIdleConns:        20,
		MaxIdleConnsPerHost: 20,
		MaxConnsPerHost:     50,
	}
	config := ParseRQDConfig()
	// Only skip SSL verification for localhost (SSH tunnel)
	if strings.Contains(config.BaseURL, "localhost") {
		transport.TLSClientConfig = &tls.Config{InsecureSkipVerify: true}
	}
	httpCl := &http.Client{
		Timeout:   time.Second * 10,
		Transport: transport,
	}
	return &Client{
		BaseURL:    config.BaseURL,
		APIKey:     config.APIKey,
		MPID:       config.MPID,
		OfficeID:   config.OfficeID,
		httpClient: httpCl,
	}
}

func ParseRQDConfig() *RQDConfig {
	conf := os.Getenv("RQD_CONFIG")
	if conf == "" {
		logger.Fatalf("RQD_CONFIG environment variable not set")
	}
	v := &RQDConfig{}
	if err := json.Unmarshal([]byte(conf), v); err != nil {
		logger.Fatalf("failed to parse RQD_CONFIG: %v", err)
	}
	return v
}
