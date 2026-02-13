---
type: algorithm
aliases:
  - MI
---
*Mutual information* (*MI*) is a [[feature utility metric]] that measures the relationship between two quantities. This is similar to correlation, except mutual information can measure any kind of relationship while correlation can only measure linear relationships. Mutual information is a good general-purpose metric, especially when used at the start of [[Feature Engineering]] or if you don't know which model you'd like to use yet.

Mutual information measures relationships using *uncertainty*, aka *[[Entropy|entropy]]*. Specifically, it measures how knowledge of on quantity reduces the uncertainty of the other. MI is a [[Logarithmic|logarithmic]] scoring system. The lowest possible MI score is $0.0$, which means the two quantities are independent. The higher the value, the more related the two values are. Generally speaking, values above $2.0$ are rare.

Be aware, however, that MI only indicates the relationship between **two** quantities, such as the target and a feature. It is [[univariate]], meaning it cannot describe the information a feature provides when combined with other features. Additionally, the feature must be able to be understood by the model. If the model cannot learn it, it may need to be transformed first.