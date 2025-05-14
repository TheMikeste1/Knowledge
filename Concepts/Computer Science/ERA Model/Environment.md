The Environment category consists of assets that affect the system in which an [[Agents|Agent]] operates. This could include individual assets such as
- User permissions
- Application permissions
- Firewall rules
- CPU/Memory limits
- Hardware availability, such as by toggling power for it on and off

The [[Actions]] generally map to
- [[Actions#^66b87c|Read]] => Read the status of the asset
    - Read user permissions
    - View firewall rules
- [[Actions#^3abd84|Write]] => Reconfigure the asset
    - Change user permissions
    - Update firewall rules
- [[Actions#^56ffbc|Possess]] => Take on the role of the asset
    - Be the firewall
    - Be the source of authority for permissions 
    - Control hardware power