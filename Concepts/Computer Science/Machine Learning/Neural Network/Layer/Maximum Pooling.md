---
type: definition
aliases:
  - max pooling
  - max pool
related:
  - "[[Average Pooling]]"
---
*Maximum pooling* is a convolutional layer that simply selects the maximum value in its kernel. For example, with a 2D kernel size of two and a matrix of
$$
\begin{bmatrix}
29 &  15 & 28 & 184 \\
 0 & 100 & 70 &  38 \\
12 &  12 &  7 &   2 \\
12 &  12 & 45 &   6 \\
\end{bmatrix}
$$
max pooling would output
$$
\begin{bmatrix}
100 & 184 \\
 12 &  45
\end{bmatrix}
$$

This layer is useful for condensing and enhancing the detections from a convolutional layer. Additionally, this layer produces a *translation invariance*, which means small differences in the position of features will be mitigated.