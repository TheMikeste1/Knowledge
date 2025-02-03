---
tags:
  - computer-vision
---
Frequency filters work on the frequency domain of an image. They differ from [[Spatial Filters]] in that they do not work on individual pixels, but rather the frequency of an image. A change in the frequency will be echoed throughout the image.

There are two main types of frequency domain transforms: the Fourier Transform and the Wavelet Transform.

### Fourier Transform
The sum of sines and/or cosines of different frequencies, each multiplied by a different coefficient. Due to the nature of these wave functions, the periodically repeat. Essentially, the Fourier transform takes an image and transforms in into a signal according to the intensity of its pixels. 

The Fourier transform $F$ of an image can be written as $F = R + iI$, where $R$ is the real numbers and $I$ is the imaginary coefficients. Naturally, $i = \sqrt{-1}$.

More usefully, however, the Transform can also be written as $F = |F| \cdot e^{i\phi}$, where $|F| = \sqrt{(R^2 + I^2)}$ and is called the magnitude, and $\phi = \arctan{\frac{I}{R}}$ and is called the phase.

Similar to [[Spatial Filters]],  there are [[Fourier Low-pass Filters|low-pass]] and [[Fourier High-pass Filters|high-pass]] filters.

#### Matlab
In Matlab, an image can be brought to the frequency domain by calling `fftImg = fft2(img)`. It is then conventional to shift the center of the frequency, which will always be in position (1, 1) of the resulting matrix, to the center of the matrix using `fftShifted = fftshift(fftImg)`. This makes it easier to apply filters. The resulting matrix will have the same size, but contain complex numbers.

Once the filters have been applied and the results are ready, the image will first need to be shifted back with `fftImg = ifftshift(fftShifted)`, then the transform undone with `img = ifft2(fftImg)`. Due to limitations in computation, there may remain very small imaginary numbers which can be safely ignored by selecting the real part with `real(img)`.

Often, the magnitude and phase need to be extracted. The magnitude can be calculated with  `mag = sqrt(real(fftImg) .^ 2 + imag(fftImg) .^ 2)` or simply `mag = abs(fftImg)`. Similarly, the phase can be calculated with `phase = atan2d(imag(fftImg), real(fftImg))` or just `phase = angle(fftImg)`. Both will need to be scaled to be properly visible, often simply normalizing the phase and taking the log then normalizing the magnitude. The resulting magnitude image will look like a star in the center with lines shooting out in the cardinal directions and possible others, while the phase will look similar to TV static. The brightness and size of the star will depend on the image.

![[magnitude_and_phase_example.png]]

Phase and magnitude can be swapped to produce interesting images. For example, there are two ways to swap the phase: either by subtracting the magnitude and adding a new one (`fftImg1 ./ img1Mag .* img2Mag`), or by reconstructing using $F = |F| \cdot e^{i\phi}$:
$$
F_{\text{Phase swapped}} = |F_1| \cdot e^{i\phi_2}
$$
```f_phase_swapped = img1Mag * e ^ {1i * img2Phase} % 1i is sqrt(-1) in Matlab```

![[PhaseSwapExamples.png]]
Note how the phase seems to contain the outline of the image. When swapping phases, the outline are essentially swapped.

