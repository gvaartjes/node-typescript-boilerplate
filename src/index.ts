import { plusOne } from './utils';
const a = 33;
const b = 3;
/**
 *
 * @param {number} a the first number
 * @param {number} b the 2nd number
 * @return {number} The sum of the two numbers.
 */
export function sum(a: number, b: number): number {
  return a + b;
}

export const proof = () => {
  console.log(`${a} + ${b} = ${sum(a, b)}`);
  console.log(`3 plus one = ${plusOne(3)}`);
};
