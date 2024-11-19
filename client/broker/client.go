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
	client     grpcdef.BrokerLogServiceClient
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(orderEndpoint)
	client = grpcdef.NewBrokerLogServiceClient(grpcClient.Conn)
}

func Client() grpcdef.BrokerLogServiceClient {
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
