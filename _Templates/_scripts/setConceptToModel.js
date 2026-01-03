module.exports = async (params) => {
  const { variables } = params;
  variables.role = "model";
  variables.body = `
## Overview
Describe the epistemic or structural reasoning.

## Assumptions / Idealizations
Explicitly note assumptions made.

## Implications
Explain how this model-level reasoning affects foundations, methods, or applications.

## Cross-Domain Connections
List concepts or patterns that appear across other domains.
`.trimStart();
};
