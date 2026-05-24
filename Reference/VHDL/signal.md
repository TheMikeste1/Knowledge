---
type: definition
---
*`signal`* is a fundamental unit in [[VHDL]]. Roughly speaking, a `signal` is a data object that represents a physical wire in a circuit. They can receive one or more inputs, called *drivers*, and will produce a single output which can be *read* by other statements. These inputs and outputs are defined as part of an [[entity]].

```vhdl
signal and_gate : std_logic;
-- . . .
and_gate <= input_1 and input_2; -- <= is the assignent operator in VHDL
```

Signals must be declared **before** the `begin` section of an [[architecture]], then defined inside its `begin` section.