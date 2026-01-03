/**
 * @param {string} domain - The kebab-case to transform into a name.
 * @returns {string} The string into the appropriate domain name form.
 */
function kebabCaseToDomain(domain) {
  return domain
    .split("-")
    .map((word) => {
      if (word.length === 0) {
        return "";
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

module.exports = async (params) => {
  const { quickAddApi, app, variables } = params;
  const title = await quickAddApi.inputPrompt("Note title");
  if (title === "") {
    return;
  }

  const domain = variables.domain.domain;
  const subdomain = variables.domain.subdomain;
  const role = variables.role;
  const body = variables.body;

  const roleFolder = {
    analysis: "Analysis",
    foundation: "Foundations",
    model: "Models",
  }[role];

  const paradigm = variables.paradigm;

  // Build tags safely
  const tags = [`role/${role}`];
  if (paradigm) {
    tags.push(`paradigm/${paradigm}`);
  }

  const tagString = tags.map((t) => `  - ${t}`).join("\n");
  const frontmatter = `
---
role: ${role}
domain: ${domain}
subdomain: ${subdomain}
paradigm: ${paradigm}
tags:
${tagString}
related:
aliases:
---`.trimStart();

  // Determine folder
  const domainFolder = kebabCaseToDomain(domain);
  const subdomainFolder =
    subdomain != "" ? "/" + kebabCaseToDomain(subdomain) : "";
  const folder = `Concepts/${domainFolder}${subdomainFolder}/${roleFolder}`;
  const filePath = `${folder}/${title}.md`;

  // Ensure folder exists
  await app.vault.createFolder(folder).catch(() => {});

  // Create note
  await app.vault.create(filePath, frontmatter + body);

  // Open note
  const file = app.vault.getAbstractFileByPath(filePath);
  if (file) {
    await app.workspace.getLeaf().openFile(file);
  }
};
