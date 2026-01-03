module.exports = async (params) => {
  const { variables } = params;
  variables.role = "model";
  variables.body = `
## Purpose
What the model is for; why it exists.

## Assumptions
List simplifications or conditions.

## Description
Explain the model’s structure or approach.

## Examples / Use Cases
Illustrate how the model is applied.

## Notes / Comments
Optional cross-references or clarifications.
`.trimStart();
};
