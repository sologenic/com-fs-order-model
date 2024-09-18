/*
The config:
- Parses the config as provided to the app
- Can only parse the config parts relevant to this middleware
- Depends on providing the config as environment variables so that init() can run independent per component and no coordination is required

Service fails (with panic) to initialize if the AMM_STORE environment variable is not set.
*/
package client

import (
	"context"

	grpcclient "github.com/sologenic/fs-utils-lib/go/grpc-client"
)

const endpoint = "AMM_STORE"

var (
	grpcClient *grpcclient.GRPCClient
)

func initClient() {
	grpcClient = grpcclient.InitClient(endpoint)
}

func AuthCtx(ctx context.Context) context.Context {
	if grpcClient == nil {
		initClient()
	}
	return grpcClient.AuthCtx(ctx)
}
