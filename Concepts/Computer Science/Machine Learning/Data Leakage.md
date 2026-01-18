---
type: definition
aliases:
  - leakage
---
*Data leakage* occurs when the training [[Feature|features]] include information about the target, but said information will not be available when the model is used for prediction. This results in good performance on the training and validation data, but failure in production.

Data leakage is a serious and common problem in machine learning and can be broadly categorized into two types: **target leakage** and **train-test contamination**.

## Target Leakage
*Target leakage* occurs when a feature includes data that is created or updated *after* the target outcome is known.

For example, in a model predicting if a patient "Got Sick", a feature like "Prescribed Medicine" is a clear source of leakage. A doctor prescribes medicine *because* the patient is sick, so the feature only exists as a result of the target outcome.

Alternatively, imagine predicting whether a new user "will subscribe" to a service. You have a feature called `user_profile_completion_percentage`. However, you notice that many users who subscribe are prompted to complete their profile *after* they have already paid for their subscription. In this case, the profile completion data is updated *after* the target event (subscribing) occurs, introducing target leakage.

As a rule, any variable whose value is influenced by the target outcome should be discarded or handled very carefully.

### Detection
Sometimes it can be difficult to detect if a feature is a source of target leakage.

#### Manual Inspection
If a model performs abnormally well (accuracies in the high 90%), it is very possible one or more features are leaking information about the target. In these cases, compare suspicious features against the target to see how a feature correlates with the target. It may be beneficial to ask yourself for each feature, "At the moment of prediction, would I have access to this information?"

Using the example above, if almost everyone who got sick also was prescribed medicine and almost no one who didn't get sick also was prescribed medicine, "Prescribed Medicine" is likely a source of target leakage.

## Train-Test Contamination
*Train-test contamination* is a more subtle form of leakage that occurs when the validation or test data influences the training process. This can happen even if your features are free of target leakage.

The most common cause is fitting preprocessing steps on the entire dataset instead of just the training data. For example, if you use `StandardScaler` to scale your data and you fit it on the combined training and validation sets, you have "contaminated" your training process. The scaler has learned the mean and standard deviation from the validation data, giving your training data information about the validation set that it shouldn't have.

To avoid this, any type of "fitting"– including preprocessing encoders, scalers, and imputers—must be done using **only the training data**. You then use the fitted preprocessor to `transform` the training, validation, and test sets.

The thought of excluding validation data from preprocessing may feel uncomfortable or counterintuitive. However, remember that training and validation is used to see how the model performs on new, never before seen data to emulate the real world. Once the model is solidified and is being trained for production, [[Training#^df5b24|all validation data will be used as part of fitting the model]].

## Prevention Strategies

1. **Create a Temporal Cutoff:** For time-series data, this is the most important step. Split your data into training, validation, and test sets based on time. For example, you might train on data from 2020-2022, validate on Jan-Jun 2023, and test on Jul-Dec 2023. This ensures you are always predicting the "future" using only the "past".
2. **Use Pipelines:** Tools like `sklearn.pipeline.Pipeline` are designed to prevent train-test contamination. A pipeline bundles preprocessing and modeling steps. When you call `.fit()` on a pipeline, it correctly fits the preprocessors on only the training data and then transforms it, ensuring the validation set is never used for fitting.
3. **Hold Out a Final Test Set:** Before you even begin exploring the data, split off a test set and do not touch it until you have a final, chosen model. Your validation set is used for model selection and hyperparameter tuning, but the final test set provides the most-honest assessment of your model's expected performance.

#TODO
- [ ] Practice using `sklearn.pipeline.Pipeline` to bundle a preprocessor (like `StandardScaler` or `OneHotEncoder`) and a model.
- [ ] Clearly understand the difference between the `.fit()`, `.transform()`, and `.fit_transform()` methods in scikit-learn and why they are critical for preventing leakage.
- [ ] Take a time-series dataset and practice creating a proper time-based split for validation.
- [ ] Find a real-world dataset and try to identify subtle forms of potential target leakage by analyzing the feature descriptions.
