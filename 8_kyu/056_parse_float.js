/**
 * 056_parse_float.js
 * http://www.codewars.com/kata/parse-float/
 *
 */

/**
 * Description:
 * Write function parseFloat (for Javascript parseF) which takes a string and returns
 * a number or Nothing (for Python None, for Javascript null) if conversion is not possible.
 *
 */

function parseF(s) {
    return isNaN(s) ? null : Number(s).toFixed(1);
}
