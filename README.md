# Order

The `order.proto` file defines the data structures for tracking the entire lifecycle of an order, from its creation in a smart contract to its execution by a broker and final settlement. It does not represent a single state of an order, but rather the entire process and its state at any given time.

## Order Lifecycle

The `Order` message encapsulates the state of an order at any point in time. The `InternalOrderState` enum within the `Order` message tracks the progress of the order through its lifecycle. Here's a simplified overview of the stages:

1.  **Smart Contract Creation**: An order is initiated on the smart contract
2.  **Broker Submission**: The order is submitted to a broker for execution
3.  **Smart Contract Placement**: The order is marked as placed in the smart contract
4.  **Execution**: The broker executes the order, which can be partially or fully filled
5.  **Smart Contract Execution**: The execution details are recorded in the smart contract
6.  **Cancellation**: If requested, the order can be canceled by the user or the broker
7.  **Completion**: Once the order is fully executed or canceled, the process is finished

The `Order` message also contains other important information, such as the `OrderInstruction` (a snapshot of the order from the smart contract) and `BrokerOrderDetails` (the order's status at the broker).

## Building the protos

Run the script

```sh
./bin/build.sh
```