---
type: definition
aliases:
  - MBGD
---
*Mini-batch gradient descent* or *MBGD* is a family [[Optimizer|optimizers]] characterized by their use of a subset, often random, of data from the training data. Each *step* generally work as follows:
1. Run a (usually random) subset of some set batch size from the training data through the model
2. Measure the loss using a [[Loss Function|loss function]]
3. Adjust the weights towards lower loss

MBGD is one of the most commonly used optimizer types for modern models. It serves as a middle ground between [[Gradient Descent|GD]] and [[Stochastic Gradient Descent|SGD]]: it's less computationally expensive than GD, but less noisy than SGD. The batch sizes are generally fairly small powers of 2, such as 32, 64, 128, 256, or even 512. Having a power of 2 is generally more computationally efficient due to the [[Why use Powers of Two|usual reasons]], especially hardware and memory efficiency.

When the datapoints in the batch are chosen at random, MBGD can be considered a subtype of SGD.