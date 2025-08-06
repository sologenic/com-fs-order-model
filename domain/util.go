package domain

import (
	"fmt"

	ordergrpc "github.com/sologenic/com-fs-order-model"
)

// Get the unique datastore key from the Order
// order key format: orderID-SmartContractAddr-network
func GetOrderKeyStrFromOrder(order *ordergrpc.Order) string {
	return fmt.Sprintf("%d-%s-%d", order.Instruction.OrderID, order.SmartContractAddr, order.Network)
}

func LogKeyToStr(key *ordergrpc.Key) string {
	return fmt.Sprintf("%s-%s", *key.KeyPrefix, key.Key)
}
