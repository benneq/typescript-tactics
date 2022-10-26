import { empty } from './function';

export const never: Promise<unknown> = new Promise(empty);
