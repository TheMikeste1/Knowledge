---
type: technique
---
Low-pass  filters in the frequency domain primarily rely on the distance from the signal center.

Note all these filters assume the transform has been [[Frequency Filters#Matlab|shifted to the center]].

# Ideal Low-pass Filter
The Ideal low-pass filter $H$ is defined as
$$
H(u, v) = \biggr\{
\begin{array}{cc}
1; \; D(u, v) \le D_0 \\
0; \; D(u, v) \gt D_0 \\
\end{array}
$$
where $D_0$ is the cutoff distance and $D(u, v) = \sqrt{(u - (M / 2 + 1))^2 + (v - N / 2 + 1)}$  is the distance from the center. Here, $(M, N)$ is the total number of pixels in the image and $(v, u)$ are the coordinates in the Fourier transform corresponding to $(x, y)$.

This results in a simple circle containing all 1s where the distances were in range surrounded by 0s where the distances were too great.


# Butterworth Low-pass Filter
Similar to the [[#Ideal Low-pass Filter]], the Butterworth Low-pass Filter creates a circle. However, the change does not suddenly shift from 1s to 0s, but rather produces a gradient. It is defined as
$$
H(u, v) = \frac{1}{1 + (D(u, v) / D_0)^{2n}}
$$
where $n$ is some integer. The higher the $n$, the sharper the transition.

Unfortunately, this filters results in a ripple effect in the resulting image. One can see ghostly outlines of parts of the image, such as a ghostly "a" surrounding and "a" in the image.

# Gaussian Low-pass Filter
The Gaussian Low-pass filter (GLPF) attempts to solve the same problem as the [[#Butterworth Low-pass Filter]] by gradually transitioning to values outside the desired range. It is defined as
$$
H(u, v) = e^{-D^2(u, v) \; / \; 2\sigma^2}
$$
Here, $\sigma = D_0$.

This filter results in a much more smooth transition than the [[#Butterworth Low-pass Filter]] and eliminates the ghostly ripple normally produced.

While the equation given will normally produce a circle, ellipses can be produced by decomposing the equation to
$$
H(u, v) = e^{-\frac12 (u^2 / \sigma_1^2 + v^2 / \sigma_2^2)}
$$
and using different $\sigma$'s.

This image has been produced with $\sigma_1 = 75$ and $\sigma_2 = 25$.
![[GLPFExample.png]]
