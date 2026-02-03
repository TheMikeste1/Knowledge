---
type: overview
aliases:
  - NN
---
*Neural network* (*NN*) is a subcategory of [[Deep Learning|deep learning]] models. The neural network was inspired by the architecture of a brain, consisting of one or more [[#Neuron|neurons]] connected in one or more [[#Layer|layers]] using [[#Activation Function|activation functions]].

## Neuron
Neural networks are comprised of one or more *neuron*, also called a *unit*. Neurons are fairly simply. They just use the [[Slope-Intercept Form|slope-intercept form]] of a line: $y = wx + b$. Note, however, that instead of $m$ for the slope, a $w$ is used. This is because the $w$ stands for "weight." The equation also has a bias $b$. These are the values a neural networks learns: it changes $w$ and $b$ until, for a given input $x$, $y$ approximates the [[Label|target]]. ^f2a5af

An important distinction between the slope-intercept form and the linear equation used for the neural network is $w$ and $x$ are actually [[Vector|vectors]]. Each input is fed into the neuron as one of $x$'s components, and each $x$ component has a corresponding weight component in $w$. This, combined with $b$, allows the neural network to act just like [[Linear Regression]], but in multiple dimensions. When there is exactly one input, the NN will define a line in 2D space similar to linear regression, whereas in higher dimensions the NN will define a plane (for two inputs) or a hyperplane (for more than two inputs) to predict its target. The [[#Activation Function|activation function]] then indicates which side of the hyperplane an input is on as how strongly, or deeply, it falls on that side.

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
[[#Neuron|Neurons]] can be composed into one or more *layers*. When each neuron receives input from each unit in the previous layer, it is called a *dense layer* or *fully-connected layer*. Since neurons can be [[#^f10cc1|represented using a vector]], layers can be represented as a [[Matrix|matrix]]. In a dense layer, the size of the matrix will be number of weights $n_w$ plus one for the bias by the number of neurons $n_n$: or $(n_w + 1) \times n_n$ . Each layer allows the neural network to draw more complex shapes in its $n$-dimensional space to better predict its target. The output of the layer creates a new space for subsequent layers to take input from.

Each neuron in a layer draws its own distinct hyperplane in its input space. The [[#Activation Function|activation function]] then indicates the distance and direction the input lies for each hyperplane in the layer's new space. These different "perspectives" help develop a better picture of the input's characteristics and identify new features or representations not present in the original data.

Multiple layers can be combined in order to make the network more complex. These multiple layers work together with the [[#Activation Function|activation functions]] to create complex shapes and curves, and jumps (read: [[Non-linear|non-linear]]) to separate [[Label|labels]] or better predict targets. Note that without an activation function, **layers cannot leave the world of lines and planes** meaning they will **always be linear**. This is explained in more depth in [[#Activation Function]].

Beyond dense layers, there are many additional types of layers each with specific goals and functions. #TODO Look into more layer types.

## Activation Function
The *activation function* is what brings neural networks to life. They introduce nonlinearity, permitting curves and more complex shapes.

They also mathematically separated the different [[#Layer|layers]]: without an activation function, consecutive layers would essentially just be one large layer. This can be shown by considering two layers: $f$ and $g$ (with the bias included as part of $w$):
$$
\begin{align}
f(x) &= w_f \; x \\
g(x) &= w_g \; x \\
f(g(x)) &= w_f \; w_g \; x = w_{fg} \; x
\end{align}
$$
However, if an activation function $a$ is used, the weights cannot be combined and so the layers are kept separate.
$$
\begin{align}
f(x) &= a(w_f \; x) \\
g(x) &= a(w_g \; x) \\
f(g(x)) &= a(w_f \; a(w_g \; x)) \leftarrow \text{Cannot be reduced further}
\end{align}
$$

Activation functions are applied to each of the layer's outputs and directly influence the shape of the function created by the layer. For example, an [[Sigmoid|S-shaped]] activation function would allow the layer to take on an S-shape, but the weights and bias would determine where the S is, its rotation, and how steep it is. Similarly, a [[Absolute Value|V-shaped]] function would give a V-shape to the layer, but the weights and bias would determine where its vertex is located, and the weights determine its orientation and how flat it is.

> The activation function provides the primitive operation (\[e.g. a\] bend), but the network architecture and learned weights determine where and how those primitives combine to approximate your target function.
> ~ Claude AI

A common activation function is the *rectifier*: $\max(0, x)$ where $x$ is the vector of outputs. This is also known as the *rectified linear unit* or *ReLU* function. This function allows the layer to bend where it goes from a negative to positive output.
```tikz
\begin{document}
\begin{tikzpicture}[scale=2.2, transform shape, domain=-1:1, font=\tiny]
    % Grid
    \draw[very thin,color=gray] (-1.1,-0.1) grid (1.1,1.1);

    % Axes with ticks
    \draw[->] (-1.2,0) -- (1.2,0) node[right] {$x$};
    \draw[->] (0,-0.2) -- (0,1.2) node[above] {$y$};

    % Automatic x-axis ticks
    \foreach \x in {-1,-0.5,...,1}
        \draw (\x,0.05) -- (\x,-0.05) node[below] {$\x$};

    % Automatic y-axis ticks
    \foreach \y in {0.5,1}
        \draw (0.05,\y) -- (-0.05,\y) node[left] {$\y$};

    % max(0,x)
    \draw[color=blue, thick, samples=200]
        plot (\x, {max(0,\x)});
\end{tikzpicture}
\end{document}
```

#TODO Add more activation functions, as well as their pros and cons.

Note that the activation function is not always used for the output layer. [[Regression]] tasks will usually not have one, while [[Classification]] often will.