---
type: definition
aliases:
  - mini-batch
---
*Batch size* is a [[Hyperparameter|hyperparameter]] that determines how many samples are included in a batch. The value is generally a fairly small power of 2, such as 32, 64, 128, 256, or even 512. Having a power of 2 is generally more computationally efficient due to the [[Why use Powers of Two|usual reasons]], especially in terms of hardware and memory efficiency.

Smaller batch sizes ($\le 128$) produce more chaotic updates and require more [[Epoch|epochs]], but each epoch is faster to process and ultimately produce better generalization due to the model not seeing all the data at once. Larger sizes ($\gt 128$) speed up training, but require more memory and produce poorer generalization.