---
type:
---
# Feature
A feature is a datapoint used in a model to help determine the output. It is an $x$, whereas [[#Label|labels]] are the $y$. There can be many features per row.

# Label
A label is what is trying to be predicted. It is the $y$ with one or more [[#Feature|features]] as the $x$. There can only be one label per row.

# Bias
Bias is used to offset a machine learning algorithm so it can better fit the desired data. An easy example of a bias is the $b$ in $y = mx + b$. In [[Neural Networks|neural networks]], it is common to add an incoming bias node of 1 to each hidden layer.

# Objective Function
Objective functions are used to determine how well a model performs. It is also called a loss function because it calculates the difference/loss between the predicted [[#Label|label]] and the actual label.

# Convolution
Convolution, in the [[Neural Networks#Convolutional Neural Network|CNN]] sense, is the combination of input with a filter (a.k.a. kernel). For example, the input 
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

The output size without padding can neatly be calculated  with the equation $(r_{\text{input}} - r_{\text{filter}} + 1) \times (c_{\text{input}} - c_{\text{filter}} + 1)$, where $r$ and $c$ are the number of rows and columns respectively. Otherwise, padding will keep the output the same size unless too much padding is used.

For images with multiple channels (e.g. RGB, HSV), multiple filters can be made and applied to each channel.


