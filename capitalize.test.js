const capitalizeString = require("./capitalize");

test("should return the first character of the string", () => {
  ///arrange
  const str = "piesie";
  ///act
  const result = capitalizeString(str);
  ///assert
  expect(result).toBe("Piesie");
});
