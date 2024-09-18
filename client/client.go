/*
The config:
- Parses the config as provided to the app
- Can only parse the config parts relevant to this middleware
- Depends on providing the config as environment variables so that init() can run independent per component and no coordination is required

Service fails (with panic) to initialize if the TRANSACTION_STORE environment variable is not set.
*/
package client

import (
	"context"

	grpcclient "github.com/sologenic/com-fs-utils-lib/go/grpc-client"
	grpcdef "github.com/sologenic/com-fs-transaction-model"
)

const endpoint = "TRANSACTION_STORE"

var (
	client     *grpcdef.TransactionServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
	cl := grpcdef.NewTransactionServiceClient(grpcClient.Conn)
	client = &cl
}

func Client() *grpcdef.TransactionServiceClient {
	if client == nil {
		initClient()
	}
	return client
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}
