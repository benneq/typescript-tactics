import { stringComparator } from './stringComparator';
import { Comparator } from './_types';

export const stringNaturalOrder: Comparator<string> = stringComparator();
