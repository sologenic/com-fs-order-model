#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

# Generate Go code for normal proto files (without gRPC)
protoc \
    --proto_path=. "order.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative

protoc \
    --proto_path=. "broker.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative

protoc \
    --proto_path=. "util.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative

protoc \
    --proto_path=. "attestation.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative

# Generate Go code for -grpc proto files (with gRPC)
protoc \
    --proto_path=. "smartcontractlog-grpc.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative \
    --go-grpc_opt=require_unimplemented_servers=false \
    "--go-grpc_out=." --go-grpc_opt=paths=source_relative

protoc \
    --proto_path=. "order-grpc.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative \
    --go-grpc_opt=require_unimplemented_servers=false \
    "--go-grpc_out=." --go-grpc_opt=paths=source_relative

protoc \
    --proto_path=. "broker-grpc.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative \
    --go-grpc_opt=require_unimplemented_servers=false \
    "--go-grpc_out=." --go-grpc_opt=paths=source_relative

protoc \
    --proto_path=. "attestation-grpc.proto" \
    --proto_path=$(dirname $(dirname "$rd")) \
    "--go_out=." --go_opt=paths=source_relative \
    --go-grpc_opt=require_unimplemented_servers=false \
    "--go-grpc_out=." --go-grpc_opt=paths=source_relative

# Generate TypeScript code for normal proto files only (NOT for -grpc files)
rm -rf node_modules
npm i

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    order.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    broker.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    util.proto

protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --proto_path=. \
    --proto_path=$(dirname $(dirname "$rd")) \
    --ts_proto_out=. \
    --ts_proto_opt=esModuleInterop=true \
    attestation.proto

npm run build
git add build/

git add *.ts
rm -rf node_modules
