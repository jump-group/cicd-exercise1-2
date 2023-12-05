import { isPalidrome } from './utils';

describe('isPalidrome', () => {
  it('return true if the word is i topi non avevano nipoti', () => {
    expect(isPalidrome('i topi non avevano nipoti')).toBeTruthy();
  });

  it('return false if the word is "i topi avevano nipoti"', () => {
    expect(isPalidrome('i topi avevano nipoti')).toBeFalsy();
  });
});
