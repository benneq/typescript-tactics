import { valueOrProviderResult } from './valueOrProvider';

describe('object.valueOrProvider', () => {
  it('should return the provided value if it is not a function', () => {
    expect(valueOrProviderResult(undefined)).toBe(undefined);
    expect(valueOrProviderResult(1)).toBe(1);
  });

  it('should return the result of the function if the provided value is a function', () => {
    expect(valueOrProviderResult(() => null)).toBe(null);
    expect(valueOrProviderResult(() => '')).toBe('');
  });
});

export {};
