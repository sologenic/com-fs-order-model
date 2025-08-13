# Build script for order model

This build script (`build.sh`) differs from our organization's standard protobuf build scripts due to a specific requirement for **external import compatibility**.

### Standard Organization Approach

Normally, our build scripts use local proto file paths and generate protobuf files directly in the root directory:

```bash
# Standard approach (what we usually do)
PROTO_FILES="order.proto broker.proto attestation.proto ..."
protoc \
  --proto_path=. \
  --go_out=. --go_opt=paths=source_relative \
  $PROTO_FILES
```

This generates Go files with simple function names like:
- `file_order_proto_init()`
- `file_broker_proto_init()`

### The Problem with Standard Approach

However, this package needs to be **importable by external projects** that reference our proto files using full import paths like:

```protobuf
import "sologenic/com-fs-order-model/order.proto";
import "sologenic/com-fs-order-model/broker.proto";
```

When external projects try to import our protobuf definitions, they expect the generated Go functions to match the full import path.

### Our Special Solution

This build script uses a **two-step approach**:

1. **Generate with full paths**: Use the complete workspace structure to ensure proper function naming:
   ```bash
   GOPATH_SRC=$(dirname $(dirname "$rd"))  # Go workspace root
   PROTO_FILES="sologenic/com-fs-order-model/order.proto ..."
   protoc --proto_path=$GOPATH_SRC ...
   ```

2. **Copy to root**: Move the generated files from the nested directory to the root:
   ```bash
   cp sologenic/com-fs-order-model/*.pb.go .
   cp sologenic/com-fs-order-model/*.ts .
   ```

### Result

This generates the correct function names that external projects expect:
- `file_sologenic_com_fs_order_model_order_proto_init()`
- `file_sologenic_com_fs_order_model_broker_proto_init()`

While still placing the generated files in our project root where we need them.

### When to Use This Approach

Use this special build script pattern when:
- Your protobuf package needs to be imported by external projects
- External projects reference your protos with full import paths
- You need generated function names to match the import path structure

Use the standard approach when:
- The package is only used internally
- No external imports are expected
- Simple function names are sufficient

---

**Note**: This approach maintains backward compatibility while ensuring external projects can properly import and use our protobuf definitions.
