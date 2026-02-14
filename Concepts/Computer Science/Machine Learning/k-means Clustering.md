---
type: model
aliases:
  - k-means
---
*k-means clustering* is an [[Unsupervised Learning]] algorithm that clusters datapoints to groups based on how similar they are to each other. Specifically, k-means uses the [[Euclidean Distance]] to $k$ points, called *centroids*. A point belongs to the group associated with whichever point is closest. The [[Hyperparameter]] $k$ is chosen by the developer before applying the algorithm.

> [!TIP] The groups and boundaries created by a k-means algorithm can easily be visualized by a [[Voronoi Tessallation]].

k-means is useful for discovering information and relationships between datapoints, which can be used for a number of applications including [[Feature Engineering]]. k-means can be applied using one or more features, and the group to which each datapoint belongs can be added as a new feature. This serves as a type of [[binning]] for a single feature or [[Vector Quantization|multi-dimensional binning/vector quantization]] for multiple. This technique is very effective for complex datasets and features that many be difficult for a model to interpret on its own.

## Algorithm

> [!WARNING]
> k-means is sensitive to scale and levels of variance. If features are on the same scale they do not need to be rescaled. However, if any features are not on the same scale (e.g. height and weight), they need to be rescaled or normalized **before** running the algorithm.
>>[!DANGER]
>> Notice the word "scale," not "unit." Two features can use the same unit but be on a different scale. For example, height and arm-length can both be measured in feet, but arm-length is usually about half of height: they're not on the same scale. Same with variance: if two features average to the same value, but one varies much more in the population, they should be rescaled.

1. Place $k$ centroids randomly in the feature space
2. Assign datapoints to the nearest centroid
3. Move the centroids to minimize the distance to their datapoints
4. Repeat steps 2 & 3 $n$ times or until the centroids stop moving

Due to the random nature of step 1, k-means does not always produce good clusters. It is common to repeat the entire algorithm multiple times, then choosing the arrangement with the smallest total distance for each centroid to its points.

For a k-means with many clusters, it is beneficial to increase $n$. For particularly complex datasets, it is beneficial to increase the number of time the algorithm is run.