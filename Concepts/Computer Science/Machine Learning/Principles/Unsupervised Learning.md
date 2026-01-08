---
role: primitive
domain: Computer Science
subdomain: machine-learning
paradigm: 
status: draft
tags:
  - role/primitive
related:
aliases:
---
## Definition
*Unsupervised Learning* when a model learns structure, patterns, or representations from unlabeled data, without explicit target outputs or reward signals. This can be used to group or "cluster" data together, or perform other tasks that do not require "classes" of data.

## Properties / Characteristics
- **No labeled targets**: Data consists only of inputs.
- **Structure discovery**: Learns latent structure such as clusters, manifolds, or factors.
- **Representation learning**: Often used to produce features for downstream tasks.
- **Objective-driven**: Optimizes an internal criterion (e.g., likelihood, reconstruction error).
- **Typically static data**: Assumes [[Independent and Identically Distributed|i.i.d.]] samples rather than sequential interaction.
- **Ambiguous evaluation**: Success is task-dependent and often qualitative.
- **Often statistical**: Based on density estimation or similarity measures.

## Examples
- [[K-means]]
- [[Autoencoder]]

## Notes / Comments
