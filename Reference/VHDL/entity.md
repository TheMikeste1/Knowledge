---
type: definition
---
An *`entity`* defines the inputs and outputs for a block or component. These inputs and outputs can then be consumed and produced by [[Reference/VHDL/signal|signals]] and other entities. They are roughly comparable to interfaces in software programming languages, where the `port` contains the function signature and the [[architecture]] contains one implementation. Note that there may be more than one implementation for a given `entity`. ^f5e23c

```vhdl
entity example_and is
  port (
    input_1    : in  std_logic;
    input_2    : in  std_logic;
    and_result : out std_logic
  );
end example_and;
```