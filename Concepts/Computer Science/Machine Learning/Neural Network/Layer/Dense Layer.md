---
type: definition
aliases:
  - fully-connected layer
---
[[Neuron|Neurons]] can be composed into one or more [[Layer|layer]]. When each neuron receives input from each unit in the previous layer, it is called a *dense layer* or *fully-connected layer*. Since neurons can be [[Neuron#^f10cc1|represented using a vector]], dense layers can be represented as a [[Matrix|matrix]]. In a dense layer, the size of the matrix will be number of weights $n_w$ plus one for the bias by the number of neurons $n_n$: or $(n_w + 1) \times n_n$ . Each layer allows the neural network to draw more complex shapes in its $n$-dimensional space to better predict its target. 

Each neuron in a layer draws its own distinct hyperplane in its input space. The [[Activation Function|activation function]] then indicates the distance and direction the input lies for each hyperplane in the layer's new space. These different "perspectives" help develop a better picture of the input's characteristics and identify new features or representations not present in the original data.