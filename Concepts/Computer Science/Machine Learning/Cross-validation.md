---
type: technique
tags:
related:
  - "[[Hyperparameter Optimization]]"
---
*Cross-validation* is a [[Model Validation|model validation]] technique used to decrease the randomness of dividing datasets into training and validation sets. It involves splitting a dataset up into different subsets or *folds*. For each fold, a fresh model is created and trained using the fold as its validation set and the other folds as its training set. Each model should have the same architecture and [[Hyperparameter|hyperparameters]] (including the seed) so that the model architecture is properly tested.

Cross-validation is particularly useful on small datasets where it won't take much to train multiple models. Larger datasets, however, don't benefit as much since the validation set should have a fair sample of all the data, so cross-validation would just increase the training time.

> [I]f your model takes a couple minutes or less to [train], it's probably worth switching to cross-validation.
> ~ <https://www.kaggle.com/code/alexisbcook/cross-validation>

Scikit-learn provides a simple function to perform cross validation:
```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(my_pipeline, x, y,
                              cv=5,
                              scoring='neg_mean_absolute_error')
model_goodness = scores.mean()  # Will be negative per scikit-learn convention; closer to 0 is better
```
