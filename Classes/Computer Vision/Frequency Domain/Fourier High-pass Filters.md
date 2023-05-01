# Ideal High-pass Filter
The Ideal High-pass filter $H$ is defined as
$$
H(u, v) = \biggr\{
\begin{array}{cc}
0; \; D(u, v) \le D_0 \\
1; \; D(u, v) \gt D_0 \\
\end{array}
$$
where $D_0$ is the cutoff distance and $D(u, v) = \sqrt{(u - (M / 2 + 1))^2 + (v - N / 2 + 1)}$  is the distance from the center. Here, $(M, N)$ is the total number of pixels in the image and $(v, u)$ are the coordinates in the Fourier transform corresponding to $(x, y)$.

This results in a simple circle containing all 0s where the distances were in range surrounded by 1s where the distances were too great. It is the exact opposite of the [[Fourier Low-pass Filters#Ideal Low-pass Filter|Ideal Low-pass Filter]].

# Butterworth High-pass Filter
Similar to the [[#Ideal High-pass Filter]], the Butterworth High-pass Filter (BHPF) creates a circle. However, the change does not suddenly shift from 0s to 1s, but rather produces a gradient. It is defined as
$$
H(u, v) = 1 - \frac{1}{1 + (D(u, v) / D_0)^{2n}}
= \frac{1}{1 + (D_0 / D(u, v))^{2n}}
$$
where $n$ is some integer. The higher the $n$, the sharper the transition.

Unfortunately, this filters results in a ripple effect in the resulting image. One can see ghostly outlines of parts of the image, such as a ghostly "a" surrounding and "a" in the image.

It is the exact opposite of the [[Fourier Low-pass Filters#Butterworth Low-pass Filter|Butterworth Low-pass Filter]].

This image has been produced with an order of $n = 2$ cutoff $D_0 = 15$.

![[BLHFExample.png]]

# Gaussian High-pass Filter
The Gaussian Low-pass filter (GHPF) attempts to solve the same problem as the [[#Butterworth Low-pass Filter]] by gradually transitioning to values outside the desired range. It is defined as
$$
H(u, v) = 1 - e^{-D^2(u, v) \; / \; 2\sigma^2}
$$
Here, $\sigma = D_0$.

This filter results in a much more smooth transition than the [[#Butterworth High-pass Filter]] and eliminates the ghostly ripple normally produced.

While the equation given will normally produce a circle, ellipses can be produced by decomposing the equation to
$$
H(u, v) = 1 - e^{-\frac12 (u^2 / \sigma_1^2 + v^2 / \sigma_2^2)}
$$
and using different $\sigma$'s.

It is the exact opposite of the [[Fourier Low-pass Filters#Gaussian Low-pass Filter|Gaussian Low-pass Filter]].
