---
type: model
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ideal-circuit-elements
---
Resistors are often abbreviated to **R**.

[[Power]] is dissipated in a resistor as current flows through it. Power in a resistor grows proportionally to the square of voltage or current. That is,
$$
p = i^2R
$$
$$
p = \frac{v^2}{R}
$$

## I-V Relationship

[[Voltage|Volts]] $v$ equals [[Current|current]] $i$ times resistance $R$. This is called [[Ohm's Law]].
$$
v = iR
$$

## Symbol

### American/Japanese

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,1) to [R] (0,-1);
\end{circuitikz}
\end{document}
```

### Other

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[european]
\draw (0,1) to [R] (0,-1);
\end{circuitikz}
\end{document}
```
