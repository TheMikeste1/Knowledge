---
role: analysis
domain: computer-science
paradigm:
tags:
  - role/analysis
  - optimization
  - database
---
# Indices
Using index tree: $\mathcal{O}{(\log_k n)}$; $k$ is fan-out (# of index entries per block)
- Primary Index: Ordered on the primary key.
- Secondary Index: Aka "dense". Not ordered on the index's search key.
- Clustering Index: Aka "sparse", meaning the max index might be slightly smaller. Non-key field. One index for each distinct value of the field.

Default index is Primary Index.

__Sparse vs Dense Indices__
Dense index has a value for each row; sparse has an index for each unique value

# Query Rewrites

