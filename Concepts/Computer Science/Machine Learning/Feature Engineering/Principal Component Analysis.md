---
type: technique
aliases:
  - PCA
---
*Principal component analysis*, or *PCA*, is a technique to discover correlations between features in a dataset. It can be used on numerical features to create new features or explore the data.

> [!WARNING]
> PCA should be applied on [[standardized]] data. Make sure to standardize your data unless you have a very good reason not to and you know what you're doing.

When comparing two features, PCA essentially draw two new diagonal axes running from the top-left of a graph to the bottom-right (PC2), and from the bottom-left to the top-right (PC1). For each additional feature, add an additional axis. Often, one can assign names for these axes. If we were comparing Height x Diameter, the axis running up and right could be called "Size" because a larger diameter and height means a larger size. Additionally, the axis running down and right could be called "Shape" or perhaps "Roundness" since the height and diameter directly contribute to the shape of the object. Each axis is [[orthogonal]] to the others, and is a description of the feature's [[variation]].

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Principal Component Analysis},
        xlabel={Height},
        ylabel={Diameter},
        grid=major,
        xmin=0, xmax=10,
        ymin=0, ymax=10,
        width=12cm, height=12cm,
        axis equal image, % Ensures that the scaling is the same on both axes
    ]

    % Scatter plot data
    \addplot[only marks, mark=*, blue, mark size=1.5pt] table {
        x y
        2.5 2.4
        3.5 3.6
        4.5 4.2
        5.5 5.4
        6.5 6.2
        7.5 7.1
        2.1 2.8
        3.2 3.1
        4.1 4.9
        5.2 5.8
        6.1 6.9
        7.2 7.8
        2.8 2.1
        3.9 3.2
        4.8 4.3
        5.9 5.1
        6.8 6.3
        7.9 7.2
    };

    % PCA 1: "Size" (captures the main variance)
    \draw[->, ultra thick, red] (axis cs:1,1) -- (axis cs:9,9) node[pos=1, anchor=south] {Size (PC1)};

    % PCA 2: "Shape" (orthogonal to PC1)
    \draw[->, ultra thick, orange] (axis cs:1,9) -- (axis cs:9,1) node[pos=1, anchor=north] {Shape (PC2)};

    \end{axis}
\end{tikzpicture}
\end{document}
```

The new features (size and shape) are called *principal components* and for each datapoint are weighted sums of the features used in PCA. The weights of used in the sum are called *loadings*, and there is one for each principal component.

The principle components can be used as new features themselves, or they can be used for other feature engineering, such as [[Mutual Information|MI]] or [[Feature Selection]].

> [!INFO]
> PCA is sensitive to outliers. It may be beneficial to remove outliers when running PCA.