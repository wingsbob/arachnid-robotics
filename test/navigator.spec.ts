import { expect } from 'chai';
import { navigateV1, navigateV2 } from '../src/navigator';

describe('navigator', () => {
  describe('version 1', () => {
    it('returns the start point with no directions', () => {
      expect(navigateV1([0, 0])).to.deep.equal([0, 0]);
    });
    it('moves forward one when told to move forward 1', () => {
      expect(navigateV1([0, 0], ['F'])).to.deep.equal([1, 0]);
    });
    it('moves backward one when told to move backward 1', () => {
      expect(navigateV1([0, 0], ['B'])).to.deep.equal([-1, 0]);
    });
    it('moves left one when told to move left 1', () => {
      expect(navigateV1([0, 0], ['L'])).to.deep.equal([0, -1]);
    });
    it('moves right one when told to move right 1', () => {
      expect(navigateV1([0, 0], ['R'])).to.deep.equal([0, 1]);
    });
    it('handles sequences of movement', () => {
      expect(navigateV1([0, 0], ['F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'B', 'B'])).to.deep.equal([4, 1]);
    });
    describe('test data', () => {
      it('navigates the test data correctly', () => {
        expect(navigateV1([0, 0], ['F', 'R', 'F', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'F', 'F', 'R', 'F', 'F', 'F', 'F', 'L', 'F', 'F', 'L', 'R', 'R', 'F'])).to.deep.equal([21, -1]);
      });
      it('navigates the test data correctly', () => {
        expect(navigateV1([3, 6], ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'F', 'F', 'F']))
          .to.deep.equal([16, 7]);
      });
      it('navigates the test data correctly', () => {
        expect(navigateV1([0, 7], ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R']))
          .to.deep.equal([8, 10]);
      });
    });
  });

  describe('version 2', () => {
    it('returns the start point with no directions', () => {
      expect(navigateV2([0, 0], 0)).to.deep.equal({ location: [0, 0], orientation: 0 });
    });
    it('moves forward one when told to move forward 1', () => {
      expect(navigateV2([0, 0], 0, ['F'])).to.deep.equal({ location: [0, 1], orientation: 0 });
    });
    it('rotates 180 degress when told to go backwards', () => {
      expect(navigateV2([0, 0], 0, ['B'])).to.deep.equal({ location: [0, 0], orientation: 180 });
    });
    it('rotates 90 degress left one when told to go left', () => {
      expect(navigateV2([0, 0], 0, ['L'])).to.deep.equal({ location: [0, 0], orientation: 270 });
    });
    it('rotates 90 degress right one when told to go right', () => {
      expect(navigateV2([0, 0], 0, ['R'])).to.deep.equal({ location: [0, 0], orientation: 90 });
    });
    it('handles multiple rotations', () => {
      expect(navigateV2([0, 0], 0, ['R', 'L'])).to.deep.equal({ location: [0, 0], orientation: 0 });
    });
    it('handles multiple rotations', () => {
      expect(navigateV2([0, 0], 0, ['B', 'B'])).to.deep.equal({ location: [0, 0], orientation: 0 });
    });
    it('does not move into negative territory', () => {
      expect(navigateV2([0, 0], 180, ['F'])).to.deep.equal({ location: [0, 0], orientation: 180 });
    });
    it('does not move into negative territory', () => {
      expect(navigateV2([0, 0], 270, ['F'])).to.deep.equal({ location: [0, 0], orientation: 270 });
    });
    it('handles sequences of movement', () => {
      expect(navigateV2([0, 0], 0, ['F', 'F', 'F', 'L', 'L', 'L', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'B', 'B']))
        .to.deep.equal({ location: [3, 3], orientation: 180 });
    });
    describe('test data', () => {
      it('navigates the test data correctly', () => {
        expect(navigateV2([0, 0], 0, ['F', 'B', 'L', 'R']))
          .to.deep.equal({ location: [0, 1], orientation: 180 });
      });
      it('navigates the test data correctly', () => {
        expect(navigateV2([0, 0], 0, ['F', 'R', 'F', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'L', 'F', 'F', 'F', 'F', 'F', 'R', 'F', 'F', 'F', 'F', 'L', 'F', 'F', 'L', 'R', 'R', 'F']))
          .to.deep.equal({ location: [0, 0], orientation: 270 });
      });
      it('navigates the test data correctly', () => {
        expect(navigateV2([3, 6], 0, ['F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'R', 'R', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'R', 'F', 'F', 'F']))
          .to.deep.equal({ location: [3, 14], orientation: 90 });
      });
      it('navigates the test data correctly', () => {
        expect(navigateV2([0, 7], 0, ['R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'F', 'L', 'L', 'L', 'B', 'B', 'B', 'B', 'B', 'R', 'R', 'R', 'L', 'L', 'L', 'L', 'L', 'F', 'F', 'L', 'R']))
          .to.deep.equal({ location: [2, 18], orientation: 90 });
      });
    });
  });
});
