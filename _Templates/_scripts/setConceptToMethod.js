module.exports = async (params) => {
  const { variables } = params;
  variables.role = "method";
  variables.body = `
## Goal
What this method achieves.

## Inputs / Requirements
Prerequisites for using the method.

## Procedure / Steps
Step-by-step instructions, formulas, or algorithms.

## Examples
Show sample applications.

## Notes / Comments
Optional tips, variants, or clarifications.
`.trimStart();
};
