---
type: technique
aliases:
  - pi-T
references:
  - https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-resistor-circuits/a/ee-delta-wye-resistor-networks
---
## Purpose

Complicated resistor networks may be able to be simplified using the Delta-Wye ($\Delta - Y$) transformation. This name comes from the shape of the resistors, which looks like so

```tikz
\usepackage{circuitikz}

\begin{document}
\begin{circuitikz}[american]

  % Delta at left
  \begin{scope}[shift={(0,0)}]
    \draw
      (0,0) to[R] (2,0)
      (2,0) to[R] (1,1.732)
      (1,1.732) to[R] (0,0);
    \node[left]  at (0,0) {A};
    \node[right] at (2,0) {B};
    \node[above] at (1,1.732) {C};
    \node at (1,-0.8) {$\Delta$ (Delta)};
  \end{scope}

   Y at right
  \begin{scope}[shift={(4.5,0)}]
    \coordinate (A) at (0,0);
    \coordinate (B) at (2,0);
    \coordinate (C) at (1,1.732);
    \coordinate (O) at (1,0.577);
    \draw
      (A) to[R] (O)
      (B) to[R] (O)
      (C) to[R] (O);
    \node[left]  at (A) {A};
    \node[right] at (B) {B};
    \node[above] at (C) {C};
    \node at (1,-0.8) {Y (Star)};
  \end{scope}

\end{circuitikz}
\end{document}
```

In drawings, the patterns will often be "squared-out", resulting in the Pi-T ($\pi - T$) pattern.
```tikz
\usepackage{circuitikz}
\begin{document}
\begin{circuitikz}[american]
  \draw
    (0,2) 
      to[R] (4,2)
    (0,2) to[R] (0,0)
    (4,2) to[R] (4,0)
    (0,0) -- (4,0);
    \node at (2,-0.5) {$\pi$};
\end{circuitikz}
\begin{circuitikz}[american]
  \coordinate (A) at (0,0);
  \coordinate (B) at (3,0);
  \coordinate (M) at (1.5,0);
  \coordinate (C) at (1.5,-2);
  \draw
    (A) to[R] (M)
    (M) to[R] (B)
    (M) to[R] (C);
  \node at (M) [circle,fill,inner sep=1.5pt]{};
  \node at (1.5,-2.5) {T};
\end{circuitikz}
\end{document}
```

Deltas can be transformed into Ys and vice versa.

See the link above for how to perform the transformation.
