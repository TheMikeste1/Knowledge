---
type: model
---
*Linear regression* creates a line to try to predict the [[Label]]. The goal is to find the best line to represent the data, and works well for labels that have a linear relationship with their [[Feature|features]], such as the amount of money required to purchase some good.

Since it is a line, it can be represented as $y = mx + b$, but this is typically replace with $f(\mathbf{x}) = \mathbf{x}^T \mathbf{w} + b$, where $f(\mathbf{x})$ is the function, $\mathbf{x}$ is the feature vector, $\mathbf{w}$ is the weight vector, and $b$ is called the [[Bias|bias]]. This can similarly be written as $f(\mathbf{x}) = w_1 x_1 + w_2 x_2 + \ldots + w_d x_d$, where $d$ is the dimensionality of the feature vector. [[Neuron|Neurons]] are essentially a form of linear regression, and the same [[Neuron#^f10cc1|tricks]] for them can be used for liner regression models.

We can change the weights and the bias in this equation to more accurately follow the linear relationship between the features and the labels.