import { isPalidrome } from './utils';

describe('isPalidrome', () => {
  it('returns empty string for no names defined', () => {
    expect(isPalidrome('i topi non avevano nipoti')).toBeTruthy();
  });

  it('returns empty string for no names defined', () => {
    expect(isPalidrome('i topi avevano nipoti')).toBeFalsy();
  });
});
