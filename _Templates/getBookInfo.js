module.exports = async (params) => {
  const {
    quickAddApi: { inputPrompt, suggester },
  } = params;
  const bookName = await inputPrompt("Book name:");
  const authorFullName = await inputPrompt("Author's name:");
  const documentType = await suggester(
    ["Book", "Blog", "Paper", "Video"],
    ["book", "blog", "paper", "video"],
  );

  const authorNameParts = authorFullName.split(" ");
  const authorFirstName = authorNameParts
    .slice(0, authorNameParts.length - 1)
    .join(" ");
  const authorLastName = authorNameParts.at(-1);
  params.variables["BOOK_NAME"] = bookName;
  params.variables["AUTHOR_FIRST_NAME"] = authorFirstName;
  params.variables["AUTHOR_LAST_NAME"] = authorLastName;
  params.variables["DOCUMENT_TYPE"] = documentType;
};
