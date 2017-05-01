/**
 * 020_find_the_remainder.js
 * http://www.codewars.com/kata/find-the-remainder
 *
 */

/**
 * Write a function that accepts two arguments and returns the remainder after
 * dividing the larger number by the smaller number. Division by zero should
 * return NaN. Arguments will both be integers.
 */

function remainder(a, b){
    // Divide the larger argument by the smaller argument and return the remainder
    return Math.max(a, b) % Math.min(a, b);
}

// Alternative
function remainder2(a, b) {
    return a < b ? a % b : b % a;
}
