---
type: algorithm
ml_task_type:
  - classification
aliases:
  - BCE
---
A classification model attempts to achieve the highest probability of guessing the correct [[Label]]. *Cross-entropy* serves to measure the "distance" between probabilities. A low cross-entropy means the model is closer to a probability of 1.0, while a higher means it's closer to 0.0.


Cross-entropy has a couple different formulas depending on classification task. For binary tasks (one or the other):
$$
\text{loss} = -[y\log{(\hat{y})} + (1 - y)\log{(1 - \hat{y})}]
$$
Where $y$ is the true label (either 0 or 1), and $\hat{y}$ (y-hat) is the model's predicted probability that $y=1$.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Binary Cross-Entropy Loss},
        xlabel={Predicted Probability of y=1},
        ylabel={Loss},
        grid=major,
        xmin=0, xmax=1,
        ymin=0, ymax=5,
        width=10cm, height=7cm,
        samples=100
    ]
    % Corresponds to the -log(y_hat) term when y=1
    \addplot[blue, smooth, thick, domain=0.001:0.999] {-ln(x)};
    \addlegendentry{Loss for y = 1}

    % Corresponds to the -log(1-y_hat) term when y=0
    \addplot[red, smooth, thick, domain=0.001:0.999] {-ln(1-x)};
    \addlegendentry{Loss for y = 0}
    \end{axis}
\end{tikzpicture}
\end{document}
```

Categorical (one of many):
$$
\text{loss} = -\sum_{c = 1}^M y_{o,c}\log{(\hat{y}_{o,c})}
$$
where $y_{o,c}$ is a 1 if the category $c$ was correct and a 0 otherwise, and $\hat{y}_{o,c}$ is the prediction probability that the observation $o$ is $c$.

The bar charts below attempts to illustrate loss for a good and bad prediction between three categories. For both charts, the correct answer is $A$. A good prediction assigns a high probability to the correct class, resulting in a low loss. A bad prediction assigns a low probability, resulting in a high loss.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Good Prediction (Low Loss). Correct answer: A},
        ybar,
        bar width=20pt,
        enlarge x limits=0.5,
        xlabel={Class},
        ylabel={Probability},
        ymin=0, ymax=1,
        symbolic x coords={A, B, C},
        xtick=data,
        nodes near coords,
        nodes near coords align={vertical},
    ]
    \addplot[fill=teal] coordinates {(A, 0.8) (B, 0.15) (C, 0.05)};
    \end{axis}
\end{tikzpicture}
\end{document}
```

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Bad Prediction (High Loss). Correct answer: A},
        ybar,
        bar width=20pt,
        enlarge x limits=0.5,
        xlabel={Class},
        ylabel={Probability},
        ymin=0, ymax=1,
        symbolic x coords={A, B, C},
        xtick=data,
        nodes near coords,
        nodes near coords align={vertical},
    ]
    \addplot[fill=teal] coordinates {(A, 0.2) (B, 0.5) (C, 0.3)};
    \end{axis}
\end{tikzpicture}
\end{document}
```

With this loss function, binary tasks typically use the [[Sigmoid]] [[Loss Function]], while categorical use [[Softmax]].