[https://dsp.stackexchange.com/a/45923](https://dsp.stackexchange.com/a/45923) has some good examples.


### Wavelet Transform
The Wavelet Transform decomposes an image into its parts, creating a pyramiding level of detail. It is particularly useful in pattern recognition due to its ability to display levels of detail from coarse to fine.

If $n$ is the number of elements, there can be up to $\log_2(n)$ levels of detail.

The process for the Wavelet transform is like so: suppose you have an array containing $[25, 150, 80, 5, 200, 157, 0, 0]$. These elements can be separated into pairs with individual elements $a, b$ like so:
$$
\begin{array}{cc}
\begin{array}{cc}
a & b \\
25 & 150
\end{array} & \biggr| &
\begin{array}{cc}
a & b \\
80 & 5
\end{array} & \biggr| &
\begin{array}{cc}
a & b \\
200 & 157
\end{array} & \biggr| &
\begin{array}{cc}
a & b \\
0 & 0
\end{array}
\end{array}
$$
An operation is then applied, replacing each $a$ with $\frac{a + b}2$ and $b$ with $\frac{a - b}2$:
$$
\begin{array}{cc}
\begin{array}{cc}
a & b \\
87.5 & -62.5
\end{array} & \biggr| &
\begin{array}{cc}
a & b \\
42.5 & 37.5
\end{array} & \biggr| &
\begin{array}{cc}
a & b \\
178.5 & 21.5
\end{array} & \biggr| &
\begin{array}{cc}
a & b \\
0 & 0
\end{array}
\end{array}
$$

Finally, the $a$'s  are brought to the first half,  and the $b$'s to the second:
$$
\begin{array}{cc}
\begin{array}{cc}
a & a & a & a \\
87.5 & 42.5 & 178.5 & 0
\end{array} & \biggr| &
\begin{array}{cc}
b & b & b & b \\
-62.5 & 37.5 & 21.5 & 0
\end{array}
\end{array}
$$

 This results in the first level of the wavelet transform The left half is called the "approximation coefficients," and when reassembled into an image will display a lower-resolution version of the original. The second half is called the "detail coefficients".

To get the second level, the operation is performed again on the approximation coefficients.

To perform this operation on a 2D array or an image, the operation is first performed column-wise, resulting in the left half of each row contain the row's approximation coefficients and the right half its detail coefficients. The operation is then performed row-wise resulting in four quadrants.
$$
\begin{array}{cc}
LL & \biggr| & HL \\
-  & -       & - \\
LH & \biggr| & HH \\
\end{array}
$$
The first letter represents the first pass, and the second the second pass. $L$ means it contains the approximation coefficients, and $H$ the detail coefficients.

$LL$ will appear as a lower resolution version of the original image and is called the approximation coefficients. $HL$ is the horizontal detail coefficients, $LH$ the vertical, and $HH$ the diagonal.

Further levels of detail can be calculated by repeating the transform on $LL$.

Image generated using Matlab's 2-D Wavelet Analysis Tool via `waveletAnalyzer` -> Wavelet 2-D.
![[LenaDecompLevel2Pinkified.png]]

#### Matlab
For any Wavelet transform, is is recommended to first set the mode of the decomposition tools to 'per', like so: `dwtmode('per', 'nodisplay');`. This eliminates padding that other modes add.

There are a couple ways to perform Wavelet transforms in Matlab. Levels of detail can be raised/lowered one at a time using `[LL, HL, LH, HH] = dwt2(img, "db2")`/`img = idwt2(LL, HL, LH, HH, "db2")`. Alternatively, they can be calculated all at once using `[coefficients, decompositionSizes] = wavedec2(img, levelsOfDetail, "db2")` and recomposed using `img = waverec2(coefficients, decompositionSizes, "db2")`. `coefficients` will be a 1D array containing all 4 types of coefficients. The first quarter will contain $LL$, the second $HL$, the first $LH$, and the fourth $HH$. This can be applied for each level of detail, so the first quarter of $LL$ (aka the first 16th of the entire array) will contain $LL_2$ and so on.

```matlab
numElements = numel(coefficients);
% First level
LL1 = coefficients(1:numElements / 4);
HL1 = coefficients(numElements / 4 + 1:numElements / 4 * 2);
LH1 = coefficients(numElements / 4 * 2 + 1:numElements / 4 * 3);
HH1 = coefficients(numElements / 4 * 3 + 1:end);
% Second level
LL2 = coefficients(1:numElements / 4 / 4);
HL2 = coefficients(numElements / 4 / 4 + 1:numElements / 4 / 4 * 2);
% ... etc.
```
If any of these coefficients need to be rearranged into a 2D matrix, you can do so with `reshape` and flattened with normal row-wise flattening:
```matlab
LL1_2D = reshape(LL1, decompositionSizes(1, :));
HL2_2D = reshape(HL2, decompositionSizes(2, :));

LL1 = LL1_2D(:);
HL2 = HL2_2D(:);
```

`wmaxlev` will return the max decomposition level of an image.
