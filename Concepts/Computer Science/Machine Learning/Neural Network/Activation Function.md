---
type: concept
---
The *activation function* is what brings neural networks to life. They introduce nonlinearity, permitting curves and more complex shapes.

They also mathematically separated the different [[Layer|layers]]: without an activation function, consecutive layers would essentially just be one large layer. This can be shown by considering two layers: $f$ and $g$ (with the bias included as part of $w$):
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
