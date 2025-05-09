/**
 * Deep clone of object.
 *
 * @param obj - Object to be cloned.
 */
export function clone(obj: any): any {
  if(obj === undefined || obj === null) return null;

  const keys = Object.keys(obj);

  const copy: any = Array.isArray(obj) ? [] : {};

  for(const key of keys) {
    const value = obj[key];

    if (typeof value === 'object') {
      copy[key] = clone(value);
    } else {
      copy[key] = value;
    }

  }

  return copy;
}