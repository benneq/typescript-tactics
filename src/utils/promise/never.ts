import { empty } from '../function/empty';

/**
 * A Promise that never fulfills
 */
export const never: Promise<unknown> = new Promise(empty);
