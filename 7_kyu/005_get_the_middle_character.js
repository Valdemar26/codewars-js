/**
 * 005_get_the_middle_character.js
 * https://www.codewars.com/kata/get-the-middle-character/
 *
 */

/**
 * You are going to be given a word. Your job is to return the middle character of the word.
 * If the word's length is odd, return the middle character. If the word's length is even,
 * return the middle 2 characters.
 *
 *
 * Examples:
 *         Kata.getMiddle("test") should return "es"
 *         Kata.getMiddle("testing") should return "t"
 *         Kata.getMiddle("middle") should return "dd"
 *         Kata.getMiddle("A") should return "A"
 *
 *
 * A word (string) of length 0 < str < 1000
 */

function getMiddle(s) {
    //Code goes here!
    var len = Math.floor(s.length / 2);
    return s.length % 2 == 0 ? s[len-1] + s[len] : s[len];
}

/* clever solution */
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
