---
type: physical
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/a/ee-real-world-circuit-elements
---
Real world elements often display properties of more than one [[Ideal Components|component]]. These are called "parasitic effects", but are usually only relevant under certain conditions.

When these effects are relevant, components are often represented using all relevant symbols. For example, the following is a representation of a [[resistor]]:

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (-0.25,0)
    to [L] (1,0)
    to [R] (3.25,0);
\draw (1,0)
    to (1,1)
    to [C] (3,1)
    to (3,0);
\end{circuitikz}
\end{document}
```
