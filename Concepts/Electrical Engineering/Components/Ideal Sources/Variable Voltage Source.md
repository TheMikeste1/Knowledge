---
role: model
domain: electrical-engineering
paradigm: symbolic
tags:
  - role/model
  - paradigm/symbolic
urls:
   - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ee-ideal-sources
---
Variable [[Voltage]] sources are a source of changing voltage. They generate a known voltages as a function of time, independent of the current used by the components.

## Equation

$$
v = v(t)
$$
Where $v(t)$is some function that produces a voltage, such as a [[Sine|sine]] wave.

## Symbol

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,1) to [vsourcesin] (0,-1);
\end{circuitikz}
\end{document}
```
Note that the inner symbol may change depending on the function used to generate the voltage.
