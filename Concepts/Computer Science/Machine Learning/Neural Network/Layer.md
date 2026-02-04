---
type: concept
---
[[Neuron|Neurons]] can be composed into one or more *layers*. When each neuron receives input from each unit in the previous layer, it is called a *dense layer* or *fully-connected layer*. Since neurons can be [[^f10cc1|represented using a vector]], layers can be represented as a [[Matrix|matrix]]. In a dense layer, the size of the matrix will be number of weights $n_w$ plus one for the bias by the number of neurons $n_n$: or $(n_w + 1) \times n_n$ . Each layer allows the neural network to draw more complex shapes in its $n$-dimensional space to better predict its target. The output of the layer creates a new space for subsequent layers to take input from.

Each neuron in a layer draws its own distinct hyperplane in its input space. The [[Activation Function|activation function]] then indicates the distance and direction the input lies for each hyperplane in the layer's new space. These different "perspectives" help develop a better picture of the input's characteristics and identify new features or representations not present in the original data.

Multiple layers can be combined in order to make the network more complex. Layers between the input and the output are called *hidden layers*. These multiple layers work together with the [[Activation Function|activation functions]] to create complex shapes and curves, and jumps (read: [[Non-linear|non-linear]]) to separate [[Label|labels]] or better predict targets. Note that without an activation function, **layers cannot leave the world of lines and planes** meaning they will **always be linear**. This is explained in more depth in [[Activation Function]].

Beyond dense layers, there are many additional types of layers each with specific goals and functions. #TODO Look into more layer types.

