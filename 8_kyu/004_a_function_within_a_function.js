/**
 * 004_a_function_within_a_function.js.js
 * http://www.codewars.com/kata/a-function-within-a-function
 *
 */

/**
 * Given an input n, write a function always that returns a function which
 * returns n.
 */

// return a function that returns n
function always (n) {
    return function () {
        return n;
    };
}
