#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

# The root of the Go workspace src, which contains all your projects.
# This becomes the single source of truth for all proto imports.
GOPATH_SRC=$(dirname $(dirname "$rd"))

# All proto files that need to be compiled.
PROTO_FILES="\
sologenic/com-fs-order-model/attestation-grpc.proto \
sologenic/com-fs-order-model/attestation.proto \
sologenic/com-fs-order-model/broker-grpc.proto \
sologenic/com-fs-order-model/broker.proto \
sologenic/com-fs-order-model/order-grpc.proto \
sologenic/com-fs-order-model/order.proto \
sologenic/com-fs-order-model/smartcontractlog-grpc.proto \
sologenic/com-fs-order-model/util.proto"

protoc \
--proto_path=$GOPATH_SRC \
--go_out=. --go_opt=paths=source_relative \
--go-grpc_opt=require_unimplemented_servers=false \
--go-grpc_out=. --go-grpc_opt=paths=source_relative \
$PROTO_FILES

# if there's TS project in the package, generate a protobuf file for TS
rm -rf node_modules
npm i

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=$GOPATH_SRC \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    $PROTO_FILES

npm run build
git add build/

git add *.ts
rm -rf node_modules
