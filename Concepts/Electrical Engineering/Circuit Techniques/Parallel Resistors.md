---
type: symbolic
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/v/ee-parallel-resistors-1
---
## Purpose

The *parallel [[Resistor|resistors]]* pattern is when two or more resistors share the same [[Circuit#Parts of a Circuit|nodes]] with no [[current]] running elsewhere in-between them. This causes them to share the same [[voltage]] and they split the current between them. Identifying this pattern can allow engineers to simplify their circuit by replacing the parallel resistors with a single, usually less-resistance, resistor.
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}
\draw (0,0.5) to (0,0);
\draw (0,0) to ( 1, -0.5) to [R] ( 1,-2.5) to ( 1,-2.5) to (0,-3);
\draw (0,0) to (-1, -0.5) to [R] (-1,-2.5) to (-1,-2.5) to (0,-3);
\draw (0,-3) to (0,-3.5);
\end{circuitikz}
\end{document}
```

The equation below shows how to compute a replacement for parallel resistors. Recall $v$ is the voltage, $i$ is the current, and $R$ is the resistance. This equation shows that the 2 resistors are equivalent to 1 resistor with resistance $\frac{1}{R_p} = \frac{1}{\frac{1}{R_1} + \frac{1}{R_2}}$. Note that the resistance of parallel resistors may be abbreviated $R_p$.
$$
\begin{flalign*}
i &= i_1 + i_2 \\
v &= i_1 R_1 \xRightarrow{\text{solve for } i_1}  i_1 = v / R_1 \\
v &= i_2 R_2 \xRightarrow{\text{solve for } i_2}  i_2 = v / R_2 \\
\therefore\\
i &= v / R_1 + v / R_2 \\
  &= v \left(\frac{1}{R_1} + \frac{1}{R_2} \right) \\
  &= v \frac{R_1 R_2}{R_1 + R_2}
\end{flalign*}
$$
