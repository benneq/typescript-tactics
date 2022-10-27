import { empty } from '../function';

/**
 * A Promise that never fulfills
 */
export const never: Promise<unknown> = new Promise(empty);
