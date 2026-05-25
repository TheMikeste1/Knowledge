---
type: definition
---
A *component* declaration in [[VHDL]] acts as an external interface to another module. One can imagine it to creating a USB port on the circuit: it provides an interface that allows two circuits to be hooked together.

A component's interface needs to match the interface of an [[entity]] in another file. Component declarations are typically followed by instantiation, of which there are two types: [[#Indirect Instantiation]] and [[#Direct Instantiation]]. During instantiation, [[Reference/VHDL/signal|signal]]s in the current architecture are mapped to signals in the component.

## Indirect Instantiation

Indirect instantiation involves forward-declaring the component using the `component` keyword in the `is` block. The component is then later instantiated in the `begin` block.

```vhdl
architecture behave of led_blink_tb is

  -- vsg_off signal_007
  signal r_clock     : std_ulogic := '0';
  -- vsg_on signal_007

  -- Indirect Component declaraction
  component led_blink is
    port (
      i_clock     : in    std_logic;
      i_reset     : in    std_logic
    );
  end component led_blink;

begin

  -- Indirect Component instantiation
  uut : component led_blink
    port map (
      i_clock     => r_clock,
      i_reset     => '0' -- We aren't using i_reset, so we'll ground it
    );
-- . . .
```

The name of the interface should also match that entity's. This will allow the compiler to hook the two together. Note that an [[entity#^f5e23c|entity]] make have more than one [[architecture]]. In this case, the compiler uses the last compiled architecture.

> [!tip] Opinion on Indirect Instantiation
> Generally, I find indirect instantiation overly verbose. It causes the developer to write the interface for the entity at least three times: once for the `entity` declaration, again for the `component` declaration, and at least one more time whenever the `component` is instantiated to map the `signal`s.
>
> Currently, the only reason I can think to use indirect instantiation is if the compiler doesn't support [[#Direct Instantiation]], which has been supported since VHDL '93.

## Direct Instantiation

Direct instantiation is simpler than [[#Indirect Instantiation]]. Instead of forward-declaring a `component`, we immediately instantiate it in the `begin` block:

```vhdl
architecture behave of led_blink_tb is

  -- vsg_off signal_007
  signal r_clock     : std_ulogic := '0';
  -- vsg_on signal_007

begin

  -- Direct Component instantiation
  uut: entity work.led_blink
   port map(
      i_clock     => r_clock,
      i_reset     => '0' -- We aren't using i_reset, so we'll ground it
  );

-- . . .
```

This works exactly the same as indirect instantiation, but with reduced verbosity. Additionally, we have a little more control. Note the `entity work.led_blink` declaration opening the instantiation. This allows us to specify which entity to use, specifically the `led_blink` entity from the `work` namespace (the default namespace). Additionally, we can specify which architecture to use by using `entity work.led_blink(DesiredArch)`.