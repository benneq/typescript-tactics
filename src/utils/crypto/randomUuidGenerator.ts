import { fromFunction } from '../generator/fromFunction';
import { randomUuid } from './randomUuid';

export const randomUuidGenerator = fromFunction(randomUuid);
