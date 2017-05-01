/**
 * 046_powers_of_two.js
 * https://www.codewars.com/kata/powers-of-2/
 *
 */

/**
 * Write a function powersOfTwo which will return list of
 * all powers of 2 from 0 to n (where n is an exponent).
 *
 * Examples:
 *           n = 0 -> 2^0 -> [1]
 *           n = 1 -> 2^0, 2^1 -> [1,2]
 *           n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]
 *
 */

function powersOfTwo(n){
    var pow = [];
    for(var i = 0; i <= n; i++) {
        pow.push(Math.pow(2, i));
    }
    return pow;
}
