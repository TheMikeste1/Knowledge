---
type:
---
High-pass filters enhance high frequency components and eliminate/reduce low frequency ones. The sum of all elements in a high-pass filter must be exactly 0. They must be symmetric about the center, but each element can be any value so long as symmetry is kept. They are often used to find edges or sharpen an image. They are the opposite of [[Low-pass Filters]].

# Laplacian Filters
Laplacian Filters are simple filters used to sharpen an image. They work by extracting the partial derivatives of the neighboring pixels, which basically means they find the amount of change between neighboring pixels. They are isotropic, meaning they are independent of direction.

A weak Laplacian filter might look like
$$
\begin{array}{cc}
    \begin{bmatrix} 
    0 &  1 & 0 \\ 
    1 & -4 & 1 \\ 
    0 &  1 & 0 \\ 
    \end{bmatrix}
    \text{ or }
    \begin{bmatrix} 
     0 & -1 &  0 \\ 
    -1 &  4 & -1 \\ 
     0 & -1 &  0 \\ 
    \end{bmatrix}
    \\
    \begin{bmatrix} 
    1 &  1 & 1 \\ 
    1 & -8 & 1 \\ 
    1 &  1 & 1 \\ 
    \end{bmatrix}
    \text{ or }
    \begin{bmatrix} 
    -1 & -1 & -1 \\ 
    -1 &  8 & -1 \\ 
    -1 & -1 & -1 \\ 
    \end{bmatrix}
\end{array}
$$
while a strong might look like
$$
\begin{array}{cc}
    \begin{bmatrix} 
    0 &  1 & 0 \\ 
    1 & -5 & 1 \\ 
    0 &  1 & 0 \\ 
    \end{bmatrix}
    \text{ or }
    \begin{bmatrix} 
     0 & -1 &  0 \\ 
    -1 &  5 & -1 \\ 
     0 & -1 &  0 \\ 
    \end{bmatrix}
    \\
    \begin{bmatrix} 
    1 &  1 & 1 \\ 
    1 & -9 & 1 \\ 
    1 &  1 & 1 \\ 
    \end{bmatrix}
    \text{ or }
    \begin{bmatrix} 
    -1 & -1 & -1 \\ 
    -1 &  9 & -1 \\ 
    -1 & -1 & -1 \\ 
    \end{bmatrix}
\end{array}
$$

Once the filter is applied, the image can be sharpened by taking the original image, $f$, and applying the resulting filtered result, $\nabla^2f$, to get the sharpened image, $g$,like so:
$$
g(x, y) = \,\biggr\{  
\begin{array}{cc}
f(x, y) - \nabla^2f(x, y) \text{; when the mask center is negative} \\      
f(x, y) + \nabla^2f(x, y) \text{; when the mask center is positive}      
\end{array}
$$

![[LaplacianExample.png]] 

# Sobel Filters
Sobel filters are particularly good at detecting edges. It takes two sweeps to catch all edges: one for horizontal and one for vertical. The filters look like so:
$$
\begin{array}{cc}
\text{Horozontal (results in }G_x\text{)} && \text{Vertical (results in }G_y\text{)} \\
\begin{bmatrix} 
-1 & -2 & -1 \\ 
 0 &  0 &  0 \\ 
 1 &  2 &  1 \\ 
\end{bmatrix}
&&
\begin{bmatrix} 
-1 & 0 & 1 \\ 
-2 & 0 & 2 \\ 
-1 & 0 & 1 \\ 
\end{bmatrix}
\end{array}
$$

Once the edges are detected, the angle of the line at any particular point can be calculated with $\theta = \arctan(\frac{G_y}{G_x})$, or in Matlab `theta = atan2d(gY, gX)`.
