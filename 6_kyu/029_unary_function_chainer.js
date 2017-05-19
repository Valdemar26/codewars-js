/**
 * 029_unary_function_chainer.js
 * http://www.codewars.com/kata/unary-function-chainer/
 *
 */

/**
 * Your task is to write a higher order function for chaining together
 * a list of unary functions. In other words, it should return
 * a function that does a left fold on the given functions.
 *
 *      chained([a,b,c,d])(input)
 *
 * Should yield the same result as
 *
 *      d(c(b(a(input))))
 *
 */


function chained(functions) {
    return function(n) {
        functions.forEach(function(f) {
            n = f(n);
        });

        return n;
    };
}