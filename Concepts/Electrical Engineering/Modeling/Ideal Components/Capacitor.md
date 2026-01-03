---
role: model
domain: electrical-engineering
paradigm: symbolic
tags:
  - role/model
  - paradigm/symbolic
urls:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ideal-circuit-elements
---
Capacitors are often abbreviated to **C**.

In an ideal capacitor, [[power]] is not dissipated and can flow back out of the component.

## I-V Relationship

### Derivative Form
[[Current]] $i$ equals the [[Capacitance|capacitance]] $C$ of the device times the change in [[Voltage|voltage]] over time $\frac{dv}{dt}$.
$$
i = C\frac{dv}{dt}
$$
### Integral Form

$$
v = \frac{1}{C} \int_0^T{i\text{d}t} + v_0
$$
where $T$ is the max time and $t$ is the current time, $v_0$ is the voltage at time 0, and $v$, $i$, and $C$ are voltage, current, and capacitance at time $t$.

## Symbol

Normal
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,-1) to [C] (0,1);
\end{circuitikz}
\end{document}
```

With a negative terminal (the curved line)
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,-1) to [pC] (0,1);
\end{circuitikz}
\end{document}
```
