import { describe, expect, test } from "@jest/globals";
import {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  ceasarCypher,
} from "../main";

describe("Tests the capitalize function", () => {
  test("Capitalize hello to Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("capitalize world to World", () => {
    expect(capitalize("world")).toBe("World");
  });
  test("Capitalize throws an error on wrong input type", () => {
    expect(() => capitalize(12)).toThrow();
  });
});

describe("test reverseString function", () => {
  test("reverseString reverses string", () => {
    expect(reverseString("hello")).toBe("olleh");
    expect(reverseString("world")).toBe("dlrow");
    expect(reverseString("racecar")).toBe("racecar");
  });
  test("reverseString throws error when given wrong type", () => {
    expect(() => reverseString(12)).toThrow();
    expect(() => reverseString({})).toThrow();
  });
});

describe("test calculator object", () => {
  test("add calculator function", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calculator.add(100, 900)).toBe(1000);
    expect(calculator.add(30, -50)).toBe(-20);
    expect(() => calculator.add("w", 3)).toThrow();
    expect(() => calculator.add(4, "e")).toThrow();
  });
  test("subtract calculator function", () => {
    expect(calculator.subtract(5, 3)).toBe(5 - 3);
    expect(calculator.subtract(1000.0, 890.56)).toBe(1000.0 - 890.56);
    expect(calculator.subtract(0.3, 0.1)).toBeCloseTo(0.2);
    expect(() => calculator.subtract("t", 1)).toThrow();
    expect(() => calculator.subtract(1, "y")).toThrow();
  });
  test("multiple calculator function", () => {
    expect(calculator.multiply(5, 10)).toBe(50);
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
    expect(() => calculator.multiply("t", 3)).toThrow();
    expect(() => calculator.multiply(3, [])).toThrow();
  });
  test("divide calculator function", () => {
    expect(calculator.divide(14, 7)).toBeCloseTo(2);
    expect(calculator.divide(0.6, 2)).toBeCloseTo(0.3);
    expect(calculator.divide(0, 23)).toBe(0);
    expect(calculator.divide(12, 0)).toBe(Infinity);
    expect(() => calculator.divide("t", 34)).toThrow();
    expect(() => calculator.divide(23, "ty")).toThrow();
  });
});

describe("test analyzeArray", () => {
  test("test it gives correct value", () => {
    expect(analyzeArray([0, 1, 2, 3, 4])).toEqual({
      max: 4,
      min: 0,
      length: 5,
      average: 2,
    });
    expect(analyzeArray([10_000, 400, 300, 200, 600])).toEqual({
      max: 10_000,
      min: 200,
      length: 5,
      average: 2300,
    });
    expect(analyzeArray([])).toEqual({ length: 0 });
  });
  test("test error on wrong input", () => {
    expect(() => analyzeArray(["w", 1, 2, 3, 3])).toThrow();
    expect(() => analyzeArray(123)).toThrow();
  });
});

describe("testing ceasarCypher", () => {
  test("works for basic case", () => {
    expect(ceasarCypher("hello", 1)).toBe("ifmmp");
    expect(ceasarCypher("world", 2)).toBe("yqtnf");
    expect(ceasarCypher("abcd", 15)).toBe("pqrs");
  });
  test("maitains case", () => {
    expect(ceasarCypher("Hello", 1)).toBe("Ifmmp");
    expect(ceasarCypher("worlD", 2)).toBe("yqtnF");
    expect(ceasarCypher("ABCD", 15)).toBe("PQRS");
  });
  test("maintains punctuation", () => {
    expect(ceasarCypher("hel lo", 1)).toBe("ifm mp");
    expect(ceasarCypher("_world_", 2)).toBe("_yqtnf_");
    expect(ceasarCypher('a-b,c.d"', 15)).toBe('p-q,r.s"');
  });
  test("word wrap works", () => {
    expect(ceasarCypher("hello", 26)).toBe("hello");
    expect(ceasarCypher("world", 28)).toBe("yqtnf");
    expect(ceasarCypher("abcd", 41)).toBe("pqrs");
  });
  test("throws error on wrong input type", () => {
    expect(() => ceasarCypher(12, 12)).toThrow();
    expect(() => ceasarCypher("hello", "0")).toThrow();
  });
});
