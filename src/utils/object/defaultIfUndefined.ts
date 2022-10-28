import { defaultIf } from './defaultIf';
import { isUndefined } from './isUndefined';

/**
 * If the provided value is `undefined` the defaultValue will be returned
 *
 * @example
 * defaultIfUndefined(0)(null) => 0
 * defaultIfUndefined(0)(2) => 2
 * defaultIfUndefined(() => 3)(undefined) => 3
 */
export const defaultIfUndefined = defaultIf(isUndefined);
