# Indices
- Primary Index: Ordered on the primary key.
- Clustering Index: Aka sparse, meaning the max index might be slightly smaller. Non-key field. One index for each distinct value of the field.
- Secondary Index: Aka dense. Not ordered on the index's search key.

Default index is Primary Index.


<u>Sparse vs Dense Indices</u>
Dense index has a value for each row; sparse have an index for each unique value