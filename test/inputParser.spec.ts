import { expect } from "chai";
import { parseInput } from "../src/parseInput";

describe('input parser', () => {
  it('validates input', () => {
    expect(() => parseInput('')).to.throw('Invalid input format');
  });
  it('validates input', () => {
    expect(() => parseInput('1,b,BFLR')).to.throw('Invalid input format');
  });
  it('validates input', () => {
    expect(() => parseInput('1,1,ADGF')).to.throw('Invalid input format');
  });
});
