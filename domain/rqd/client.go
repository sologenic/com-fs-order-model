package rqd

import (
	"bytes"
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/sologenic/com-fs-utils-lib/go/logger"
)

// Client represents an RQD API client
type Client struct {
	BaseURL     string
	APIKey      string
	MPID        string
	OfficeID    string
	Destination Destination
	httpClient  *http.Client
}

type RQDConfig struct {
	APIKey      string `json:"APIKey"`
	BaseURL     string `json:"BaseURL"`
	MPID        string `json:"MPID"`        // Correspondent identifier
	OfficeID    string `json:"OfficeID"`    // Office identifier
	Destination string `json:"Destination"` // Destination
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

// DoRequest performs an HTTP request with authentication and error handling
func (c *Client) DoRequest(ctx context.Context, method, endpoint string, body interface{}) (*http.Response, error) {
	var reqBody io.Reader

	if body != nil {
		jsonData, err := json.Marshal(body)
		if err != nil {
			return nil, fmt.Errorf("failed to marshal request body: %w", err)
		}
		reqBody = bytes.NewBuffer(jsonData)
	}

	// Ensure BaseURL has proper scheme
	baseURL := c.BaseURL
	if !strings.HasPrefix(baseURL, "http://") && !strings.HasPrefix(baseURL, "https://") {
		baseURL = "https://" + baseURL
	}

	req, err := http.NewRequestWithContext(ctx, method, baseURL+endpoint, reqBody)
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	// Set authentication header
	req.Header.Set("Ocp-Apim-Subscription-Key", c.APIKey)
	// req.Header.Set("Content-Type", "application/json")

	// Handle SSH tunnel - set Host header for tunneled requests
	if req.URL.Host == "localhost:8443" || req.URL.Host == "127.0.0.1:8443" {
		req.Host = "api-uat.rqdclearing.com"
		req.Header.Set("Host", "api-uat.rqdclearing.com")
	}

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("request failed: %w", err)
	}

	return resp, nil
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

	if v.Destination != "" {
		switch d := Destination(v.Destination); d {
		case EquitySimulator, RQDRoute, RQDRoute2, Manual:
		default:
			logger.Fatalf("invalid destination in RQD_CONFIG: %s", v.Destination)
		}
	}
	return v
}
