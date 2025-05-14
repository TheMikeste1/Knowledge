The Agents asset consists of components that operate within the [[Environment]], and that interact with [[Resources]] and other [[Agents]]. This could include
- Applications
- Users
- Scripts
- Certain hardware components, such as a Bluetooth radio (or any other radio)
    - These hardware components interact with the system in some way
    - Usually live in a different trust boundary since their input cannot necessarily be verified (e.g., I don't know for sure who's sending packets over the radio)