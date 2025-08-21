package alpaca

import (
	"bytes"
	"context"
	"encoding/base64"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"net/url"
	"strings"
	"time"
)

type Client struct {
	BaseURL    string
	Key        string
	Secret     string
	httpClient *http.Client
}

// NewClient creates a new Alpaca Broker API client
func NewClient(baseURL, key, secret string) *Client {
	httpClient := &http.Client{
		Timeout: time.Second * 30,
		Transport: &http.Transport{
			MaxIdleConns:        20,
			MaxIdleConnsPerHost: 20,
			MaxConnsPerHost:     50,
		},
	}
	return &Client{
		BaseURL:    baseURL,
		Key:        key,
		Secret:     secret,
		httpClient: httpClient,
	}
}

// DoRequest performs an HTTP request with authentication and error handling
func (c *Client) DoRequest(ctx context.Context, method, path string, body interface{}) (*http.Response, error) {
	var reqBody io.Reader
	if body != nil {
		jsonData, err := json.Marshal(body)
		if err != nil {
			return nil, fmt.Errorf("failed to marshal request body: %w", err)
		}
		reqBody = bytes.NewBuffer(jsonData)
	}

	// Construct final URL: BaseURL/path
	// Example: "https://broker-api.sandbox.alpaca.markets/v1/trading/accounts/123/orders"
	u, err := url.Parse(fmt.Sprintf("%s/%s", c.BaseURL, strings.TrimPrefix(path, "/")))
	if err != nil {
		return nil, fmt.Errorf("failed to parse URL: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, method, u.String(), reqBody)
	if err != nil {
		return nil, fmt.Errorf("failed to create request: %w", err)
	}

	// Set authentication and content headers
	req.Header.Set("Authorization", AuthHeader(c.Key, c.Secret))
	req.Header.Set("Content-Type", "application/json")

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, fmt.Errorf("request failed: %w", err)
	}
	return resp, nil
}

// authHeader creates the Basic authentication header
// Format: Basic <base64(key:secret)>
func AuthHeader(key, secret string) string {
	token := base64.StdEncoding.EncodeToString([]byte(key + ":" + secret))
	return "Basic " + token
}
