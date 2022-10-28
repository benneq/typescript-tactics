export const isEmpty = <K, V>(map: Map<K, V>): boolean => {
  return !map.size;
};
