import { alwaysFalse, alwaysTrue, and, not, or } from './predicate';

describe('predicate', () => {
  it('alwaysTrue', () => {
    expect(alwaysTrue()).toEqual(true);
  });

  it('alwaysFalse', () => {
    expect(alwaysFalse()).toEqual(false);
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
