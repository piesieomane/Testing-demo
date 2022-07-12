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

describe("add", () => {
  test("2 - 1 = 1", () => {
    /// arrange
    const num1 = 2;
    const num2 = 1;
    /// act
    const calculator = new Calculator(num1, num2);
    const result = calculator.substract(num1, num2);
    /// assert
    expect(result).toBe(1);
  });
});

describe("divide", () => {
  test("2/2 = 1", () => {
    /// arrange
    const num1 = 2;
    const num2 = 2;
    /// act
    const calculator = new Calculator(num1, num2);
    const result = calculator.divide(num1, num2);
    /// assert
    expect(result).toBe(1);
  });
});
