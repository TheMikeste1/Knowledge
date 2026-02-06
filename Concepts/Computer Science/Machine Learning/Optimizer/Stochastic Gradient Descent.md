---
type: definition
aliases:
  - SGD
  - MBGD
---
*Stochastic gradient descent* or *SGD* is a family of [[Optimizer|optimizers]] characterized by their random, or stochastic, selection of training data. Each *step* generally works as follows:
1. Select a subset (or single point) of data from the training set.
2. Run the selected data through the model.
3. Measure the loss using a [[Loss Function|loss function]].
4. Adjust the weights towards lower loss.

SGD differs from normal [[Gradient Descent|GD]] in that it uses a subset (or single point) of the training data on each step, whereas GD uses the entire dataset. This makes SGD cheaper and faster, and helps it dodge local minima. However, its updates tend to be noisier and less efficient for smaller datasets. GD is also more stable and is guaranteed to converge for convex loss functions. #CitationNeeded

### Types of Stochastic Gradient Descent

#### Pure Stochastic Gradient Descent

In *pure Stochastic Gradient Descent*, each step involves selecting **only one datapoint** from the training data.
1. Run one datapoint from the training data through the model
2. Measure the loss using a [[Loss Function|loss function]]
3. Adjust the weights towards lower loss

#### Mini-Batch Gradient Descent

*Mini-batch gradient descent* or *MBGD* is a variant of SGD that uses a subset of data from the training data, often random, called a [[Batch Size|mini-batch]].
1. Run a (usually random) subset of some set batch size from the training data through the model
2. Measure the loss using a [[Loss Function|loss function]]
3. Adjust the weights towards lower loss

MBGD is one of the most commonly used optimizer types for modern models. It serves as a middle ground between [[Gradient Descent|GD]] and pure SGD: it's less computationally expensive than GD, but less noisy than pure SGD.