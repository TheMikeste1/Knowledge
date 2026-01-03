/**
 * @param {string} str - The string to kebab-case.
 * @returns {string} The domain in kebab-case.
 */
function domainToKebabCase(str) {
  return str.trim().toLowerCase().replaceAll(" ", "-");
}

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

/**
 * @param app - The Obsidian instance.
 * @returns {[string]} The name of domains.
 */
function getDomains(app) {
  const conceptFolder = app.vault.getFolderByPath("Concepts");
  return conceptFolder
    ? Array.from(
        conceptFolder.children
          .filter((item) => {
            // Cheap trick to see if the item is a folder
            return item.children !== undefined;
          })
          .map((item) => {
            return item.name;
          }),
      )
    : [];
}

module.exports = async (params) => {
  const { quickAddApi, app } = params;

  const title = await quickAddApi.inputPrompt("Note title");
  if (!title) return;

  const domains = getDomains(app);
  domains.push("(new)");
  let domain = await quickAddApi.suggester(
    domains,
    domains.map(domainToKebabCase),
  );

  if (domain === "(new)") {
    domain = await quickAddApi.inputPrompt("New Domain:");
    if (!domain) {
      return;
    }

    domain = domainToKebabCase(domain);
  }

  const paradigm = await quickAddApi.suggester(
    [
      "(none)",
      "Computational",
      "Interpretive",
      "Physical",
      "Statistical",
      "Symbolic",
    ],
    [
      "",
      "computational",
      "interpretive",
      "physical",
      "statistical",
      "symbolic",
    ],
  );

  // Build tags safely
  const tags = ["role/foundation"];
  if (paradigm) {
    tags.push(`paradigm/${paradigm}`);
  }

  const tagString = tags.map((t) => `  - ${t}`).join("\n");
  const body = `
---
role: foundation
domain: ${domain}
paradigm: ${paradigm}
tags:
${tagString}
related:
aliases:
---
## Definition
Provide a clear, concise definition of the concept.

## Properties / Characteristics
List inherent properties or attributes.

## Examples
Provide minimal examples demonstrating the concept.

## Notes / Comments
Optional elaborations, cross-references, or clarifications.
`.trimStart();

  // Determine folder
  const domainFolder = kebabCaseToDomain(domain);
  const folder = `Concepts/${domainFolder}/Foundations`;
  const filePath = `${folder}/${title}.md`;

  // Ensure folder exists
  await app.vault.createFolder(folder).catch(() => {});

  // Create note
  await app.vault.create(filePath, body);

  // Open note
  const file = app.vault.getAbstractFileByPath(filePath);
  if (file) {
    await app.workspace.getLeaf().openFile(file);
  }
};
