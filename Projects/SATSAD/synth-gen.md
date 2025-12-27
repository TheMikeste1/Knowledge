`synth-gen` is used to generate synthetic signals. These signals are generated using Components and Modifiers.

## Components
Components are the underlying functions that create "clean" signal. For example, $y = \sin(x)$ could be used, as could $y = mx + b$. At the code level, they will take one input, $t$. More formally, a component is $f(t)$ where $t$ is the time as an integer.

### Regime Components

Some components are only active for part of lifetime of a signal.


## Modifiers


  - Components, which are underlying functions that create the data. Any function can be used, and they are applied additively.
  - Modifiers
