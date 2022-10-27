import { defaultIf } from './defaultIf';
import { isUndefined } from './isUndefined';

/**
 * If the provided value is `undefined` the defaultValue will be returned
 */
export const defaultIfUndefined = defaultIf(isUndefined);
