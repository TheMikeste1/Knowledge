---
type: overview
---
*Time series* involves forecasting a value using observations recorded over time. This differs from other prediction tasks in that time series uses observations of the target over time, whereas others use features to predict the target.

Time series datasets usually have or will have [[Feature Engineering|engineered]] two primary types of features: [[Time-step Features]] and [[Lag Features]]. Additionally, time series data have four main components: [[Concepts/Signal|noise/signal/error]], [[Season|seasons]], [[Cycle|cycles]], and [[Trend|trends]].

Time series models often use a hybrid model approach, such as by using [[Linear Regression]] to model trends and [[XGBoost]] to capture seasons and cycles.