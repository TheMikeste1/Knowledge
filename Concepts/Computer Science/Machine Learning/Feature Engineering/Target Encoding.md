---
type: technique
---
*Target encoding* is an alternative to [[One-hot Encoding]] and [[Label Encoding]]. It is particularly useful for categories with many possible values, or when other techniques struggle to expose the importance of the category to the [[Label]].

Target encoding is any encoding that uses the target to turn a category into a number. An example is calculating the average price of computers depending on their manufacturer. Since it uses the target as part of the encoding process, extra care must be taken to avoid [[Data Leakage#Target Leakage|target leakage]]. Nevertheless, it can be useful to add information about the category to the feature set.

There are a couple techniques that can be used to mitigate the target leakage issue. First, the encoding can use only a subset of the training data, called the *encoding split*. This split should be taken from the train split. Second, *smoothing* can be applied to the resulting number. Smoothing involves turning the output into a weighted average between the global output and the value-specific output. This has the added advantage of rounding-out rare categories and providing a value for categories that do no exist in the encoding split.

The weight for smoothing is typically calculated with a *smoothing factor* $m$. Specifically,
$$
w = \frac{n}{n + m}
$$
where $w$ is the weight, $n$ is the number of times the category occurs in the encoding split, and $m$ is a [[Hyperparameter]] chosen by the developer. If the target varies quite a bit for the category being encoded, a larger $m$ is more beneficial. Then, to calculate the encoded value:
$$
v = w \cdot \bar{x}_\text{category} + (1 - w) \cdot \bar{x}_\text{global}
$$
where $v$ is the result, and $\bar{x}$ is the average for either the category or global.