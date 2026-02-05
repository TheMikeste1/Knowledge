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