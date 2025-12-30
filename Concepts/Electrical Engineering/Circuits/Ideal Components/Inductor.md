---
urls:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ideal-circuit-elements
---
Inductors are often abbreviated to **L**.

In an ideal inductor, [[power]] does not dissipate. Instead, it is stored in the component's magnetic field and can be converted back into electric current in the wire.

## I-V Relationship

[[Voltage]] $v$ is equal to [[Inductance|inductance]] $L$ of the device times the change in current over time $\frac{di}{dt}$.

$$
v = L \frac{di}{dt}
$$

## Symbol

### American/Japanese

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,1) to [L] (0,-1);
\end{circuitikz}
\end{document}
```

### Other

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[european]
\draw (0,1) to [L] (0,-1);
\end{circuitikz}
\end{document}
```
