import { expect } from 'chai';
import { navigate } from '../src/navigator';

describe('navigator', () => {
  it('requires a start point', () => {
    expect(() => (navigate as any)()).to.throw('Missing start point');
  });
  it('returns the start point with no directions', () => {
    expect(navigate([0, 0])).to.deep.equal([0, 0]);
  });
  it('moves up one when told to move forward 1', () => {
    expect(navigate([0, 0], ['F'])).to.deep.equal([1, 0]);
  });
});
