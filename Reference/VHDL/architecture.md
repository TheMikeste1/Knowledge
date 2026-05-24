---
type: definition
---
An *`architecture`* in [[VHDL]] is an implementation of an [[entity]]. If an `entity` is equivalent to an [[Interface]], an `architecture` is an implementation of that interface.

```vhdl
architecture rtl of example_and is
  signal and_gate : std_logic;
begin
  and_gate <= input_1 and input_2;
  and_result <= and_gate;
end rtl;
```