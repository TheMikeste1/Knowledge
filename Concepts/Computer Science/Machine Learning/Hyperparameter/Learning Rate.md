---
type: definition
---
The *learning rate* is a [[Hyperparameter|hyperparameter]] that determines by how much a model shifts when it updates. Some [[Optimizer|optimizers]], such as [[Adam]], use a variable learning rate to take advantage of both larger and smaller learning rates.

A smaller rate means the model learns more slowly, but is less likely to overshoot. However, smaller rates are also more likely to get stuck in local minima. Larger rates can escaped these minima, but have trouble also have difficult settling in minima, including the global minimum. This can cause the training to fail entirely.