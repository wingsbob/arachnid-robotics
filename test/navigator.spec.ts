import { expect } from 'chai';
import { navigate } from '../src/navigator';

describe('navigator', () => {
  it('returns the start point with no directions', () => {
    expect(navigate([0, 0])).to.deep.equal([0, 0]);
  });
  it('moves forward one when told to move forward 1', () => {
    expect(navigate([0, 0], ['F'])).to.deep.equal([1, 0]);
  });
  it('moves backward one when told to move backward 1', () => {
    expect(navigate([0, 0], ['B'])).to.deep.equal([-1, 0]);
  });
  it('moves left one when told to move left 1', () => {
    expect(navigate([0, 0], ['L'])).to.deep.equal([0, -1]);
  });
  it('moves right one when told to move right 1', () => {
    expect(navigate([0, 0], ['R'])).to.deep.equal([0, 1]);
  });
  it('handles sequences of movement', () => {
    expect(navigate([0, 0], ['F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'B', 'B'])).to.deep.equal([4, 1]);
  });
  describe('test data', () => {
    it('navigates the test data correctly', () => {
      expect(navigate([0, 0], ['F', 'R', 'F', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'F', 'F', 'R', 'F', 'F', 'F', 'F', 'L', 'F', 'F', 'L', 'R', 'R', 'F'])).to.deep.equal([21, -1]);
    });
    it('navigates the test data correctly', () => {
      expect(navigate([3, 6], ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'F', 'F', 'F']))
        .to.deep.equal([16, 7]);
    });
    it('navigates the test data correctly', () => {
      expect(navigate([0, 7], ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R']))
        .to.deep.equal([8, 10]);
    });
  });
});
