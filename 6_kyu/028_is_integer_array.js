/**
 * 028_is_integer_array.js
 * http://www.codewars.com/kata/is-integer-array/
 *
 */

/**
 * Write a function isIntArray with the below signature.
 *
 * function isIntArray(arr) {
 *   return true;
 * }
 *
 *      - returns true if every element in an array is an integer.
 *      - returns true if array is empty.
 *      - returns false for every other input.
 *
 */

function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function(x) {
            return typeof x === 'number' && x % 1 === 0;
        });
}

/* best practices */
function isIntArray(arr) {
    return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}