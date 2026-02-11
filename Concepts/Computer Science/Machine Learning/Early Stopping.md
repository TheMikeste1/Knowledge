---
type: technique
---
*Early stopping* is a common technique used to prevent [[Overfitting]] while avoiding [[Underfitting]]. Essentially, once [[Model Validation]] indicates that the model is not improving or is getting worse due to overfitting, training can be stopped even if the target number of [[Epoch|epochs]] hasn't been reached.

Additionally, it is common to save the best weights a model achieves and restore them when using early stopping. This allows early stopping to "peak" ahead further than it needs to ensure it really is time to stop without sacrificing a better performing model.