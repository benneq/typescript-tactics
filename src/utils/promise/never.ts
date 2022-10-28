import { empty } from '../func';

/**
 * A Promise that never fulfills
 */
export const never: Promise<unknown> = new Promise(empty);
