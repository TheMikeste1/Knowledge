---
type: technique
---
Models need to be checked to ensure good predictive capabilities. When validating the model, the [[Training|training data]] should not be used to ensure the model finds a pattern and doesn't just learn the dataset.

To validate a model, one can generally
1. Use the model to predict using *validation data* or *test data*
2. Calculate the error of the model using an algorithm such as [[Mean Absolute Error|MAE]] or [[Mean Squared Error|MSE]]