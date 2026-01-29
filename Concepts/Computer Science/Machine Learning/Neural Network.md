---
type: overview
aliases:
  - NN
---
*Neural network* (*NN*) is a subcategory of [[Deep Learning|deep learning]] models. The neural network was inspired by the architecture of a brain, consisting of one or more [[#Neuron|neurons]] connected in one or more [[#Layer|layers]] using [[#Activation Function|activation functions]].

## Neuron
Neural networks are comprised of one or more *neuron*, also called a *unit*. Neurons are fairly simply. They just use the [[Slope-Intercept Form|slope-intercept form]] of a line: $y = wx + b$. Note, however, that instead of $m$ for the slope, a $w$ is used. This is because the $w$ stands for "weight." The equation also has a bias $b$. These are the values a neural networks learns: it changes $w$ and $b$ until, for a given input $x$, $y$ approximates the [[Label|target]]. ^f2a5af

An important distinction between the slope-intercept form and the linear equation used for the neural network is $w$ and $x$ are actually [[Vector|vectors]]. Each input is fed into the neuron as one of $x$'s components, and each $x$ component has a corresponding weight component in $w$. This, combined with $b$, allows the neural network to act just like [[Linear Regression]], but in multiple dimensions. When there is exactly one input, the NN will draw a line in 2D space just like linear regression, whereas in higher dimensions the NN will draw a plane (for two inputs) or a hyperplane (for more than two inputs) to predict its target. The [[#Activation Function|activation function]] then indicates which side of the hyperplane an input is on as how strongly, or deeply, it falls on that side.

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

## Layer
[[#Neuron|Neurons]] can be composed into one or more *layers*. When each neuron receives input from each unit in the previous layer, it is called a *dense layer* or *fully-connected layer*. Since neurons can be [[#^f10cc1|represented using a vector]], layers can be represented as a [[Matrix|matrix]]. In a dense layer, the size of the matrix will be number of weights (including the bias) $n_w$ by the number of neurons $n_n$ , or $n_w \times n_n$ . Each layer allows the neural network to draw more complex shapes in its $n$-dimensional space to better predict its target. The output of the layer creates a new space for subsequent layers to take input from.

Each neuron in a layer draws its own distinct hyperplane in its input space. The [[#Activation Function|activation function]] then indicates the distance and direction the input lies for each hyperplane in the layer's new space. These different "perspectives" help develop a better picture of the input's characteristics and identify new features or representations not present in the original data.

Multiple layers can be combined in order to make the network more complex. These multiple layers work together to create complex shapes and curves, and jumps (read: [[Non-linear|non-linear]]) to separate [[Label|labels]] or better predict targets.

Beyond dense layers, there are many additional types of layers each with specific goals and functions. #TODO Look into more layer types.