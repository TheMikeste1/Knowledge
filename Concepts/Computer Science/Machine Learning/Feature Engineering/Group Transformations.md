---
type: technique
---
*Group transformations* or *group transforms* aggregate information across multiple datapoints. For example, from dataset of family incomes, one could calculate the average income for each state. This specific transform could then also be used to calculate the ratio for the family vs the average state income.

Another type of group transform is *frequency encoding*, which is when the frequency of a categorical feature is added to the set. For example, a dataset might have "Red" appear 20% of the time for the "Car Color" feature.

When training, it's best to create a grouped feature using only the training set to avoid [[Data Leakage#Train-Test Contamination|data leakage]] from the validation set.