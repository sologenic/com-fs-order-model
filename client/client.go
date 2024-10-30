package client

import (
	"context"

	grpcdef "github.com/sologenic/com-fs-order-model"
	grpcclient "github.com/sologenic/fs-utils-lib/go/grpc-client"
)

const (
	orderEndpoint        = "TX_STORE"
	alpacaTradesEndpoint = "AL_TRADES_STORE"
)

var (
	orderclient        *grpcdef.OrderServiceClient
	alpacatradesclient *grpcdef.AlpacaServiceClient
	grpcClient         *grpcclient.GRPCClient
)

func initOrderClient() {
	grpcClient = grpcclient.InitClient(orderEndpoint)
	cl := grpcdef.NewOrderServiceClient(grpcClient.Conn)
	orderclient = &cl
}

func OrderClient() *grpcdef.OrderServiceClient {
	if orderclient == nil {
		initOrderClient()
	}
	return orderclient
}

func OrderAuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initOrderClient()
	}
	return grpcClient.AuthCtx(ctx)
}

func initAlpacaTradesClient() {
	grpcClient = grpcclient.InitClient(alpacaTradesEndpoint)
	cl := grpcdef.NewAlpacaServiceClient(grpcClient.Conn)
	alpacatradesclient = &cl
}

func AlpacaTradesClient() *grpcdef.AlpacaServiceClient {
	if alpacatradesclient == nil {
		initAlpacaTradesClient()
	}
	return alpacatradesclient
}

func AlpacaTradesAuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initAlpacaTradesClient()
	}
	return grpcClient.AuthCtx(ctx)
}
