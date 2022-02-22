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
  describe('test data', () => {
    it('parses test data correctly', () => {
      expect(parseInput('0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF')).to.deep.equal({
        x: 0,
        y: 0,
        directions: ['F', 'R', 'F', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'F', 'F', 'R', 'F', 'F', 'F', 'F', 'L', 'F', 'F', 'L', 'R', 'R', 'F'],
      });
    });
    it('parses test data correctly', () => {
      expect(parseInput('3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF')).to.deep.equal({
        x: 3,
        y: 6,
        directions: ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'F', 'F', 'F'],
      });
    });
    it('parses test data correctly', () => {
      expect(parseInput('0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR')).to.deep.equal({
        x: 0,
        y: 7,
        directions: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R'],
      });
    });
  });
});
