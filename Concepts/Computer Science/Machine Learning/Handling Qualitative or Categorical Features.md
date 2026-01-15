---
type: guide
related:
  - "[[Feature]]"
---
Qualitative [[Feature|features]] are features that are non-quantitative. They represent some kind of grouping or category. For example, the type of car (sedan, SUV, truck, etc.) is categorical. Additionally, just because a feature is numeric does not mean it's ordinal. Zip codes, for example, are numeric but no one zip code is "higher" than another.

Machine learning models do not understand non-numeric values. As such, qualitative [[Feature|features]] need to be handled in some way so the model can understand them. There are three basic approaches, and many more [[Advanced Handling Qualitative Features|advanced techniques]].

## Drop Qualitative Features

**Pros**
- Simple
- Requires no further thought
**Cons**
- Data loss

This strategy works best when the feature does not provide information relevant to the label. It generally performs the worst.

## Ordinal Encoding
Each unique value can be assigned some numeric value. For example, "sedan" could be assigned a 0, "SUV" a 1, and "truck" a 2.

**Pros**
- Easy
- Some categories lend themselves to this technique. "Never" < "Rarely" < "Every day". These are called *ordinal features*. ^4ac95e

**Cons**
- Implies a (potentially false) ordinal relationship between different categories. How can one person's favorite color be "higher" than another? This could be a pro for [[#^7e9b07|nominal features]].

This strategy works best with some models, such as [[Decision Tree]] or [[Random Forest]]. It also works well with [[#^4ac95e|ordinal features]] or when there are too many unique categories.

## One-Hot Encoding
*One-hot encoding* involves creating a new feature for each possible value. The row will have a 1 for the feature if it had that value, and a 0 if it didn't.

**Pros**
- Implies no ordinal relationship between the categories. This could be a con for [[#^4ac95e|ordinal features]].
- Some categories, such as colors, are better for this type of encoding. These are called *nominal features*. ^7e9b07

**Cons** 
- Increases dimensionality, potentially by a large amount

This strategy works best when the category does not have a lot of possible values ([15 or less](https://www.kaggle.com/code/alexisbcook/categorical-variables)). It generally performs the best.