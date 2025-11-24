#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

# Refresh the current repository
echo "Pulling latest changes for current repository..."
git pull

# Refresh related repositories referenced in proto files
parent_dir=$(dirname $(dirname "$rd"))
echo "Refreshing related repositories..."

# Pull com-fs-utils-lib (referenced in proto imports)
utils_lib_dir="$parent_dir/sologenic/com-fs-utils-lib"
if [ -d "$utils_lib_dir" ] && [ -d "$utils_lib_dir/.git" ]; then
    echo "Pulling com-fs-utils-lib..."
    (cd "$utils_lib_dir" && git pull)
else
    echo "Warning: com-fs-utils-lib not found at $utils_lib_dir"
fi

# Pull com-fs-asset-model (referenced in proto imports)
asset_model_dir="$parent_dir/sologenic/com-fs-asset-model"
if [ -d "$asset_model_dir" ] && [ -d "$asset_model_dir/.git" ]; then
    echo "Pulling com-fs-asset-model..."
    (cd "$asset_model_dir" && git pull)
else
    echo "Warning: com-fs-asset-model not found at $asset_model_dir"
fi

rm -rf node_modules
rm -rf sologenic
rm -rf build

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
