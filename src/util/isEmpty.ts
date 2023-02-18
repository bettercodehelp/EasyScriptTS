/**
 *
 * @function `isEmpty` - Checks whether a JS object or list is empty
 * @returns {boolean} Returns true if object is empty and false otherwise.
 */

export function isEmpty(obj: object | any[]): boolean {
    // Check if the object is null or undefined
    if (obj == null) {
      return true;
    }
  
    // Check if the object is an array and has a length of 0
    if (Array.isArray(obj) && obj.length === 0) {
      return true;
    }
  
    // Check if the object is an object and has no own properties
    if (typeof obj === 'object' && Object.keys(obj).length === 0) {
      return true;
    }
  
    // Otherwise, the object is not empty
    return false;
  }