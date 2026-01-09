---
type: technique
---
Data often has to be preprocessed in order be useful.

# Categorical Data
Most machine learning algorithms need data to be numerical, but much of the data in the real world is categorical. 

There are a few types of categorical data:
## Binary Features
An example of a binary features is gender. This can easily be represented with a 0 for one gender, and a 1 for the other. It's typically good practice to rename the column to ensure it's easy to know what the 1s and 0s represent (e.g. Gender -> IsFemale).
## Categorical Features
Categorical features encompass any categorical data that isn't binary, such as nationality. Nationality could easier include over 197 different countries, and just using a binary classification on the single column don't work. There are a couple ways to handle this:
1. Represent each category with a different number, such as USA -> 1, China -> 2, India -> 3, etc. The number 0 in this case is typically reserved for unknown of missing values. While this works, it does have the problem of creating arbitrary relations and weights, such as India being "three times larger" than the USA, or $\text{USA} + \text{China} = \text{India}$ in some abstract sense.

2. One-hot encoding, which replaces each nationality with a vector of a single 1 and the rest 0s. For example, if there are three possible nationalities (USA, China, India), the USA could be encoded as $[1, 0, 0]$, China as $[0, 1, 0]$, and India $[0, 0, 1]$.  The vector $[0, 0, 0]$ is used for unknown of missing values.
    This technique creates additional columns in the table, but comes without many of the problems of simple assigning an arbitrary number to a category. One-hot encoding also increases the dimensionality of each row due to it adding columns, which is typically good. It does, however, take more memory and can result in slower performance, though the benefits typically outweigh the problems.
        
# Numerical Data
