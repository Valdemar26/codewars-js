/**
 * 003_convert_number_to_reversed_array_of_digits.js
 * http://www.codewars.com/kata/convert-number-to-reversed-array-of-digits
 *
 */

/**
 * Given a non-negative integer, return an array containing a list of
 * independent digits in reverse order.
 * Example:
 *         348597 => [7,9,5,8,4,3]
 */

function digitize(n) {
    //code here
    return String(n).split('').map(Number).reverse();
}