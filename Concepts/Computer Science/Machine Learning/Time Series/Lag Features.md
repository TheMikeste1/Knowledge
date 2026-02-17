---
type: definition
---
*Lag features* are a repetition of another feature offset by some timestep. For example, with a lag of 1 the feature from the previous timestep can be included as a lag feature in the current timestep. This is more easily visualized in [[#^232c70|the table below]].

| Time | Value | Lag 1 | Lag 2 |
| ---- | ----- | ----- | ----- |
| 0    | 123   | N/A   | N/A   |
| 1    | 456   | 123   | N/A   |
| 2    | 789   | 456   | 123   |
| 3    | 1000  | 789   | 456   |
^232c70

Lag features are beneficial when the current result is correlated with the previous result. This is called *serial dependence*. The correlation can be visualized through a plot, or the correlation can be calculated through statistical methods such as [[Mutual Information|MI]]. It can be additionally beneficial to create a *lag plot*, which plots the value against the lag value. If a relationship appears, such as a linear or any other type of relationship, the lag feature may be beneficial.

It can be difficult to know what lag level to use. Longer lags can also include solely information from previous lags, making them redundant. To help choose which lags to use, we can use *partial autocorrelation*, which indicates if the lag contributes something new. It can be visualized using a *correlogram* to see which lags are useful. However, autocorrelation can only measure linear dependence, so it can still be beneficial to create a lag plot or [[Mutual Information|MI]] to identify nonlinear correlations.