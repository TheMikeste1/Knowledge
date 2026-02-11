---
type: definition
related:
  - "[[Underfitting]]"
---
*Overfitting* occurs when a model is too tightly tuned to its training data. This causes it to be very accurate on the training data, but perform poorly on new data or [[Model Validation|validation data]]. This disparity is due to the model learning the data, or *noise*, rather than the pattern, or *signal*, associated with the data. Overfitting is caused by
- Too much training
- The model being too complex
- Datasets that are too small
- Too many [[Feature|features]]
- Noise datasets
- Insufficient [[Regularization|regularization]]
- Extreme [[Outlier|outliers]]
- Unintentionally including information about the [[Label|label]]

If the validation loss does not improve while training loss improves, the model is likely overfitting. The model may need to reduce its [[Capacity]] (especially if it overfits early) or use [[Early Stopping]].

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Overfitting: Training and Validation Loss},
        xlabel={Epochs},
        ylabel={Loss},
        grid=major,
        legend pos=north east,
        xmin=0, xmax=10,
        ymin=0, ymax=1,
        width=10cm, height=6cm
    ]
    \addplot[blue, smooth, thick, mark=*, mark size=1.5pt] coordinates {
        (0, 0.8)
        (1, 0.6)
        (2, 0.4)
        (3, 0.3)
        (4, 0.2)
        (5, 0.15)
        (6, 0.1)
        (7, 0.08)
        (8, 0.06)
        (9, 0.05)
        (10, 0.04)
    };
    \addlegendentry{Training Loss}

    \addplot[red, smooth, thick, mark=square*, mark size=1.5pt] coordinates {
        (0, 0.85)
        (1, 0.65)
        (2, 0.45)
        (3, 0.30)
        (4, 0.25) % Optimal point
        (5, 0.35)
        (6, 0.45)
        (7, 0.6)
        (8, 0.7)
        (9, 0.8)
        (10, 0.9)
    };
    \addlegendentry{Validation Loss}

    % Adding a dashed line to indicate the optimal point for validation loss
    \draw[dashed, gray] (axis cs:4,0.25) -- (axis cs:4,0);
    \node[below, gray] at (axis cs:4,0) {Optimal Epoch};

    \end{axis}
\end{tikzpicture}
\end{document}
```
