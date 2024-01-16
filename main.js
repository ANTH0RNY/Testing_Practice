function testType(value, type) {
  if (typeof value !== type) {
    throw new Error("wrong input type");
  }
  return true;
}

function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error("wrong input type");
  }
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

function reverseString(string) {
  if (typeof string !== "string") {
    throw new Error("wrong type");
  }
  return string.split("").reverse().join("");
}

function add(a, b) {
  testType(a, "number");
  testType(b, "number");
  return a + b;
}
function subtract(a, b) {
  testType(a, "number");
  testType(b, "number");
  return a - b;
}
function divide(a, b) {
  testType(a, "number");
  testType(b, "number");
  return a / b;
}
function multiply(a, b) {
  testType(a, "number");
  testType(b, "number");
  return a * b;
}
const calculator = { add, subtract, divide, multiply };

function analyzeArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("wrong input type");
  }
  const length = array.length;
  if (length == 0) {
    return { length };
  }
  const average =
    array.reduce((p, n) => p + n, 0) / (length === 0 ? 1 : length);
  let max = array[0];
  let min = array[0];
  for (let i of array) {
    testType(i, "number");
    if (max < i) max = i;
    if (min > i) min = i;
  }
  return { length, average, max, min };
}

export { capitalize, reverseString, calculator, analyzeArray };
