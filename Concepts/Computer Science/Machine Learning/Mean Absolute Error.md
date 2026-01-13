---
type: algorithm
aliases:
  - MAE
---
*Mean Absolute Error* (*MAE*) calculates the average absolute error for a given prediction. For example, if the model predicted a pizza cost $20 but it actually cost $35, the MAE would be $15.
$$
\text{MAE}(\epsilon) = \frac{\sum{|\epsilon|}}{\text{count}(\epsilon)}
$$
```python
error: list[float]
mae: float = sum(map(abs, error)) / len(error)
assert mae >= 0
```
