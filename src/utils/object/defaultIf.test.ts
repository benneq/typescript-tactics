import { defaultIf } from './defaultIf';

describe('object.defaultIf', () => {
  it('defaultIf', () => {
    const defaultValue = Symbol();
    const value = Symbol();
    expect(
      defaultIf((value): value is unknown => true)(defaultValue)(value)
    ).toEqual(defaultValue);
    expect(
      defaultIf((value): value is unknown => false)(defaultValue)(value)
    ).toEqual(value);
  });
});

export {};
