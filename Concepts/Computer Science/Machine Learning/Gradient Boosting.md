---
type: technique
---
*Gradient boosting* is a technique that sequentially adds models to an [[Ensemble|ensemble]]. Unlike [[Bootstrap Aggregating|bagging]] techniques where models are built independently, gradient boosting builds new models to correct the errors of the previous ones.

The process is as follows:
1. The ensemble starts with a simple base model.
2. The algorithm calculates the loss (the error) of the current ensemble.
3. A new model is trained that attempts to compensate for the current ensemble and bring the predictions closer to the target. Specifically, the model is trained to predict the **negative gradient** of the loss function with respect to the predictions of the current ensemble. For a simple case like [[Mean Squared Error]], this is equivalent to fitting a model to the *residuals* (the errors) of the ensemble.
4. The new model is added to the ensemble with a small weight (controlled by a [[Learning Rate|learning rate]]) to incrementally improve the overall prediction.
5. Repeat from step 2 until a stopping criterion is met (e.g., the maximum number of models is reached).

This use of [[Gradient Descent|gradient descent]] to minimize the overall loss by iteratively adding new models is what gives the technique its name.

#TODO
- [ ] Understand the role of the **loss function** and its gradient. How does the choice of loss function (e.g., MSE for regression, Log Loss for classification) change what the next model learns?
- [ ] What is **learning rate** (or "shrinkage") in gradient boosting, and how does it help prevent overfitting?
- [ ] Explore different **base learners**. Why are decision trees (specifically regression trees) the most common choice?
- [ ] Compare Gradient Boosting with **Bagging** methods like [[Random Forest]]. What's the difference between building models sequentially vs. in parallel?
- [ ] Investigate popular, high-performance implementations like **XGBoost**, **LightGBM**, and **CatBoost**. What makes them so effective?
- [ ] Learn about **regularization techniques** used to control overfitting, such as subsampling (stochastic gradient boosting), feature sampling, and constraints on the tree structure (e.g., `max_depth`).