---
type: concept
aliases:
  - node
  - unit
---
Neural networks are comprised of one or more *neuron*, also called a *unit*. Neurons are fairly simply. They just use the [[Slope-Intercept Form|slope-intercept form]] of a line: $y = wx + b$. Note, however, that instead of $m$ for the slope, a $w$ is used. This is because the $w$ stands for "weight." The equation also has a bias $b$. These are the values a neural networks learns: it changes $w$ and $b$ until, for a given input $x$, $y$ approximates the [[Label|target]]. ^f2a5af

An important distinction between the slope-intercept form and the linear equation used for the neural network is $w$ and $x$ are actually [[Vector|vectors]]. Each input is fed into the neuron as one of $x$'s components, and each $x$ component has a corresponding weight component in $w$. This, combined with $b$, allows the neural network to act just like [[Linear Regression]], but in multiple dimensions. When there is exactly one input, the NN will define a line in 2D space similar to linear regression, whereas in higher dimensions the NN will define a plane (for two inputs) or a hyperplane (for more than two inputs) to predict its target. The [[Activation Function|activation function]] then indicates which side of the hyperplane an input is on as how strongly, or deeply, it falls on that side.

> [!NOTE]- Quick note on the slope-intercept form
> It can be inconvenient and inefficient on modern hardware to multiply two vectors, then add the bias. Instead, for a single neuron the equation can be rewritten as
> $$
> y = \begin{bmatrix}
> w_0 & \cdots & w_n & b
> \end{bmatrix} \begin{bmatrix}
> x_0 \\
> \vdots \\
> x_n \\
> 1
> \end{bmatrix}
> $$
> This change allows the bias to be part of the vector, entirely removing the need for the addition while still achieving the same effect.
> ^f10cc1
