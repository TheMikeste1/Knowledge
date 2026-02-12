---
type: concept
---
A [[Neural Network]] can be composed of one or more *layers*. There are many different types of layers each with specific goals and functions. Some layers connect neurons like [[Dense Layer|dense layers]]. Others perform operations, such as addition, padding, preprocessing, or transformation.

Multiple layers can be combined in order to make the network more complex. Layers between the input and the output are called *hidden layers*. These multiple layers work together with the [[Activation Function|activation functions]] to create complex shapes, curves, and jumps (read: [[Non-linear|non-linear]]) to separate [[Label|labels]] or better predict targets. The output of the layer creates a new space for subsequent layers to take input from.

> [!IMPORTANT]
> Without an activation function, **layers cannot leave the world of lines and planes** meaning they will **always be linear**. As such, layers that consist of [[Neuron|neurons]] should use an activation function, with some rare exceptions[^1]. This is explained in more depth in [[Activation Function]].

#TODO Look into more layer types.

[^1]: #TODO Look into neuron layers that do not require activation functions. Regression Output, Bottleneck, Word Embeddings, Dimensionality Reduction, etc.
