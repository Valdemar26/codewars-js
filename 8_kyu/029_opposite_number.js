/**
 * 029_opposite_number.js
 * https://www.codewars.com/kata/opposite-number
 *
 */

/**
 * Very simple, given a number, find its opposite.
 *
 * Example:
 *          1: -1
 *          14: -14
 *          -34: 34
 */

function opposite(number) {
    //your code here
    return (number > 0 ? -Math.abs(number) : Math.abs(number));
}

/* clever solution */
function opposite(number) {
    return(-number);
}
