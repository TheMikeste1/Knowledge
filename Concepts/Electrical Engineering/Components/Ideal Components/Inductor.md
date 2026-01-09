---
type: symbolic
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ideal-circuit-elements
---
Inductors are often abbreviated to **L**.

In an ideal inductor, [[power]] does not dissipate. Instead, it is stored in the component's magnetic field and can be converted back into electric current in the wire.

## I-V Relationship

[[Voltage]] $v$ is equal to [[Inductance|inductance]] $L$ of the device times the change in current over time $\frac{di}{dt}$.

### Derivative Form
$$
v = L \frac{di}{dt}
$$

### Integral Form
$$
i = \frac{1}{L}\int_0^T{v\mathrm{d}t} + i_0
$$
where $T$ is the max time and $i_0$ is the current at time 0.
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
