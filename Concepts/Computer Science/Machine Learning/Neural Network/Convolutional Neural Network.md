---
type: model
aliases:
  - CNN
  - convnet
---
A *Convolutional Neural Network* is a [[Neural Network]] that specialize in signal processing using [[Convolution|convolutions]]. *CNNs* are commonly used for audio, image, and video processing, but can be used for any type of signal.

CNNs consist of two main parts: a *convolutional base* and a *[[Dense Layer|dense]] head*. The base runs convolutions and transformations to extract features from the signal. These features are then passed to the head, which consists of multiple [[Dense Layer|dense layers]] that attempt to classify the signal. The head is essentially just a normal neural network whose inputs come from the base. The base can extract many different types of features from the signal. In the case of an image, it could extract colors, lines, shapes, or any number of other features.

Modern CNNs typically use [[Transfer Learning]] instead of training a model from scratch. The base will be taken from a pretrained model, which will then be attached to a new, untrained head. This helps reduce training time and takes advantage of the learned convolutions. Generally, it is best to not retrain the base. It can be fine-tuned using specific techniques later, but in the beginning training it should be avoided. In `kera`, this is as simple as setting `trainable` to `False`: `pretrained_base.trainable = False`.