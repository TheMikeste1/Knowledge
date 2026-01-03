module.exports = async (params) => {
  const { variables } = params;
  variables.role = "primitive";
  variables.body = `
## Definition
Provide a clear, concise definition of the concept.

## Properties / Characteristics
List inherent properties or attributes.

## Examples
Provide minimal examples demonstrating the concept.

## Notes / Comments
Optional elaborations, cross-references, or clarifications.
`.trimStart();
};
