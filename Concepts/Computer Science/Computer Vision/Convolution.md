---
type: definition
---
*Convolution*, in the [[Convolutional Neural Network|CNN]] sense, is the combination of input with a *filter*, or *kernel*. For example, the input 
$$
\begin{bmatrix}
1 & 1 & 1 & 0 & 0 \\
0 & 1 & 1 & 1 & 0 \\
0 & 0 & 1 & 1 & 1 \\
0 & 0 & 1 & 1 & 0 \\
0 & 1 & 1 & 0 & 0 \\
\end{bmatrix}
$$
and filter
$$
\begin{bmatrix}
1 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 1 \\
\end{bmatrix}
$$
would give the result
$$
\begin{bmatrix}
4 & 3 & 4 \\
2 & 4 & 3 \\
2 & 3 & 4 \\
\end{bmatrix}
$$
as the filter passes through the input. Note that padding is not used in this example; the filter is only applied where it fits.

The output size without padding can neatly be calculated with the equation $(r_{\text{input}} - r_{\text{filter}} + 1) \times (c_{\text{input}} - c_{\text{filter}} + 1)$, where $r$ and $c$ are the number of rows and columns respectively. Otherwise, padding will keep the output the same size unless too much padding is used.

For images with multiple channels (e.g. RGB, HSV), multiple filters can be made and applied to each channel.