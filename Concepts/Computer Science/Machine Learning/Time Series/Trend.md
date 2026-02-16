---
type: definition
---
One of the components of time series data are *trends*, which are "persistent, long-term change\[s\] in the mean of the series."[^1] Trends are slow-moving, and provides the biggest picture of the data (or, at least, the biggest picture we care about). Trends are often visualized using a moving average plot. Once we know the shape of the trend, we can enhance the dataset by adding the required components of time as a feature. For example, for a simple linear trend, all we need is the normal, linear time dummy. For a parabola-shaped trend, we need the linear time dummy and the square of the time dummy. The following table and graph provide an example of such a dataset. Linear regression is able to be used for this dataset because it will learn the coefficients $a$, $b$, and $c$ in the polynomial equation for a parabola: $v = a\,\text{time}^2 + b\,\text{time} + c$.

| Time | Squared Time | Value |
| ---- | ------------ | ----- |
| 0    | 0            | 22    |
| 2    | 4            | 17    |
| 4    | 16           | 15    |
| 6    | 36           | 12    |
| 8    | 64           | 11    |
| 10   | 100          | 10    |
| ...  | ...          | ...   |

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Time Series with a Parabolic Trend},
        xlabel={Time},
        ylabel={Value},
        grid=major,
        width=12cm, height=8cm,
    ]
    % Noisy time series data
    \addplot[only marks, mark=*, blue, mark size=1.5pt] coordinates {
        (0, 22) (2, 17) (4, 15) (6, 12) (8, 11) (10, 10) (12, 11) (14, 12) (16, 15) (18, 18) (20, 20) (22, 24) (24, 28) (26, 33) (28, 38) (30, 45) (32, 55) (34, 62) (36, 70) (38, 85) (40, 98)
    };
    \addlegendentry{Time Series Data}

    % Trend line
    \addplot[red, thick, domain=0:40, samples=100, no marks] {0.1*x^2 - 2*x + 20};
    \addlegendentry{Trend}
    \end{axis}
\end{tikzpicture}
\end{document}
```


---
[^1]: <https://www.kaggle.com/code/ryanholbrook/trend>
