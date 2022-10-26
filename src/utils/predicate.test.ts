import {
  alwaysFalse,
  alwaysTrue,
  and,
  isFalsy,
  isTruthy,
  not,
  or,
} from './predicate';

describe('predicate', () => {
  it('alwaysTrue', () => {
    expect(alwaysTrue()).toEqual(true);
  });

  it('alwaysFalse', () => {
    expect(alwaysFalse()).toEqual(false);
  });

  it('isTruthy', () => {
    expect(isTruthy(true)).toEqual(true);
    expect(isTruthy(' ')).toEqual(true);
    expect(isTruthy(1)).toEqual(true);
    expect(isTruthy(-1)).toEqual(true);
    expect(isTruthy({})).toEqual(true);
    expect(isTruthy([])).toEqual(true);

    expect(isTruthy(false)).toEqual(false);
    expect(isTruthy('')).toEqual(false);
    expect(isTruthy(0)).toEqual(false);
    expect(isTruthy(NaN)).toEqual(false);
    expect(isTruthy(undefined)).toEqual(false);
    expect(isTruthy(null)).toEqual(false);
  });

  it('isFalsy', () => {
    expect(isFalsy(true)).toEqual(false);
    expect(isFalsy(' ')).toEqual(false);
    expect(isFalsy(1)).toEqual(false);
    expect(isFalsy(-1)).toEqual(false);
    expect(isFalsy({})).toEqual(false);
    expect(isFalsy([])).toEqual(false);

    expect(isFalsy(false)).toEqual(true);
    expect(isFalsy('')).toEqual(true);
    expect(isFalsy(0)).toEqual(true);
    expect(isFalsy(NaN)).toEqual(true);
    expect(isFalsy(undefined)).toEqual(true);
    expect(isFalsy(null)).toEqual(true);
  });

  it('not', () => {
    expect(not(() => true)(Symbol())).toEqual(false);
    expect(not(() => false)(Symbol())).toEqual(true);

    expect(not((value) => value === 3)(2)).toEqual(true);
    expect(not((value) => value === 3)(3)).toEqual(false);
  });

  it('and', () => {
    expect(and()(Symbol())).toEqual(true);
    expect(and(alwaysTrue)(Symbol())).toEqual(true);
    expect(and(alwaysFalse)(Symbol())).toEqual(false);
    expect(and(alwaysTrue, alwaysTrue)(Symbol())).toEqual(true);
    expect(and(alwaysTrue, alwaysFalse)(Symbol())).toEqual(false);
    expect(and(alwaysFalse, alwaysTrue)(Symbol())).toEqual(false);
    expect(and(alwaysFalse, alwaysFalse)(Symbol())).toEqual(false);

    expect(and((value) => !value)(Symbol())).toEqual(false);
    expect(and((value) => !!value)(Symbol())).toEqual(true);
  });

  it('or', () => {
    expect(or()(Symbol())).toEqual(false);
    expect(or(alwaysTrue)(Symbol())).toEqual(true);
    expect(or(alwaysFalse)(Symbol())).toEqual(false);
    expect(or(alwaysTrue, alwaysTrue)(Symbol())).toEqual(true);
    expect(or(alwaysTrue, alwaysFalse)(Symbol())).toEqual(true);
    expect(or(alwaysFalse, alwaysTrue)(Symbol())).toEqual(true);
    expect(or(alwaysFalse, alwaysFalse)(Symbol())).toEqual(false);

    expect(or((value) => !value)(Symbol())).toEqual(false);
    expect(or((value) => !!value)(Symbol())).toEqual(true);
  });
});

export {};
