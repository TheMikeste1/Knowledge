# VHDL Reading List

A curated list of articles and documentation for deeper reading on VHDL best practices.

## Signal Resolution and Type Safety

### 1. [VHDLwhiz: std_logic vs. std_ulogic](https://vhdlwhiz.com/std_logic-vs-std_ulogic/)
*   **Summary:** A practical guide detailing why `std_ulogic` (unresolved logic) is safer than `std_logic` (resolved logic) for internal FPGA/ASIC signals. It explains how `std_ulogic` forces compile-time errors when a signal is accidentally driven by multiple processes, catching bugs early.

### 2. [Sigasi: VHDL Rules & Static Analysis](https://www.sigasi.com/)
*   **Summary:** Documentation on how modern IDEs and linting tools perform static code analysis on VHDL. It illustrates how using unresolved types helps tools immediately flag hardware-level errors (like multiple drivers) directly in your editor as you write code.

### 3. [IEEE 1076-2008 Standard (VHDL-2008 compatibility)](https://ieeexplore.ieee.org/document/4772740)
*   **Summary:** The IEEE specification showing that in VHDL-2008 and later, `std_logic` is a subtype of `std_ulogic`. Reading up on this helps clarify how modern VHDL toolchains allow you to mix resolved and unresolved types without needing tedious type-casting.
