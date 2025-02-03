---
tags:
  - computer-vision
---
Low-pass filters enhance low frequency components and eliminate/reduce high frequency ones. The sum of all elements in a low-pass filter must add to exactly 1, which occasional exceptions such as [[#Median Filters]]. Low pass filters must be symmetric about the center, and all values must be positive or 0. They are the opposite of [[High-pass Filters]].

# Averaging Filters
![[AverageFilterExample.png]]
Averaging filters attempt to reduce noise by setting a target pixel's value to the average of those around it according to a filter/mask. They result in less "sharp" transitions between gray levels, working as a kind of blurring or smoothing filter.


## Standard Averaging Filters
Standard averaging filters have the same value in each position of the mask.
$$
\frac19 \times
\begin{bmatrix} 
1 & 1 & 1 \\ 
1 & 1 & 1 \\ 
1 & 1 & 1 \\ 
\end{bmatrix}
$$

## Weighted Averaging Filters
Weighted averaging filters can have different values in each position of the mask, allowing for certain pixels to have a larger presidence.
$$
\frac1{16} \times
\begin{bmatrix} 
1 & 2 & 1 \\ 
2 & 4 & 2 \\ 
1 & 2 & 1 \\ 
\end{bmatrix}
$$
Note how the denominator on the fraction is equal to the sum of all the elements in the mask. This ensures the total is exactly equal to 1.

# Median Filters
![[MedianFilterExample.png]]
Median filters reduce noise by finding the median pixel value and setting the target to it. This allows the filter to reduce noise without blurring the picture, allowing for sharper pictures with less noise.

Similar to [[#Averaging Filters]], there is both a standard and a weighted version. The value corresponding to an position in a mask is duplicated, so if a 1 fell under a 2 in the mask, two 1s would be added to the list of values. Since the filter simply gets duplicates, unlike [[#Averaging Filters]], the total does not need to add up to one and all value must be integers.
