const stringLength = require("./stringLength");

test("should return the count of letters in a string", () => {
  /// arrange
  const str = "hello";
  /// act
  const result = stringLength(str);
  /// assert
  expect(result).toBe(5);
});
