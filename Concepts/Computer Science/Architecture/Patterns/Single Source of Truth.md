---
type: pattern
aliases:
  - SSOT
---
*Single source of truth* is the practice used to keep data consistent and controlled across a system. It involves having a single source, or owner, for that data. All access, including reading and mutation, must go through that owner. 

SSOT is similar to Rust's [[Ownership]], but they operate at different levels. SSOT is an architectural principle, whereas Ownership is specifically a memory management mechanism.

SSOT assists with protecting data and makes it easier to track down bugs when data is changing unexpectedly. It also naturally leads to [[Unidirectional Data Flow]]. Examples of SSOT implementations are [[View Model]], [[Singleton]], or reading directly from a[[Database]] (usually with the [[Repository]] pattern).