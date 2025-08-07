package domain

import (
	"fmt"
	"strconv"
	"strings"

	ordergrpc "github.com/sologenic/com-fs-order-model"
	metadata "github.com/sologenic/com-fs-utils-lib/models/metadata"
)

// Get the unique datastore key from the Order
// order key format: orderID-SmartContractAddr-network
func GetOrderKeyStrFromOrder(order *ordergrpc.Order) string {
	return fmt.Sprintf("%d-%s-%d", order.Instruction.OrderID, order.SmartContractAddr, order.Network)
}

func LogKeyToStr(key *ordergrpc.Key) string {
	return fmt.Sprintf("%s-%s", *key.KeyPrefix, key.Key)
}

// Parse ClientOrderID string into the GRPC struct
// format: orderID-SmartContractAddr-network
func ParseStrClientOrderIDToInternal(clientOrderIDString string) (*ordergrpc.ClientOrderID, error) {
	parts := strings.Split(clientOrderIDString, "-")
	if len(parts) != 3 {
		return nil, fmt.Errorf("invalid ClientOrderID format")
	}

	// Parse OrderID
	orderIDInt64, err := strconv.ParseInt(parts[0], 10, 64)
	if err != nil {
		return nil, fmt.Errorf("invalid OrderID format: %v", err)
	}

	// Validate network value is not empty
	if parts[2] == "" {
		return nil, fmt.Errorf("network value cannot be empty")
	}

	// Parse Network string to enum
	networkInt, err := strconv.ParseInt(parts[2], 10, 32)
	if err != nil {
		return nil, fmt.Errorf("invalid network format: %v", err)
	}

	return &ordergrpc.ClientOrderID{
		OrderID:           orderIDInt64,
		SmartContractAddr: parts[1],
		Network:           metadata.Network(networkInt),
	}, nil
}

func ParseInternalClientOrderIDToStr(bod *ordergrpc.ClientOrderID) string {
	return fmt.Sprintf("%d-%s-%d", bod.OrderID, bod.SmartContractAddr, bod.Network)
}