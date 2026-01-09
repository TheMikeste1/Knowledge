---
role: princinple
domain: electrical-engineering
paradigm: physical
tags:
  - role/princinple
  - paradigm/physical
aliases:
  - KCL
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-dc-circuit-analysis/v/ee-kirchhoffs-current-law
---
*Kirchhoff's Current Law* states that all the current going in to a node must equal all the current going out of a node. More formally,
$$
\sum{|i_{in}|} = \sum{|i_{out}|}
$$
Alternatively, respecting the signs,
$$
\sum{i} = 0
$$
meaning the sum of all currents must equal 0, where incoming and outgoing currents have opposite signs.

For example, given a circuit
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}

\draw (-3,0)
    to [R, i_=$i_1$] (0,0) 
    node[circle, draw, fill=gray!20, inner sep=2pt] at (0,0) {}
    to [R, i>_=$i_2$] (3,0);
\draw (0,0) 
    to [R, i>_=$i_3$] (0,-3.5);
    
\end{circuitikz}
\end{document}
```
we know that $\sum{|i_{in}|} = \sum{|i_{out}|}$. $i_1$ is the only current in, while $i_2$ and $i_3$ are the current outs. Therefore, $i_1 = i_2 + i_3$.
