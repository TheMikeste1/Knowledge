---
type:
aliases:
  - leakage
---
*Data leakage* occurs when the training [[Feature|features]] include information about the target, but said information will not be available when the model is used for prediction. This results in good performance on the training and validation data, but failure in production.

## Target Leakage
*Target leakage* is a form of data leakage that occurs when features include data that will not be available or current when it's time to make predictions. For example, consider the table below:

| Got Sick | Gender | Age | Prescribed Medicine |
| -------- | ------ | --- | ------------------- |
| False    | Male   | 42  | False               |
| False    | Female | 32  | False               |
| True     | Male   | 12  | True                |
Only those who got sick would be prescribed medicine, so the "Prescribed Medicine" column reveals information about the target that would not be available when the model is used in production. As such, the "Prescribed Medicine" feature should be pruned from the input features.

This example is fairly obvious, but other instances of target leakage are less clear. As a rule, any variable that is updated or created *after* the target is set should be discarded.

Note that there may be a "chain" effect where an excluded feature impacts other features, meaning all these other features will be a source of target leakage.

### Detection
Sometimes it can be difficult to detect if a feature is a source of target leakage.

#### Manual Inspection
If a model performs abnormally well (accuracies in the high 90%), it is very possible one or more features are leaking information about the target. In these cases, compare suspicious features against the target to see how a feature correlates with the target.

Using the example above, if almost everyone who got sick also was prescribed medicine and almost no one who didn't get sick also was prescribed medicine, "Prescribed Medicine" is likely a source of target leakage.

## Train-Test Contamination
*Train-test contamination* occurs when the validation data impacts the way preprocessing behavior, which causes the training data to subtly include information it shouldn't have. To avoid this problem, validation data should be excluded from any type of fitting, including fitting in the preprocessing steps such as [[Handling Qualitative or Categorical Features#Ordinal Encoding|ordinal encoding]].

The thought of excluding validation data from preprocessing may feel uncomfortable or counterintuitive. However, remember that training and validation is used to see how the model performs on new, never before seen data to emulate the real world. Once the model is solidified and is being trained for production, [[Training#^df5b24|all validation data will be used as part of fitting the model]].