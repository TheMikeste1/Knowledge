---
type: model
---
*Least-squares regression* finds the line with the least amount of vertical loss between the all points provided in the training data. Its [[Loss Function|objective function]] is:
$$
L(\mathbf{w}) = \frac{1}{n}\sum^n_{i = 1}{(\mathbf{x}^T \mathbf{w} - y_i)^2}
$$
Notice that it finds the average square distance from the actual label. Squaring the distance not only ensures all loss is positive, but also makes larger distances penalized more than smaller distances.

The best model, $\mathbf{w}^*$ in least-squares regression can be defined as $\mathbf{w}^* = \text{min} \; L(\mathbf{w})$ meaning it is the model with the lowest loss as defined above. Note that there **can** be more than one ideal $\mathbf{w}^*$.