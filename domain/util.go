package domain

import (
	"strconv"

	transactiongrpc "github.com/sologenic/com-fs-transaction-model"
)

// Get the unique datastore key from the TX
// Order Key combination: Network_SmartContractAddr_OrderID
func GetOrderKeyFromTX(tx *transactiongrpc.Transaction) string {
	return tx.Network + "_" + tx.SmartContractAddr + "_" + strconv.Itoa(int(tx.OrderDetail.OrderID))
}
