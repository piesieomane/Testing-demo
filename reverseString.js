const reverseString = (str) => {
  if (str.length > 0 && str.length < 10) {
    return str.length;
  } else {
    throw new Error("String is empty or too long");
  }

  //   return str.split("").reverse().join("");
};

module.exports = reverseString;
