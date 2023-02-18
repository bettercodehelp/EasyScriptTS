/**
 *
 * @function `matches` - Checks whether two objects or two arrays are identcal
 * @returns {boolean} returns true if the items do match, and false otherwise
 */

export function matches(obj1: any, obj2: any): boolean {
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        // If both inputs are arrays
        if (obj1.length !== obj2.length) {
        return false;
        }

        for (let i = 0; i < obj1.length; i++) {
        // Recursively call matches only if the value is an object or an array
        if (
            (typeof obj1[i] === "object" && obj1[i] !== null) ||
            Array.isArray(obj1[i])
        ) {
            if (!matches(obj1[i], obj2[i])) {
            return false;
            }
        } else if (obj1[i] !== obj2[i]) {
            return false;
        }
        }
        return true;
    } else if (
        typeof obj1 === "object" &&
        obj1 !== null &&
        typeof obj2 === "object" &&
        obj2 !== null
    ) {
        // If both inputs are objects
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
        return false;
        }

        for (const key of keys1) {
        if (!keys2.includes(key)) {
            return false;
        }

        // Recursively call matches only if the value is an object or an array
        if (
            (typeof obj1[key] === "object" && obj1[key] !== null) ||
            Array.isArray(obj1[key])
        ) {
            if (!matches(obj1[key], obj2[key])) {
            return false;
            }
        } else if (obj1[key] !== obj2[key]) {
            return false;
        }
        }
        return true;
    } else {
        // For all other cases, use strict equality
        return obj1 === obj2;
    }
}
