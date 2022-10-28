export const copy = <K, V>(map: Map<K, V>): Map<K, V> => {
  return new Map(map);
};
