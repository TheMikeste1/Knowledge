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
### k-Fold Cross-Validation
A common method for cross-validation is k-fold cross-validation. The table below illustrates the process with 5 folds (k=5). In each iteration, a different fold is used as the validation set, while the remaining folds are used for training.

| Iteration | Fold 1  | Fold 2  | Fold 3  | Fold 4  | Fold 5  |
| :-------: | :-----: | :-----: | :-----: | :-----: | :-----: |
|     1     | **Val** |  Train  |  Train  |  Train  |  Train  |
|     2     |  Train  | **Val** |  Train  |  Train  |  Train  |
|     3     |  Train  |  Train  | **Val** |  Train  |  Train  |
|     4     |  Train  |  Train  |  Train  | **Val** |  Train  |
|     5     |  Train  |  Train  |  Train  |  Train  | **Val** |

Scikit-learn provides a simple function to perform k-fold cross-validation:
```python
from sklearn.model_selection import cross_val_score

scores = cross_val_score(my_pipeline, x, y,
                              cv=5,
                              scoring='neg_mean_absolute_error')
model_goodness = scores.mean()  # Will be negative per scikit-learn convention; closer to 0 is better
```

### Other Types of Cross-Validation
#TODO: Research and add notes on the following specific types of cross-validation:
- **Leave-one-out cross-validation (LOOCV)**: How is it different from k-fold? When is it useful?
- **Stratified k-fold cross-validation**: What problem does it solve, especially in classification tasks?
- **Repeated k-fold cross-validation**: Why would you repeat k-fold cross-validation?
- **Time series cross-validation**: How do you handle the temporal dependency in time series data during cross-validation?
