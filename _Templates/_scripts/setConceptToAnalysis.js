module.exports = async (params) => {
  const { variables } = params;
  variables.role = "analysis";
  variables.body = `
## Purpose
Explain what this analysis achieves.

## Prerequisites
List required foundational concepts.

## Steps / Procedure
1. Step one
2. Step two
3. Step three

## Examples / Applications
Provide one or more concrete examples.

## Notes / Considerations
Caveats, alternatives, or optimizations.
`.trimStart();
};
