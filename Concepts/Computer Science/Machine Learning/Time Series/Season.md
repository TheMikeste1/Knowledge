---
type: definition
---
A *season* is a regular, periodic change in a [[Time Series]]. A season can occur over a day, a month, a year, or any other period of time. Depending on that dataset, there may be seasons intuitively present, such as the number of sales of lemonade. For other datasets, seasons may be less immediately apparent.

Seasons can be visualized through a *seasonal plot*. To create a seasonal plot, simply select the period you want to graph, then plot the segments of the data onto the plot. For example, if the period is "week", plot all data that falls on a Monday on the Monday day of the plot, all the Tuesdays on Tuesday, etc. The result will be a plot of multiple "threads" showing the seasonal changes.

*Seasonal indicators* are binary features similar to [[One-hot Encoding]]. To create a seasonal indicator, take the timestep and encode it according to what part of a season it is a part of. For example, for a weekly period create a new feature for each day of the week and put a 1 for datapoints that fall on a Monday in the Monday column, etc. Seasonal indicators are particularly useful for short seasons because they tell the model exactly what part of a season the data is in. ^44e382

> [!TIP]
> [[Linear Regression]] often works best if there is at least one situation where all encoding features are 0, so it may be best to drop one of the feature columns (e.g. drop Monday, since no one likes Mondays).

An alternative to seasonal indicators are *Fourier features*, which are better for long seasons. Fourier features attempt to capture the shape of the seasonal change using a few features to describe the curve. Specifically, Fourier features consists of pairs with a [[Sine]] and [[Cosine]] each. These curves can be combined to create an approximation of the season, similar to a [[Fourier Transform]]. For each Fourier feature, the output of the sine and cosine functions is saved as a feature for each datapoint. That means that two new columns, one for sine and the other for cosine, is added for each Fourier feature.

More Fourier features means more ability to express seasons. However, too many will cause the performance to degrade and the season overfit. As such, it is important to choose the correct number of features for the dataset. A tool to assist with choosing the number of Fourier features is the *periodogram*, which simply shows the strength of various frequencies in the timescale. Specifically, the x-axis is the frequency and the y-axis is the *power* or *strength* of the period, which is calculated as $\frac{a^2 + b^2}{2}$ where $a$ and $b$ are the coefficients for sine and cosine for the given frequency. Given a periodogram, we can identify the shortest period we'd want to represent (excluding those better represented through [[#^44e382|indicators]]) and use the required number of features for that period. More than one set of features can be added.

The graph below is an example periodogram with frequencies modeled over one year. The x-axis provides the period and the number of Fourier features required in parentheses, e.g. $\text{Annual (1)}$ is the annual frequency and requires one Fourier feature. The reason annual requires one Fourier feature is because, in this example, it is the season for which we are generating Fourier features. This is called the *base period*. If the season were weekly, weekly would be the base period instead, and if it the season were every 6 months then 6 months would be the base period and would require 1 Fourier feature.

```tikz
\usepackage{pgfplots}
\pgfplotsset{compat=1.16}
\begin{document}
\begin{tikzpicture}
    \begin{axis}[
        title={Periodogram for a yearly season},
        ybar,
        bar width=20pt,
        enlarge x limits=0.15,
        xlabel={Period (\# Fourier features)},
        ylabel={Power},
        ymin=0,
        symbolic x coords={Annual (1), Semiannual (2), Quarterly (4), Bimonthly (6), Monthly (12), Weekly (52), Daily (365)},
        xtick=data,
        nodes near coords,
        nodes near coords align={vertical},
        x tick label style={rotate=45, anchor=east},
    ]
    \addplot[fill=teal] coordinates {(Annual (1), 0.8) (Semiannual (2), 0.5) (Quarterly (4), 0.3) (Bimonthly (6), 0.1) (Monthly (12), 0.4) (Weekly (52), 0.6) (Daily (365), 0.2)};
    \end{axis}
\end{tikzpicture}
\end{document}
```