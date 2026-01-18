---
type: definition
aliases:
  - fitting
---
*Training* a model involves *fitting* a model to a set of data, called the *training data*. The specific data and technique used to train the model depends on the type of model, in particular if the model uses [[Supervised Learning]], [[Unsupervised Learning]], or [[Reinforcement Learning]], but most techniques share similarities:
1. Take a subset of your available data to be your training data, usually around 80%. The rest will be used as *validation data*. (See also [[Cross-validation]])
#TODO: Research other common training/validation/test splits. Why might you choose a different split ratio?
2. Expose the model to the training data.
3. Update the model depending on how well it did with the training data.
4. [[Model Validation|Validate]] the model using the test data to ensure it's learning a pattern, not just a set of inputs.

Once [[Hyperparameter|hyperparameters]] have been solidified and all decisions made, a model is often trained using ALL available data instead of only the training data. Optionally, a small test set can be set aside permanently to permit performance monitoring. ^df5b24
