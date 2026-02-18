---
type: overview
aliases:
  - ML
  - AI
---
*Machine learning* is the process of [[Training|fitting]] an algorithm to a dataset in order to make predictions. All machine learning techniques can be summed up as a [[Function]]: they take input and produce an output. What that input and output are depends on the purpose of the machine, be it speech input and text output, or a matrix representing a board game the next move as an output.

A basic framework for machine learning is to have a set of functions, called a *model*. Training data is then fed into the functions, and the "[[Loss Function|goodness]]" of each function is calculated. This is called *[[Training|training]]*. Once training is done, the best model is chosen and is tested using data not from the training set to determine how good the function actually is. This cycle can occur multiple times until the model reaches a desired point or nor more gains can be made.

![[ml_map.png|Types of Machine Learning]]