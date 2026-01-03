---
role: method
domain: computer-science
paradigm:
tags:
  - role/method
  - computer-vision
---
Dilation and erosion are pattern matching operations; they don't necessarily modify the image.

Dilation is when we're looking for hits, meaning any element of the pattern is matched. In Matlab, there is `imdilate`.

Erosion means there is a fit, meaning the entire structure is matched. In Matlab, there is `imerod`.

Zeros do not matter in a pattern (also known as a structure/structure element/SE). We only care about the 1s. For a hit, at least one of the 1s must line up with a 1 on the image. For a fit, all ones must line up with a 1 on the image.

You can build a structure element in Matlab using `strel(shape, size)`.

Intersecting with the original image will result in highlighting a structure in the image. This can be repeated until the previous image and the new image are the same, which will highlight all connected pixels using the provided structure to determine the definition of "connected."
