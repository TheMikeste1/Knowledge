---
type: technique
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/v/ee-series-resistors
---
## Purpose

The *series [[Resistor|resistors]]* pattern is when two or more resistors are connected head-to-tail with no [[current]] going elsewhere in-between the resistors. As such, the current running through them will be the same and they will work together to lower the [[voltage]]. The total [[resistance]] provided is equivalent to the sum of each resistor's resistance. This pattern can be used to replace one large resistor with a few smaller ones.
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,0.5)
    to [R] (0,-1.0)
    to [R] (0,-2.5)
    to [R] (0,-4.0);
\end{circuitikz}
\end{document}
```

The equation below shows how to compute this. Recall $v$ is the voltage, $i$ is the current, and $R$ is the resistance. This equation shows that the 3 resistors are equivalent to 1 resistor with resistance $R_1 + R_2 + R_3$. Note that the resistance of a series may be abbreviated $R_s$.
$$
\begin{flalign*}
v   &= v_1 + v_2 + v_3 \\
v_1 &= iR_1 \\
v_2 &= iR_2 \\
v_3 &= iR_3 \\
\therefore\\
v &= iR_1 + iR_2 + iR_3 \\
  &= i(R_1 + R_2 + R_3)
\end{flalign*}
$$
