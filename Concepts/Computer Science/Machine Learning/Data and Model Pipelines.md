---
type: concept
---
## Definition
A *pipeline* is an automated sequence of data processing and modeling steps that ensures consistent preprocessing between training and prediction. Pipelines prevent data leakage and reduce errors by guaranteeing the same transformations are applied in the correct order.

## Key Idea
**Without pipeline:** Manually apply scalar, encoder, model (easy to forget steps or make mistakes)

**With pipeline:** Single object handles entire workflow automatically

## Why It Matters

**Prevents data leakage:**
- Preprocessing fitted only on training data
- Test data never influences transformations

**Deployment-ready:**
- Save entire pipeline as one artifact
- Production uses exact same preprocessing as training

## Typical Structure
```
Raw Data → Imputation → Encoding → Scaling → Feature Selection → Model → Prediction
```

Each step transforms data and passes to the next step.

## When to Use
Use pipelines whenever data needs preprocessing before modeling, especially for:
- Cross-validation (preprocessing must happen inside CV folds)
- Production deployment (ensures consistency)
- Preventing data leakage (automatic correct order)
