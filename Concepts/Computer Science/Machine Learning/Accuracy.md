---
type: definition
---
*Accuracy* describes how often a classification model is correct. Accuracy is defined as the number of times the model was correct, or, more formally,
$$
\text{accuracy} = n_{\text{correct}} / n_{\text{total}}
$$

As a [[Loss Function]], accuracy fails because it is discrete: it changes in jumps. Loss functions need to be continuous. Instead, [[Cross-entropy]] can be used.