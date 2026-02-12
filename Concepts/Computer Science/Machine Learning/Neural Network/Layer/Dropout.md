---
type: definition
---
The *dropout layer* is designed specifically to help defeat [[Overfitting|overfitting]]. They work by temporarily skipping [[Neuron|neurons]] in a layer, which helps to break up a *conspiracy*. A conspiracy is when the [[Neural Network|NN]] relies on a very specific combination of weights to identify noise in the training data, essentially allowing it to cheat when training. By removing one or more neuron from the network, the conspiracy will be broken.

The percent of neurons to drop out depends on a few factors. For [[Dense Layer|dense layers]], 50% is the standard, though it often varies between 30-50%. Input layers can also have dropout, though they usually have a lower percent of 10-20% to avoid having the model miss important [[Feature|features]]. [[Convolutional Layer|Convolutional layers]] tend to be 10-30% to avoid confounding the convolution. Finally, [[Recurrent Layer|recurrent layers]] should rarely use dropout, or at the very least use low rates, to avoid destroying its ability to learn temporal dependencies.

Be aware that too high dropout rates can lead to [[Underfitting]]. Too low won't achieve the desired effect. Generally, larger models need the upper end of dropout rates. Wider models tend to benefit from dropout more.

> [!TIP]
> If using [[Batch Normalization]], place the dropout layer **after** the normalization layer. Otherwise, the normalization will be thrown off by the dropped-out parameters.