*Lag features* are a repetition of another feature offset by some timestep. For example, with a lag of 1 the feature from the previous timestep can be included as a lag feature in the current timestep. This is more easily visualized in [[#^232c70|the table below]].

| Time | Value | Lag 1 | Lag 2 |
| ---- | ----- | ----- | ----- |
| 0    | 123   | N/A   | N/A   |
| 1    | 456   | 123   | N/A   |
| 2    | 789   | 456   | 123   |
| 3    | 1000  | 789   | 456   |
^232c70

Lag features are beneficial when the current result is correlated with the previous result. This is called *serial dependence*. The correlation can be visualized through a plot, or the correlation can be calculated through statistical methods.