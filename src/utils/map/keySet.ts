export const keySet = <K, V>(map: Map<K, V>): Set<K> => {
  return new Set(map.keys());
};
