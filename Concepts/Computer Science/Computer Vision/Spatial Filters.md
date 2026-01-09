---
role: method
domain: computer-science
paradigm:
tags:
  - role/method
  - computer-vision
---
Spatial Domain filtering methods directly manipulate the pixels in an image. This makes them simpler than many other techniques, allowing for immediate and determinable changes. However, they only affect pixels in the local area, and while they do have applications for image-wide changes, they may not be the best choice for more complex filtering problems.

There are three types of spatial filters:
- [[Low-pass Filters|Low-pass Filters]]
These enhance low frequency components of the image while eliminating or reducing high frequency ones.
- [[High-pass Filters|High-pass Filters]]
The opposite of Low-pass filters; these enhance high frequency components of the image while eliminating or reducing low frequency ones.
- [[Band-pass Filters]]
These enhance a certain range of frequency components, while eliminating or reducing frequency components beyond the range.

These are all **convolution filters**, meaning they can be applied and give a result.
