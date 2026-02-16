---
type: definition
aliases:
  - max pooling
  - max pool
---
*Maximum pooling* is a convolutional layer that simply selects the maximum value in its kernel. For example, with a 2D kernel size of two and a matrix of
$$
\begin{bmatrix}
1 & 0 & 0 & 1 \\
0 & 2 & 0 & 0
\end{bmatrix}
$$
max pooling would output
$$
\begin{bmatrix}
2 & 1
\end{bmatrix}
$$

This layer is useful for condensing and enhancing the detections from a convolutional layer. Additionally, this layer produces a *translation invariance*, which means small differences in the position of features will be mitigated.