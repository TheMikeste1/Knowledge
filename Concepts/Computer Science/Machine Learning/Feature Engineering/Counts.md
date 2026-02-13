---
type: technique
---
Sometimes features are related in a way that might not be immediately or mathematically obvious. For example, a dataset might have true/false features for the amenities an apartment offers, such as in-unit washing/drying, paid utilities, or high-speed internet. It can be beneficial to count these features so the model can see how many amenities the apartment offers.

| In-unit Washing? | Paid Utilities? | Internet? | (NEW) Count of Amenities |
| ---------------- | --------------- | --------- | ------------------------ |
| true             | false           | true      | 2                        |
| false            | false           | false     | 0                        |
| false            | true            | true      | 2                        |
| true             | false           | false     | 1                        |

Counts can also be used for non-boolean values. For example, one could count how many appliances in a home use more than 1000 watts as the count of high-wattage appliance.