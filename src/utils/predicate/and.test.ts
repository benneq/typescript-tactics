import { alwaysFalse } from './alwaysFalse';
import { alwaysTrue } from './alwaysTrue';
import { and } from './and';

describe('predicate.and', () => {
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
});

export {};
