---
role: model
domain: electrical-engineering
paradigm: symbolic
tags:
  - role/model
  - paradigm/symbolic
references:
   - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/circuit-elements/v/ee-ideal-sources
---
Constant [[Current]] Sources are a source of constant current. Due to the relationship between [[Voltage|voltage]] and current, if a constant current source is used and the amount of energy required by the system changes the voltage must change.

## Equation

$$
i = I
$$
Where $i$ is current and $I$ is some constant.
## Symbol

### American/Japanese

The arrow goes in the direction of the current.

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,1) to [I] (0,-1);
\end{circuitikz}
\end{document}
```

### Other

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[european]
\draw (0,1) to [I] (0,-1);
\end{circuitikz}
\end{document}
```
