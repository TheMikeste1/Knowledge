/**
 * @param {string} str - The string to kebab-case.
 * @returns {string} The domain in kebab-case.
 */
function domainToKebabCase(str) {
  return str.trim().toLowerCase().replaceAll(" ", "-");
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

/**
 * @param {string} domain - The domain to check.
 * @param app - The Obsidian instance.
 * @returns {[string]} The name of domains.
 */
function getSubdomains(domain, app) {
  const conceptFolder = app.vault.getFolderByPath("Concepts/" + domain);
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

/**
 * @param api - The QuickAdd API.
 * @param app - The Obsidian API.
 * @returns {Promise<string>} The domain to use.
 */
async function chooseDomain(api, app) {
  const domains = getDomains(app);
  domains.push("(new)");
  let domain = await api.suggester(domains, domains.map(domainToKebabCase));
  if (domain === "(new)") {
    domain = await api.inputPrompt("New Domain:");
    domain = domainToKebabCase(domain);
  }

  return domain;
}

/**
 * @async
 * @param api - The QuickAdd API.
 * @param app - The Obsidian API.
 * @returns {Promise<string>} The subdomain to use, if one was chosen.
 */
async function chooseSubdomain(api, app, domain) {
  const subdomains = getSubdomains(domain, app);
  subdomains.unshift("(none)");
  subdomains.push("(new)");
  let subdomain = await api.suggester(
    subdomains,
    subdomains.map(domainToKebabCase),
  );
  if (subdomain === "(new)") {
    subdomain = await api.inputPrompt("New Subdomain:");
    subdomain = domainToKebabCase(subdomain);
  } else if (subdomain === "(none)") {
    return "";
  }

  return subdomain;
}

module.exports = async (params) => {
  const { quickAddApi, app, variables } = params;
  const domain = await chooseDomain(quickAddApi, app);
  const subdomain = await chooseSubdomain(quickAddApi, app, domain);
  variables.domain = {
    domain: domain,
    subdomain: subdomain,
  };
};
