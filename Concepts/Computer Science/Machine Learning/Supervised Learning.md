---
type: principle
status: draft
related:
aliases:
---
## Definition
*Supervised learning* involves training a model with labeled data. The goal is the have the model learn how to identify different classes using the provided data or provide an accurate prediction about unseen or future data.

## Common Tasks
* Classification
* Regression

#TODO: For both Classification and Regression, provide a real-world example and list a few common algorithms for each. What is the fundamental difference between the output of a classification model and a regression model?

## Properties / Characteristics
- **Labeled data**: Each input is paired with a target output.
- **Direct learning signal**: Error between predictions and labels guides learning.
- **Predictive focus**: Emphasizes generalization to new, unseen inputs.
- **Typically static datasets**: Data is usually fixed and i.i.d.
- **Well-defined objectives**: Loss functions such as MSE or cross-entropy.
- **Evaluation is explicit**: Performance measured via accuracy, error, or loss.
- **Often statistical**: Assumes underlying data-generating distributions.

## Examples
- Classification and Recognition
    - Is this a dog or a cat?
    - Spam email or not?
- Prediction/Regression
    - What will the cost of bananas be in six months?

## Notes / Comments
