---
role: model
domain: computer-science
paradigm:
tags:
  - role/model
  - ml-model
---
An autoencoder is a [[Neural Networks|neural network]] that learns to compress, or encode, data. It consists of two main parts: the Encoder and the Decoder. 
The encoder takes the data to compress as input and outputs a compressed representation of the data. This compressed representation is called the "code" or "bottleneck." The code is then able to be fed into the decoder to transform it into the decompressed data. Ideally, the decompressed data will be exactly the same as the original, but an autoencoder is not guaranteed to be lossless.

Autoencoders are often symmetric, meaning the decoder's structure is a mirror image of the encoder. For example, if the encoder has a layer of 128 nodes followed by a layer of 32, the decoder will first have a layer of 32 nodes followed by 128.

Autoencoders train both of their components together. Data is fed into the encoder, and the output of the encoder into the decoder. The output of the decoder is then used to calculate error against the original data.
