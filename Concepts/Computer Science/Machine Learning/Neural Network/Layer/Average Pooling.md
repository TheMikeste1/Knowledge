---
type: definition
aliases:
related:
  - "[[Maximum Pooling]]"
---
*Average pooling* is a convolutional layer that simply selects the average value in its kernel. For example, with a 2D kernel size of two and a matrix of
$$
\begin{bmatrix}
29 &  15 & 28 & 184 \\
 0 & 100 & 70 &  38 \\
12 &  12 &  7 &   2 \\
12 &  12 & 45 &   6 \\
\end{bmatrix}
$$
average pooling would output
$$
\begin{bmatrix}
36 & 80 \\
12 & 15
\end{bmatrix}
$$