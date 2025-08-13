The Agents category consists of assets that operate within the [[Environment]], and that interact with [[Resources]] and other [[Agents]]. This could include
- Applications
- Users
- Certain scripts and script-like executables that have additional interactions beyond what the agent using them has
- Certain hardware components, such as a Bluetooth radio (or any other radio), or touch monitor
    - These hardware components interact with the system in some way
    - They usually live in a different trust boundary since their source of input cannot necessarily be verified (e.g., I don't know intrinsically know who's sending packets over the radio)

The [[Actions]] generally map to
- [[Actions#^66b87c|Read]] => Read status or telemetry
    - Read telemetry from applications, users, or hardware
    - Read the output of a script or script-like executable
- [[Actions#^3abd84|Write]] => Write to or modify
    - Reconfigure an application's or hardware component's settings
    - Modify a script
- [[Actions#^56ffbc|Possess]] => Have the asset perform some action on behalf of the agent
    - Command and control applications or hardware
    - Write data to be processed by a hardware component (e.g., data to broadcast on a radio)
    - Run a script or script-like executable

A special note on possession: if some agent possesses another asset so completely that, though they are distinct assets, they are essentially the same, it may be best to treat them as a single asset. For example, if an Agent that has exclusive and complete access to the power supply it may be better to treat the Agent as if it *is* the power supply. This would mean all interactions going to/from the power supply would instead be directed at the Agent.