const Calculator = require("./describe");

describe("add", () => {
  test("1 + 2 = 3", () => {
    /// arrange
    const num1 = 1;
    const num2 = 2;
    /// act
    const calculator = new Calculator(num1, num2);
    const result = calculator.add(num1, num2);
    /// assert
    expect(result).toBe(3);
  });
});
