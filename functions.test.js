const functions = require("./functions");

test("data.items[0].volumeInfo.title should Scar Tissue", async () => {
  expect.assertions(1);
  const data = await functions.getBook("Scar Tissue");
  expect(data.items[0].volumeInfo.title).toEqual("Scar Tissue");
});
