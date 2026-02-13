---
type: technique
---
The relationship between numerical features can be expressed mathematically. For example, the percent of carbs that are sugars can be expressed by dividing the sugars by the total carbs. Ratios and percentages are common mathematical transformations.

Mathematical transformations are particularly useful for complex formulas that we know, but aren't represented in the data at hand. The more complex the formula, the more difficult it will be for the model to discover it, so we can create a new feature with the calculated values for the formula to ease the burden on the model.

Additionally, data visualization may reveal that a feature might be easier to use if reshaped, for example by a square or a log. Reshaping a feature to normalize it can often be beneficial. Generally, [[Linear|linear]] functions are easier for models to digest, so reshaping transformations should attempt to create a linear relationship between the [[Label|label]] and the feature.