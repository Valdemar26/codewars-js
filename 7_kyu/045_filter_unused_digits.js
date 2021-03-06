/**
 * 045_filter_unused_digits.js
 * https://www.codewars.com/kata/filter-unused-digits/
 *
 */

/**
 * Given few numbers, you need to print out the digits that are not being used.
 *
 * Example:
 *          unusedDigits(12, 34, 56, 78) // "09"
 *          unusedDigits(2015, 8, 26) // "3479"
 *
 * Note:
 *          Result string should be sorted
 *          The test case won't pass Integer with leading zero
 *
 */

function unusedDigits(...args){
    return '0123456789'.replace(new RegExp('[' + args.join('') + ']', 'g'), '');
}