---
role: princinple
domain: electrical-engineering
paradigm: physical
tags:
  - role/princinple
  - paradigm/physical
aliases:
  - KVL
urls:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-dc-circuit-analysis/v/ee-kirchhoffs-voltage-law
---
*Kirchhoff's voltage law* states that the voltages across all elements add up to 0. In other words, the [[Voltage Rise|voltage rises]] minus the [[Voltage Drop|voltage drops]] must equal 0, as in the circuit below.

$$
\sum{v_{rise}} = \sum{v_{drop}}
$$
or
$$
\sum{v} = 0
$$

```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american]

\draw
    (0,0) to [V, l=10v, invert] (0,3)
          to [short, l=10v] (2,3)
          to [R, l=200$\Omega$] (2,0)
          to [short, l=0v] (0,0);
\end{circuitikz}
\end{document}
```
