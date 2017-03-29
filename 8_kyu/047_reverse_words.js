/**
 * 047_reverse_words.js
 * https://www.codewars.com/kata/reverse-words/
 *
 */

/**
 * Write a reverseWords function that accepts a string a parameter,
 * and reverses each word in the string. Every space should stay,
 * so you cannot use words from Prelude.
 *
 * Examples:
 *           reverseWords("This is an example!");  =>  "sihT si na !elpmaxe"
 *           reverseWords("double  spaces") -- "elbuod  secaps"
 *           n = 2 -> 2^0, 2^1, 2^2 -> [1,2,4]
 *
 */

function reverseWords(str) {
    // Go for it

    var revStr = str.split('').reverse().join('').split(' ');
    var finStr = [];

    for (var i = (revStr.length - 1); i >= 0; i--) {
        finStr.push(revStr[i]);
    }

    return finStr.toString().replace(/,/g, ' ');
}