/**
 * 018_sentence_smash.js
 * http://www.codewars.com/kata/sentence-smash
 *
 */

/**
 * Write a method smash that takes an array of words and smashes them together
 * into a sentence and returns the sentence. You can ignore any need to
 * sanitize words or add punctuation, but you should add spaces between each
 * word. Be careful, there shouldn't be a space at the beginning or the end of
 * the sentence!
 *
 * Assumptions
 * - You can assume that you are only given words.
 * - You cannot assume the size of the array.
 * - You can assume that you do get an array.
 */


// Smash Words
function smash (words) {
    "use strict";
    return words.join(' ');

}
