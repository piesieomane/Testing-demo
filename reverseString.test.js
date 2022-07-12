const reverseString = require("./reverseString");

test("should return the reverse of a string", () => {
  /// arrange
  const str = "hello";
  /// act
  const result = reverseString(str);
  /// assert
  expect(result).toBe("olleh");
});
