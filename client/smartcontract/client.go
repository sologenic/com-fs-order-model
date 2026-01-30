package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-order-model"
	grpcclient "github.com/sologenic/com-fs-utils-internal-lib/go/grpc-client"
)

const (
	orderEndpoint = "ORDER_STORE"
)

var (
	client     grpcdef.SmartContractLogServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(orderEndpoint)
	client = grpcdef.NewSmartContractLogServiceClient(grpcClient.Conn)
}

func Client() grpcdef.SmartContractLogServiceClient {
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
