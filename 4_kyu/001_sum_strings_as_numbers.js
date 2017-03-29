/**
 * 001_sum_strings_as_numbers.js
 * https://www.codewars.com/kata/jaden-casing-strings/
 *
 */

/**
 * Given the string representations of two integers,
 * return the string representation of the sum of those integers.
 *
 * For example:
 *              sumStrings('1','2') // => '3'
 *
 * A string representation of an integer will contain no characters
 * besides the ten numerals "0" to "9".
 *
 */

function sumStrings(a, b) {
    return String(Number(a) + Number(b));
}
/* got error
           sumStrings('712569312664357328695151392', '8100824045303269669937') -
           Expected: '712577413488402631964821329', instead got: '8.813393357967626e+21'
 */
