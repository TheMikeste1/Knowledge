The Resources category consists of assets that [[Agents]] can interact with, but that cannot directly interact with other assets. This could include individual assets such as
- Files
- The Network, both local and nonlocal
- Certain hardware components, such as a speaker, GPU, or non-touch monitor
    - These hardware components do not interact with other assets

The [[Actions]] generally map to
- [[Actions#^66b87c|Read]] => Read contents or or receive messages
    - Read the contents of a file
    - Receive messages from hardware or the network
- [[Actions#^3abd84|Write]] => Write to or modify
    - Write data to the network
    - Reconfigure a hardware component's settings
    - Modify a file
- [[Actions#^56ffbc|Possess]] => Control the asset
    - Write data to be processed by a hardware component (e.g. process data on the GPU, display something on the monitor)
    - Open/close sockets on the network