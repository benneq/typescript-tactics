import { valueOrProviderResult } from './valueOrProvider';

describe('object.valueOrProvider', () => {
  it('valueOrProviderResult', () => {
    expect(valueOrProviderResult(undefined)).toEqual(undefined);
    expect(valueOrProviderResult(1)).toEqual(1);
    expect(valueOrProviderResult(() => null)).toEqual(null);
    expect(valueOrProviderResult(() => '')).toEqual('');
  });
});

export {};
