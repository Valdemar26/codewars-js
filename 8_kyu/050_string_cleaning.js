/**
 * 022_sum_of_digits_slash_digital_root.js
 * https://www.codewars.com/kata/string-cleaning/train/javascript
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
 function stringClean(s){
   return s.replace(/[0-9]/g, '');
 }
