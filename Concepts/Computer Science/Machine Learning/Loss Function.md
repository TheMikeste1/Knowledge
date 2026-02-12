---
type: definition
aliases:
  - objective function
---
A *loss function* measures how well a model performs. It is a category of algorithms that calculate the difference, aka *loss* or *residual*, between the model's prediction $\hat{y}$ and the [[Label|actual value or truth]] $y$. Ideally, the function used to calculate the error will be differentiable, which allows it to work with [[Gradient Descent]]. Since the loss function is the authority for how well the model performs, it defines the *objective* of the model.

Different loss functions are better for different tasks. For [[Regression|regression]] tasks, the loss function just needs to calculate the difference $y - \hat{y}$. However, just taking the difference may cause the error to cancel out. As such, it is best for all errors to use the same sign (usually positive). Common approaches to achieve the sign sign are by [[Mean Absolute Error|taking the absolute value]] or [[Mean Squared Error|squaring the error]].

Classification tasks #TODO How do their loss functions differ?

#TODO Research more loss functions
    - [[Huber]]

### Regression Loss Functions
```dataview
LIST
FROM "Concepts/Computer Science/Machine Learning/Loss Function"
WHERE contains(ml_task_type, "regression")
```

### Classification Loss Functions
```dataview
LIST
FROM "Concepts/Computer Science/Machine Learning/Loss Function"
WHERE contains(ml_task_type, "classification")
```

### Generative Loss Functions
```dataview
LIST
FROM "Concepts/Computer Science/Machine Learning/Loss Function"
WHERE contains(ml_task_type, "generative")
```
