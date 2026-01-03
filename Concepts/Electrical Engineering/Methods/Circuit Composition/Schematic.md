---
role: method
domain: electrical-engineering
paradigm: interpretive
tags:
  - role/method
  - paradigm/interpretive
urls:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/a/ee-circuit-terminology
---
## Purpose

A *schematic* is a drawing of a circuit. It consists of several parts.
- **Elements** - [[Ideal Components|Components]] and [[Ideal Sources|sources]]. Each type of element is represented by a different symbol. See individual elements for their symbols.
- **Lines** - Lines are connections between elements. They are often thought of as wires. On schematics, lines are "ideal wires," or perfect conductors with zero resistances. Every element terminal touched by a line is at the same voltage. Care should be taken to make it obvious if a line connects to another or not. Avoid crosses when possible, and use "hops" when a line must cross another to make it obvious they don't connect.
- **Dots** - Connections between lines. Dots help indicate if two lines connect or not and can be used to disambiguate. For example, if two lines cross over each other and do connect, a dot makes it more apparent the connect. However, it may be best to "break up" the cross so it's obvious the lines connect and don't simply cross without a hop.
- **Reference designator** - A unique name for an element. Quite often $R$ with a number is used for resistors, $C$ with a number for capacitors, and $V$ with number or a subscript describing it for sources.
- **Reference Node** - The node from which other node's voltages are measured relative to. ^b35f38
- **Ground** - Has multiple meanings:
    1. The [[#^b35f38|reference point (node)]] from which voltages are measured
    2. The return path for current back to its source
    3. A direct physical connection to the Earth. This provides safety by redirecting [[Circuit#^a2868c|shorts]] into the Earth.
    Symbols for a ground include
    ![Ground symbols](https://cdn.kastatic.org/ka-perseus-images/7d5a24819a48db48fb13ad9ec71f9952389e8a4d.svg )

Schematics are considered *equivalent* if they have the same nodes and branches. For example, the following two schematics are equivalent.

```
┌──┬──┬──┐   ┌──┬──┬──┐
A  B  C  D   B  C  A  D
└──┴──┴──┘   └──┴──┴──┘
```

Matching nodes in equivalent schematics have the same voltage, and matching branches the same current.

### Drawing a Good Schematic

> A good schematic serves a number of noble purposes. A good schematic
>
> - Captures the design of a circuit in an unambiguous way.
> - Allows you to share your design with other people.
> - Helps you remember how your circuit works, even a month from now.
>
> Both you and your colleagues will appreciate these drawing habits for creating good schematics,
>
> - Place inputs on the left, and outputs on the right.
> - Let information flow from left to right across the circuit.
> - Use up/down on the page to suggest voltage levels. That is, draw higher voltage wires closer to the top of the page, and lower voltages (like ground) near the bottom of the page.
>
> ~ [Khan Academy](https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/a/ee-circuit-terminology)

### Sign Convention for Passive Components

Passive components include [[Capacitor|capacitors]], [[Inductor|inductors]], and [[Resistor|resistors]]. For these components, current goes **into** the positive voltage terminal and **exit** through the negative voltage terminal.
