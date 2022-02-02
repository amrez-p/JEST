const sum = require("./sum");

it("should add 1 + 2 equal 3", () => {
  let result = sum(1, 2);
  expect(result).toBe(3);
});
