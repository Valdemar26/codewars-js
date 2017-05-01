/**
 * 031_double_char.js
 * https://www.codewars.com/kata/double-char
 *
 */

/**
 * Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
 * For example:
 *              doubleChar("String") ==> "SSttrriinngg"
 *              doubleChar("Hello World") ==> "HHeelllloo  WWoorrlldd"
 *              doubleChar("1234!_ ") ==> "11223344!!__  "
 */

function doubleChar(str) {
    // Your code here
    return String(str).split('').map(function(double) {
        return double+double;
    }).join('');
}
