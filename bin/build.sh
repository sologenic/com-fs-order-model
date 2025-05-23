#!/bin/bash
set -e

# move to the root dir of the package
rd=$(git rev-parse --show-toplevel)
cd $rd

protoc \
--proto_path=. "util.proto" \
--proto_path=$(dirname $(dirname "$rd")) \
"--go_out=." --go_opt=paths=source_relative 

protoc \
--proto_path=. "broker.proto" \
--proto_path=$(dirname $(dirname "$rd")) \
"--go_out=." --go_opt=paths=source_relative 

protoc \
--proto_path=. "order.proto" \
--proto_path=$(dirname $(dirname "$rd")) \
"--go_out=." --go_opt=paths=source_relative

protoc \
--proto_path=. "attestation.proto" \
--proto_path=$(dirname $(dirname "$rd")) \
"--go_out=." --go_opt=paths=source_relative

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
--proto_path=. "smartcontractlog-grpc.proto" \
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
