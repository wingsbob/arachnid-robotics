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
  it('validates v1 input with explicit version', () => {
    expect(() => parseInput('1,1,1,ADGF')).to.throw('Invalid input format');
  });
  it('validates v2 input', () => {
    expect(() => parseInput('1,1,2,BFLR')).to.throw('Invalid input format');
  });
  it('validates v2 input', () => {
    expect(() => parseInput('1,1,1,2,BFLR')).to.throw('Invalid input format');
  });
  it('validates v3 input', () => {
    expect(() => parseInput('1,1,3,0,3BFLR')).to.throw('Invalid input format');
  });
  it('validates v3 input', () => {
    expect(() => parseInput('1,1,3,0,B6FLR')).to.throw('Invalid input format');
  });
  it('validates input version', () => {
    expect(() => parseInput('1,1,4,0,BFLR')).to.throw('Invalid version');
  });
  describe('test data', () => {
    it('parses test data correctly', () => {
      expect(parseInput('0,0,FRFRFFFFFFFLLLLFFFFFRFFFFLFFLRRF')).to.deep.equal({
        x: 0,
        y: 0,
        directions: ['F', 'R', 'F', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'F', 'F', 'R', 'F', 'F', 'F', 'F', 'L', 'F', 'F', 'L', 'R', 'R', 'F'],
        version: 1,
        orientation: 0,
      });
    });
    it('parses test data correctly', () => {
      expect(parseInput('3,6,FFFFFFFFRRRRRRRFFFFLLLBBRRRRRLLLLLLLLLRFFF')).to.deep.equal({
        x: 3,
        y: 6,
        directions: ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'F', 'F', 'F'],
        version: 1,
        orientation: 0,
      });
    });
    it('parses test data correctly', () => {
      expect(parseInput('0,7,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR')).to.deep.equal({
        x: 0,
        y: 7,
        directions: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R'],
        version: 1,
        orientation: 0,
      });
    });
    it('parses v2 test data correctly', () => {
      expect(parseInput('0,7,2,90,RRRRRRRRFFFFFFFFFFFLLLBBBBBRRRLLLLLFFLR')).to.deep.equal({
        x: 0,
        y: 7,
        directions: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R'],
        version: 2,
        orientation: 90,
      });
    });
    it('parses v3 test data correctly', () => {
      expect(parseInput('0,7,3,90,RRRRRRRRFFF5FFFFFFFFLLLBBBBBRRRLLLLLFFLR')).to.deep.equal({
        x: 0,
        y: 7,
        directions: ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', '5F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R'],
        version: 3,
        orientation: 90,
      });
    });
  });
});
