---
type: guide
---
Sometimes, features can be developed into new, more descriptive features. Feature creation has the potential to enhance model performance, decrease training time, and increase accuracy. To discover and create new features, one needs to
- Understand the current features
    - Read the dataset's documentation, if it exists
    - Research the domain
- Understand the domain
    - Research the domain
    - Talk to experts
- Understand the problem
    - Study previous work
Additionally, visualizing the data can help enhance understanding and reveal relationships.

There are four main ways to create new features:
- [[Mathematical Transformations]]
- [[Counts]]
- [[Building-up and Breaking-down Features]] 
- [[Group Transformations]]

> [!TIP] Tips on Creating Features from [Kaggle](https://www.kaggle.com/code/ryanholbrook/creating-features?scriptVersionId=126574294&cellId=24)
> $\text{``}$It's good to keep in mind your model's own strengths and weaknesses when creating features. Here are some guidelines:
> - Linear models learn [[Mathematical Transformations|sums and differences]] naturally, but can't learn anything more complex.
> - [[Mathematical Transformations|Ratios]] seem to be difficult for most models to learn. Ratio combinations often lead to some easy performance gains.
> - Linear models and neural nets generally do better with [[Mathematical Transformations|normalized features]]. Neural nets especially need features scaled to values not too far from 0. Tree-based models (like random forests and [[XGBoost]]) can sometimes benefit from normalization, but usually much less so.
> - Tree models can learn to approximate almost any [[Building-up and Breaking-down Features|combination of features]], but when a combination is especially important they can still benefit from having it explicitly created, especially when data is limited.
> - [[Counts]] are especially helpful for tree models, since these models don't have a natural way of aggregating information across many features at once.$\text{''}$
