---
type: definition
related:
  - "[[Overfitting]]"
---
*Underfitting* occurs when a model fails to capture important patterns, or *signal*, in the data. This can be caused by
- Insufficient [[training]]
- Insufficient samples
- Missing important [[Feature|features]] in the data
- Excessive [[regularization]]
- The model being too simple
Among other causes.

If the training loss and [[Model Validation|validation loss]] stay "hockey stick" shaped and validation loss never gets worse or the model never achieves good accuracy on either set, the model is likely underfitting and needs to increase its [[Capacity]].

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Underfitting: Training and Validation Loss},
        xlabel={Epochs},
        ylabel={Loss},
        grid=major,
        legend pos=north east,
        xmin=0, xmax=10,
        ymin=0, ymax=1.3, % Adjusted ymax for new higher values
        width=10cm, height=6cm
    ]
    \addplot[blue, smooth, thick, mark=*, mark size=1.5pt] coordinates {
        (0, 1.2)
        (1, 1.0)
        (2, 0.98)
        (3, 0.97)
        (4, 0.965)
        (5, 0.962)
        (6, 0.961)
        (7, 0.96)
        (8, 0.96)
        (9, 0.96)
        (10, 0.96)
    };
    \addlegendentry{Training Loss}

    \addplot[red, smooth, thick, mark=square*, mark size=1.5pt] coordinates {
        (0, 1.25)
        (1, 1.05)
        (2, 1.03)
        (3, 1.02)
        (4, 1.015)
        (5, 1.012)
        (6, 1.011)
        (7, 1.01)
        (8, 1.01)
        (9, 1.01)
        (10, 1.01)
    };
    \addlegendentry{Validation Loss}

    \end{axis}
\end{tikzpicture}
\end{document}
```