---
type: definition
aliases:
  - GD
---
*Gradient descent* or *GD* is a family [[Optimizer|optimizers]]. Each *step* generally work as follows:
1. Run all the training data through the model
2. Measure the loss using a [[Loss Function|loss function]]
3. Adjust the weights towards lower loss

GD is generally more stable than [[Stochastic Gradient Descent|SGD]], but much more expensive in terms of memory and computation. Generally, GD works best for small datasets where this cost doesn't have a large impact.

Its name comes from how it decreases loss. A loss function essentially defines a topology in the imaginary space for the data. At any given point, the loss function provides a vector, or *gradient* pointing towards a lower point in the topology. Gradient descent simply takes steps in the direction of the gradient, *descending* the topology. Thus, "gradient descent." The size of the step the algorithm takes depends on the [[Learning Rate]].