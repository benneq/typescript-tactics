const hasProperties = (
  obj: unknown
): obj is Record<string, unknown> & Array<unknown> => {
  return typeof obj === 'object' && obj !== null;
};

/**
 *
 * @example
 * shallowEqual("", "") => true
 * shallowEqual({ a: 1 }, { a: 1 }) => true
 * shallowEqual([1,2,3], [1,2,3]) => true
 * shallowEqual({ a: 1 }, { b: 1 }) => false
 * shallowEqual([1,2], [2,3]) => false
 * shallowEqual(null, undefined) => false
 *
 * @param objA
 * @param objB
 * @returns
 */
export const shallowEqual = (objA: unknown, objB: unknown): boolean => {
  if (Object.is(objA, objB)) {
    return true;
  }

  if (!hasProperties(objA) || !hasProperties(objB)) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (const currentKey of keysA) {
    if (
      !(currentKey in objB) ||
      !Object.is(objA[currentKey], objB[currentKey])
    ) {
      return false;
    }
  }

  return true;
};
