---
type: guide
related:
  - "[[Feature]]"
---
Models need complete data in other to functions. If a [[Feature|feature]] is missing data in some of its rows, meaning it is NaN, null, or some other empty value, corrective action needs to be taken so models can consume it as input.

Generally, there are three approaches to dealing with missing data.

## Drop the Feature

One of the simplest options is to drop the feature entirely. This is the most extreme option, can is also the simplest.

**Pros**
- Simple
- No additional thought or strategy is required

**Cons**
- Data loss

This strategy is best for when the column is mostly empty or is known to not be relevant to the [[Label|label]].

## Imputation
*Imputation* fills the missing fields with some value. This could be the mean, median, 0, or some any other value.

**Pros**
- No loss of data
- The feature remains usable

**Cons**
- The filled value might mislead the model
- Requires some thought to determine the best way to replace the value

This strategy is best used when the feature is mostly complete and is relevant to the [[Label|label]]. It is generally considered the "standard" approach.

Research has found the mean value often works quite well #citation-needed. There are more complex techniques, but these generally do not provide additional benefit in more complex models. However, it should be noted that sometimes it is better to use a flat value, such as 0, to indicate the value was missing. For example, if a house doesn't have a garage it may make more sense to set a "Garage Built Year" to a very large value rather than the mean.

Common tools to impute automatically include `sklearn.impute.SimpleImputer`.
## Flagged Imputation
*Flagged imputation* is the same as [[#Imputation]], but also adds an additional feature indicating if the feature was missing, usually as a boolean.

**Pros**
- Same as Imputation
- Provides additional context to the model

**Cons**
- Same as Imputation, however the filled value is less likely to mislead the model

This strategy is best used in the same cases as Imputation. It might perform better than normal Imputation when the missing value indicates something special about the datapoint or the filled value is significantly off, though it also might not help at all.