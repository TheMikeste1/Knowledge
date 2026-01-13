---
type: definition
aliases:
  - fitting
---
*Training* a model involves *fitting* a model to a set of data, called the *training data*. The specific data and technique used to train the model depends on the type of model, in particular if the model uses [[Supervised Learning]], [[Unsupervised Learning]], or [[Reinforcement Learning]], but most techniques share similarities:
1. Take a subset of your available data to be your training data. The rest will be used as *test data*.
2. Expose the model to the training data.
3. Update the model depending on how well it did with the training data.
4. [[Model Validation|Validate]] the model using the test data to ensure it's learning a pattern, not just a set of inputs.