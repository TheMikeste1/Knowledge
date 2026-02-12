---
type: definition
---
It's often a good idea to put data on a common scale. Quite often, the *value* of the [[Feature]] doesn't matter as much as its relationship to the other datapoints. The [[Neural Network|NN]] will correct for this over time, but performing it manually can speed up and stabilize training. 

The same principle of normalization can be applied **inside** the network, which is the purpose of the *batch normalization layer*. As a network trains, the distribution of each layer's inputs changes, causing the [[Mean|mean]] to shift. This is called *internal covariate shift*, and it can slow down the learning process. By re-normalizing the activations between layers, batch normalization mitigates this issue, leading to more stable and faster training. It's often effective when a model's performance has plateaued or is unstable.

The layer can be placed before or after the [[Activation Function]]. Before tends to increase stability, while after sometimes performs better. Overall, the difference seems to be marginal and the standard practice is to place if **before** the activation function.

The layer can also be placed as the first layer (e.g., `Input -> BatchNorm -> DenseLayer`) to normalize the input automatically.