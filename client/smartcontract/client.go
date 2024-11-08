package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-order-model"
	grpcclient "github.com/sologenic/com-fs-utils-lib/go/grpc-client"
)

const (
	orderEndpoint = "ORDER_STORE"
)

var (
	client     *grpcdef.SmartContractLogServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(orderEndpoint)
	cl := grpcdef.NewSmartContractLogServiceClient(grpcClient.Conn)
	client = &cl
}

func Client() *grpcdef.SmartContractLogServiceClient {
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
