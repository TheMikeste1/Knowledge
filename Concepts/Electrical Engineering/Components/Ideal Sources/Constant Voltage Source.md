---
type: symbolic
references:
   - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ee-ideal-sources
---
Constant [[Voltage]] Sources are a source of constant voltage. Due to the relationship between voltage and [[Current|current]], if a constant voltage source is used and the amount of energy required by the system changes the current must change.

## Equation

$$
v = V
$$
Where $v$ is voltage and $V$ is some constant.

## Symbol

### American/Japanese

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,1) to [V] (0,-1);
\end{circuitikz}
\end{document}
```

### Other

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[european]
\draw (0,1) to [V] (0,-1);
\end{circuitikz}
\end{document}
```

### Batteries

The long line is the plus terminal, and the small is the minus terminal.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,1) to [battery] (0,-1);
\end{circuitikz}
\end{document}
```
