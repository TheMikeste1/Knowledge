A dataset can easily split into test and train using `scikit-learn`:
```python
from sklearn.model_selection import train_test_split

# Where `x` is the features and `y` are the labels
train_x, test_x, train_y, test_y = train_test_split(x, y)
```