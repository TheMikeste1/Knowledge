module.exports = async (params) => {
  const { quickAddApi, variables } = params;
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
  variables.paradigm = paradigm;
};
