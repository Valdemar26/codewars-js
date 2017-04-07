/**
 * 019_numerical_palindrome_number_1.js
 * https://www.codewars.com/kata/numerical-palindrome-number-1/
 *
 */

/**
 * A palindrome is a word, phrase, number, or other sequence of characters
 * which reads the same backward as forward. Examples of numerical palindromes are:
 *      2332
 *      110011
 *      54322345
 *
 * For a given number num, write a function to test if it's a numerical palindrome
 * or not and return a boolean (true if it is and false if not).
 * Return "Not valid" if the input is not an integer or less than 0.
 *
 */

function palindrome(num) {
    if (typeof num !== 'number' || num <=0) {
        return 'Not valid';
    }
    num = String(num);
    var len = num.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (num[i] !== num[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

/* clever solution */
function palindrome(num) {
    if (typeof num !== 'number' || num < 0){ return 'Not valid';}
    return num - Number(num.toString().split('').reverse().join('')) === 0 ? true : false;
}
