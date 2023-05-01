Segmentation involves dividing an image into separate regions. Each pixel will be assigned to a region, and no region may share pixels.

Each region must be uniform, meaning all its pixels fall within a certain range of color/gray-level intensities. The uniformity of a region can be calculated with
$$
U_1(R) = \frac{
    \sum^4_{i = 1} {\#(R_i)}
}
{
    
}
$$

Any adjacent regions must be nonuniform. The uniformity (or lack thereof) of two regions can be calculated by taking the mean $\mu$ of both regions $A, B$ and determining if $|\mu_A - \mu_B| \lt \epsilon$. If true, the regions are uniform.

All pixels in a region must be connected through other pixels in the same region; there can be no islands in a region.