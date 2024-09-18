package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-transaction-model"
	grpcclient "github.com/sologenic/fs-utils-lib/go/grpc-client"
)

const endpoint = "TX_STORE"

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
