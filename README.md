# AMM

The AMM proto provides all the functionality required to interact with the amm store.
The AMM protoi also defines the domain objects for communication between the services and use events (e.g. messaging)

## Building the required files

Once the proto file is updated, the following files need to be generated:

* go

### go

There is a file, proto.sh, which can be used to generate the go files.

```sh
./bin/proto.sh amm
```
