---
urls:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/v/ee-voltage-divider
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/a/ee-voltage-divider
---
Given a circuit with an outlet and a [[voltage]] $V_o$ between two [[Resistor|resistors]], like so:
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american]
\draw (0,-1.5) 
    to [V=$V_i$, invert, i^>=$i$] (0,1.5)
    to (0,3)
    to (2,3)
    to [R=$R_1$, i_=$i$] (2,0)
    to [R=$R_2$, i_=$i$] (2,-3)
    to (0,-3)
    to (0,-1.5);
\draw[-Latex] (2,0) to [short, i_=0] (3.5,0);
\node[above] at (3.5,0){$V_o$};
\draw[-Latex] (2,-3) to (3.5,-3);
\end{circuitikz}
\end{document}
```

We can calculate the voltage of $V_o$ like so:
$$
\begin{flalign*}
v_i = i(R_1 + R_2) 
    \xRightarrow{\text{solve for } i}
    i &= \frac{v_i}{R_1+R_2} \\
v_o = iR_2
    \xRightarrow{\text{solve for } i}
    i &= \frac{v_o}{R_2} \\
\therefore \\
\frac{v_i}{R_1+R_2} = \frac{v_o}{R_2} \\
    \xRightarrow{\text{solve for } v_o}
    v_o = v_i\frac{R_2}{R_1 + R_2}
\end{flalign*}
$$

$v_o = v_i\frac{R_2}{R_1 + R_2}$ is called the *voltage divider* equation, and indicates that $v_o$ is always a little smaller than $v_i$.