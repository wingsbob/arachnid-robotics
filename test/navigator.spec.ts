import { expect } from 'chai';
import { navigate } from '../src/navigator';

describe('navigator', () => {
  it('requires a start point', () => {
    expect(() => (navigate as any)()).to.throw('Missing start point');
  });
});
