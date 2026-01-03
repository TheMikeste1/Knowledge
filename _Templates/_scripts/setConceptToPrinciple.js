module.exports = async (params) => {
  const { variables } = params;
  variables.role = "principle";
  variables.body = `
## Statement
Articulate the principle or law.

## Derivation / Basis
Explain which primitives or prior principles support it.

## Examples
Show concrete cases illustrating the principle.

## Exceptions / Limitations
Situations where the principle is weak or inapplicable.

## Notes / Comments
Optional elaborations or cross-references.
`.trimStart();
};
