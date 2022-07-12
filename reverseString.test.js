const reverseString = require("./reverseString");

// test("should return the reverse of a string", () => {
//   /// arrange
//   const str = "hello";
//   /// act
//   const result = reverseString(str);
//   /// assert
//   expect(result).toBe("olleh");
// });

test("should return an empty string if the string is empty and less than 10", () => {
  /// arrange
  const str = "asdfghjklzxcvbnm";
  /// act
  const result = () => reverseString(str);
  /// assert
  expect(result).toThrowError("String is empty or too long");
});
