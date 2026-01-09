---
type:
---
A signal is some function $x(t)$ that provides some kind of information. It maps some variable $t$ to a value, such as time to pressure or position to intensity.

Signals can be either continuous or discrete, meaning the signal is in discrete chunks, often due to sampling but not always. For example, sound waves themselves are continuous, but digital audio is discrete because the sound has been sampled at some rate.

Signals can also be deterministic or stochastic/random. Deterministic signals can be described exactly by a formula, but stochastic signals can only be properly described using statistics.

Signals can be periodic, such as sine waves, or aperiodic, such as speech.

Complex signals are often sums of simpler signals or components.

The Nyquist–Shannon sampling theorem states that in order to fully reconstruct a continuous signal, the sampling rate $f_s$ must be at least 2 times the highest frequency in the signal $f_{max}$. That is,
$$
f_s \ge f_{max}
$$
Otherwise, higher frequencies will masquerade as lower ones due to not being sampled enough. This masquerading is called "aliasing." It is often best to use more than 2x $f_{max}$ (aka oversample) to avoid complications in the sampling process.
