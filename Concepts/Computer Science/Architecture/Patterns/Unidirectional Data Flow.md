---
type: pattern
aliases:
  - UDF
---
*Unidirectional data flow* is an architecture where state flows in only one direction, and modifications or events flow flow in the other. This pattern, along with [[Single Source of Truth|SSOT]], ensures data consistency, protection, and debuggability.

State usually flows down from parents into children, with parents maintaining ownership of the data.