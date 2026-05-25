---
type: guide
---
A style enforcer called `vsg` can be found [here](https://vhdl-style-guide.readthedocs.io/en/stable/index.html). See also its [rules](https://vhdl-style-guide.readthedocs.io/en/stable/rules.html).

[[VHDL]] can get very complicated very quickly, and tooling providing additional information don't always provide enough. As such, VHDL designers often make use of prefixes to their signals to make it easier to identify their use. Common [[signal]] prefixes are included in the table below.

| Prefix | Meaning          | Note                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------ | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `i_`   | Input signal     |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `o_`   | Output signal    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `r_`   | Register signal  | A signal that holds its value across clock cycles. Should always be initialized with some value. Think of it as a register to hold data across cycles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `w_`   | Wire signal      | A combinatorial signal that represents the connections of wires. Should not have an initial value and should never be assigned in a sequential process. It **must** always have a clear state for every connected signal. That is, when assigned to it in an `if` statement, the `if` should be followed by an `else` to ensure there is some default state it reverts to unless all possible states are enumerated in the `if`.<br><br>Unlike a register signal, a wire signal has no memory of its own and its value is purely defined by a function of other signals. If register signals are variables, wire signals are pure functions. |
| `c_`   | Constant         |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `g_`   | [[generic]]      |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `t_`   | User-define type |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

> [!quote] A Note About Initializing Signals:
There is a fairly widespread misconception that FPGAs need to have a reset signal into a register in order to set an initial condition. This is not true, FPGA registers can have initial values.. [sic] All FPGAs can be initialized to zero or non-zero values. It’s actually best-practice to reset as few Flip-Flops as possible in your design and to rely on initializing all Flip-Flops instead. The reason for this is that each reset line you add to a Flip-Flop takes routing resources and power and makes your design harder to meet timing.
>
> The rule you should be following is this: All registers (as identified by `r_` prefix) should always have an initial condition applied to them. No wires (as identified by `w_` prefix) should EVER have an initial condition applied to them. When you simulate your design, all signals should be a nice happy green before the simulation even starts. If this is true, you will be much happier.
>
> ~ [NAND Land](https://nandland.com/recommended-coding-style-for-vhdl/)
>
> > [!quote]- Gemini
> > ### Philosophy 1: FPGA-Centric (Nandland Approach)
> > This approach optimizes strictly for FPGA hardware efficiency.
> > #### Pros
> > - Saves massive routing resources by removing massive, high-fanout reset networks.
> > - Makes it significantly easier for the tool to meet timing closures.
> > - Maximizes logic utilization inside the FPGA slices.
> > #### Cons
> > - Only works for the initial power-up state; you cannot trigger a runtime reset to clean out data mid-operation.
> > - Code is not safely portable to ASICs, where memory elements power up to random states.
> >
> > ### Philosophy 2: Portable & Runtime-Resettable (Traditional Approach)
> > This approach focuses on system-level recovery and cross-platform compatibility.
> > #### Pros
> > - Allows a system to recover from a locked state or error without completely power-cycling or reconfiguring the FPGA.
> > - Code can be directly reused in ASIC designs or different silicon architectures.
> > #### Cons
> > - Consumes dedicated routing tracks for the reset signals.
> > - Can degrade performance if the high-fanout reset nets are not properly buffered or pipelined.
> > ### Choosing the Right Balance
> > Most modern production FPGA designs actually use a hybrid approach:Keep Resets for Control Logic:
> > 1. Use synchronous/asynchronous resets for state machines, control registers, and interfaces to allow proper system-level soft resets.
> > 2. Omit Resets for Data Paths: Rely entirely on signal initialization for large pipelines, math blocks, and data shift registers where a mid-run reset is unnecessary and wasteful.
>
> > [!tip]- Opinion
> > Use resets when the thing needs to be able to be reset, otherwise just initialize the values.
> > If it is possible for the hardware to be in a bad state (that is, some combination of signal states is illegal), use a reset to initialize them on [[ASIC]]s (though it's probably better to take the Rust approach and make illegal states impossible).
