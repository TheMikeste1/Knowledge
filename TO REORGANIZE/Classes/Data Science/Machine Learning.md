# What is Machine Learning?
All machine learning techniques can be summed up as a function. They take some input and have some output. What that input and output are depends on the purpose of the machine, be it speech input and text output, or a matrix representing a board game the the next move as an output.

A basic framework for machine learning is to have a set of functions, called a model. Training data is then fed into the functions, and the "[[#Objective Functions|goodness]]" of each function is calculated. This is called training. Once training is done, the best function is chosen and is tested using data not from the training set to determine how good the function actually is. This cycle can occur multiple times until the model reaches a desired point or nor more gains can be made.


# Types of Machine Learning Tasks
## Regression
Regression machine learning has the goal of getting some number as an output, such as the cost of a house or the number of games a team will win.

### Linear Regression
Linear regression creates a line to try to predict the [[TO REORGANIZE/Classes/Data Science/Definitions#Label|label]]. The goal is to find the best line to represent the data, and works well for labels that have a linear relationship with their [[TO REORGANIZE/Classes/Data Science/Definitions#Feature|features]], such as the amount of money required to purchase some good.

Since it is a line, it can be represented as $y = mx + b$, but this is typically replace with $f(\mathbf{x}) = \mathbf{x}^T \mathbf{w} + b$, where $f(\mathbf{x})$ is the function, $\mathbf{x}$ is the feature vector, $\mathbf{w}$ is the weight vector, and $b$ is called the [[TO REORGANIZE/Classes/Data Science/Definitions#Bias|bias]]. This can similarly be written as $f(\mathbf{x}) = w_1 x_1 + w_2 x_2 + \ldots + w_d x_d$, where $d$ is the dimensionality of the feature vector.

We can change the weights and the bias in this equation to more accurately follow the linear relationship between the features and the labels.

#### Least-Squares Regression
Least-squares  regression finds the line with the least amount of vertical loss between the all points provided in the training data. Its [[TO REORGANIZE/Classes/Data Science/Definitions#Objective Function|objective function]] looks like so:
$$
L(\mathbf{w}) = \frac{1}{n}\sum^n_{i = 1}{(\mathbf{x}^T \mathbf{w} - y_i)^2}
$$
Notice that it finds the average square distance from the actual label. Squaring the distance not only ensures all loss is positive, but also makes larger distances penalized more than smaller distances.

The best model, $\mathbf{w}^*$ in least-squares regression can be defined as $\mathbf{w}^* = \text{min} \; L(\mathbf{w})$ meaning it is the model with the lowest loss as defined above. Note that there **can** be more than one ideal $\mathbf{w}^*$.

#### Polynomial Regression
#TODO

### Logistic Regression
Logistic regression aims to classify data. Most models work by drawing a lines in the feature space. Those on one side of the line are the class being detected (e.g. dog), those on the other are not (e.g. not dog).


#### Perceptron
#TODO 
