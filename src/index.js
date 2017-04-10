/**
 * Adds two numbers
 * @param {number} num1
 * @param {number} num2
 * @returns {Number}
 */
export function add(num1, num2) {
  return num1 + num2;
}

// Solely to prove that object spread works
export function testSpread(data = {}) {
  return { ...data };
}

/**
 * Colors Enum
 * @enum {Symbol}
 */
export const Colors = {
  Red: Symbol('Red'),
  Green: Symbol('Green'),
  Blue: Symbol('Blue'),
};
