/**
 * 023_return_negative.js
 * http://www.codewars.com/kata/return-negative
 *
 */

/**
 * In this simple assignment you are given a number and have to make it
 * negative. But maybe the number is already negative?
 */

function makeNegative(num) {
    // Code?
    return num <=0 ? num : -num;
}

/* clever solution */
function makeNegative(num) {
    return -Math.abs(num);
}
