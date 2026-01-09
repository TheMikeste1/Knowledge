---
type: symbolic
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/a/ee-ideal-circuit-elements
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/a/ee-circuit-terminology
---
## Definition

The word *circuit* comes from the word *circle*. A circuit is a collection of components all connected such that [[current]] can flow in a complete circle.

A *closed circuit* is a circuit where all currents have a path back to where they come from. Conversely, an *open circuit* is when there is a gap or opening in the path.

A (usually unintentional) path of low resistance between components is called a *short* or *short circuit*. This diverts the current, usually damaging the circuits and components in the process. ^a2868c

Closing a switch can be used to *make*, or complete a circuit. Opening a switch *breaks* the circuit.

## Parts of a Circuit
A circuits is composed of *elements*. The set of elements in the circuit must include at least one [[Ideal Sources|source]], which is connected to one or more [[Ideal Components|components]].

Circuits are additionally composed of nodes, branches, and other parts. The parts and their definitions depends on the analysis being performed.
### Geometric/Topological Definition
The point where two or more elements meet is called a *node* or a *junction*. Nodes at not necessarily a specific physical point. Rather, it's a topological concept. For example, in the [[#^40000b|diagram below]] the connection between elements A and B form a node. Additionally, B, C, and D, as well as A, C, D form a node. ^b739ce

```
┌──B──┬──┐
A     C  D
└─────┴──┘
```

^40000b

The elements connecting nodes is called a *branch*. In the example [[#^40000b|above]], each element is a branch because they each sit in between and connect two nodes.

A *loop* is a set of paths through nodes that returns to the starting element. In the example [[#^40000b|above]], ABC, ABD, and CD are all loops. [[#^40001b|Below]], ABEFG, ABED, ABC, CEFG, CED, and DFG are all loops.

A *mesh* are loops with open spaces in between the wire and elements. In the [[#^40000b|above]] diagram, meshes are formed by ABC and CD, meaning it has two meshes. Similarly, in the larger [[#^40001b|diagram below]], ABC, CED, and DFG form meshes.

```
┌──B──┬─E─┬─┐
│     │   │ F
A     C   D │
│     │   │ G
└─────┴───┴─┘
```
^40001b
