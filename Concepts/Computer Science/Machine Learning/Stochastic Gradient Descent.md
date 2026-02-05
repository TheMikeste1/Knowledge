---
type: definition
aliases:
  - SGD
---
*Stochastic gradient descent* or *SGD* is a family [[Optimizer|optimizers]] characterized by their random, or stochastic, selection of training data. Each *step* generally work as follows:
1. Run one datapoint from the training data through the model
2. Measure the loss using a [[Loss Function|loss function]]
3. Adjust the weights towards lower loss

SGD differs from normal [[Gradient Descent|GD]] in that it randomly selects one datapoint from the training data on each step, whereas GD uses the entire set. This makes SGD cheaper and faster, and helps it dodge local minima. However, its updates tend to be noisier and less efficient for smaller datasets. GD is also more stable and is guaranteed to converge for convex loss functions. #CitationNeeded [[Mini-Batch Gradient Descent]] is often considered a type of SGD, though pure SGD uses only one datapoint.
