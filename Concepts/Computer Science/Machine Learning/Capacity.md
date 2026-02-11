---
type: definition
---
*Capacity* refers to the size and complexity of patterns the model is able to learn. The capacity is influenced by the type of model and its architecture. For some models, simply increasing the size will increase the capacity. For example, [[Ensemble]] models can simply add more models. [[Neural Network|Neural networks]] can add neurons or layers.

More capacity is not always a good thing. Too much capacity will cause the model to [[Overfitting|learn the noise]] in the dataset, while too little will cause it to [[Underfitting|fail to capture the signal]]. You can generally tell the model has the right capacity when it can achieve good results on both the training and validation data.