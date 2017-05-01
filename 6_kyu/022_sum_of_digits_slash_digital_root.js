/**
 * 022_sum_of_digits_slash_digital_root.js
 * https://www.codewars.com/kata/sum-of-digits-slash-digital-root/
 *
 */

/**
 * In this kata, you must create a digital root function.
 *
 * A digital root is the recursive sum of all the digits in a number.
 * Given n, take the sum of the digits of n. If that value has two digits,
 * continue reducing in this way until a single-digit number is produced.
 * This is only applicable to the natural numbers.
 *
 * Here's how it works (Ruby example given):
 *                          digital_root(16)
 *                          => 1 + 6
 *                          => 7
 *
 *                          digital_root(942)
 *                          => 9 + 4 + 2
 *                          => 15 ...
 *                          => 1 + 5
 *                          => 6
 *
 */

function digital_root(n) {
    while(n > 9) {
        n = String(n).split('').reduce(function(res, c) {
            return res + parseInt(c, 10);
        }, 0);
    }
    return n;
}

/* clever solution */
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
