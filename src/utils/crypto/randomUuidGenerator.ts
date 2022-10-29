import { fromFunction } from '../generator/fromFunction';

export const randomUuidGenerator = fromFunction(() => crypto.randomUUID());
