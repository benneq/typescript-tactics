import { alwaysFalse } from './alwaysFalse';
import { alwaysTrue } from './alwaysTrue';
import { or } from './or';

describe('predicate.or', () => {
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
