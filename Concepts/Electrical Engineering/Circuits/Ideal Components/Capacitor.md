---
urls:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ideal-circuit-elements
---
Capacitors are often abbreviated to **C**.

In an ideal capacitor, [[power]] is not dissipated and can flow back out of the component.
## I-V Relationship

[[Current]] $i$ equals the [[Capacitance|capacitance]] $C$ of the device times the change in [[Voltage|voltage]] over time $\frac{dv}{dt}$.
$$
i = C\frac{dv}{dt}
$$

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