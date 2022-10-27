import { defaultIf } from './defaultIf';
import { isNull } from './isNull';

/**
 * If the provided value is `null` the defaultValue will be returned
 */
export const defaultIfNull = defaultIf(isNull);
