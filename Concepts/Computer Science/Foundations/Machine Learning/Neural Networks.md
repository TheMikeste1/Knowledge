---
role: foundation
domain: computer-science
paradigm:
tags:
  - role/foundation
---
# "Standard" Neural Network


# Convolutional Neural Network
Convolutional Neural Networks, or CNNs, 

CNNs are particularly useful for image processing. This is because they use a layer with a processing method called "[[Concepts/Computer Science/Foundations/Data Science/Definitions#Convolution|convolution]]," which essentially combines features inside a filtered area into a new feature. This new feature could be the edges of the input (if a edge-detection filter is used), a blurred image, or any other possible output of a filter. See [[Spatial Filters]] for some possible filters.

After a convolutional layer, a pooling layer is typically used. A pooling layer takes the output of the convolutional layer and further pools it. While a convolutional layer will likely have overlapping values when filtering if the stride is small than the filter size, the pooling layer will not.

There are a couple types of pooling. Two common types are max pooling and average pooling. They do precisely as their name implies: max pooling takes the max value inside the pool, while average pooling takes the average. For example, with a pool size of 2x2 and an input as 
$$
\begin{bmatrix}
29 &  15 & 28 & 184 \\
 0 & 100 & 70 &  38 \\
12 &  12 &  7 &   2 \\
12 &  12 & 45 &   6 \\
\end{bmatrix}
$$
the results would be 
$$
\begin{array}{cc}
\begin{array}{cc}
    \text{Max Pooling} \\
    \begin{bmatrix}
    100 & 184 \\
     12 &  45
    \end{bmatrix}
\end{array}
&
\begin{array}{cc}
    \text{Average Pooling} \\
    \begin{bmatrix}
    36 & 80 \\
    12 & 15
    \end{bmatrix}
\end{array}
\end{array}
$$
This does unfortunately shrink the input over time.

After all convolution and pooling has been accomplished, the output it fed into a more typical, trainable [[#Standard Neural Network]], allowing it to use the features discovered by convolution in its decision making.

## "Recap" Q/A

### Why convolutional layers?
#TODO: Finish this section. Slide 69 in 09
Detect features like edge, shape, pattern, etc.

# Recurrent Neural Network
