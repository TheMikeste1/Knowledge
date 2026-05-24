---
type: definition
---
A *`process`* in [[VHDL]] is a block of logic. It is roughly similar to a function in software programming languages, with a major exception being they are running at all times automatically (they don't need to be called). There are two types: [[#Combinatorial]] and [[#Sequential]].

## Combinatorial
A *combinatorial* (or *combinational*) `process` is a process that simply performs combinatorial logic. They should only be used for complex logic that is difficult to express otherwise.

A simple (overly so) combinatorial `process` might look like
```vhdl
process (input_1, input_2)
begin
    and_gate <= input_1 and input_2;
end process;
```
This `process` watches `input_1` and `input_2`. When either changes, the block will execute. **They are not function arguments:** these are elements in the process's *sensitivity list*. In this case, when the block executes it `and`s the inputs together and stores them in the `and_gate` [[Reference/VHDL/signal|signal]].

## Sequential
A *sequential* `process` is a process that performs steps one after another. They take exactly one or two signals in their sensitivity list. No reset or a synchronous reset will just have a clock signal. An asynchronous reset will have 2 signals.

A simple example with no reset:
```vhdl
signal test1 : std_logic := '1';
signal test2 : std_logic := '0';
signal test3 : std_logic := '0';
signal test4 : std_logic := '0';
 
process (i_clock)
begin
  if rising_edge(i_clock) then
    test2 <= test1;
    test3 <= test2;
    test4 <= test3;
  end if;
end process;
```
```vhdl
-- Cycle 1:
test2 <= '1';
test3 <= '0';
test4 <= '0';
-- Cycle 2:
test2 <= '1';
test3 <= '1';
test4 <= '0';
-- Cycle 3:
test2 <= '1';
test3 <= '1';
test4 <= '1';
-- Cycle 4:
-- test4 now evaluates to '1'.
-- This is because the values only update when the process is suspended, such as after the edge (in this case, the rising edge).
```

Note that default values for signals are not usually synthesizable. Instead, they normally need to be initialized in a process when a reset is received:
```vhdl
process (i_clock, i_reset)
begin
  if rst = '1' then
    test2 <= '0';
    test3 <= '0';
    test4 <= '0';
  elsif rising_edge(i_clock) then
    test2 <= test1;
    test3 <= test2;
    test4 <= test3;
  end if;
end process;
```