/**
 * 004_find_the_capitals.js
 * http://www.codewars.com/kata/find-the-capitals-1
 *
 */

/**
 * Write a function that takes a single (`word`) as argument. The function must
 * return an ordered list containing the indexes of all capital letters in the
 * string.
 *
 * Example
 * Test.assertSimilar(capitals('CodEWaRs'), [0, 3, 4, 6]);
 */

var capitals = function (word) {
    // Write your code here
    var upperCaseArray = [];
    var wordArray = String(word).split('');
    for(var i = 0; i < wordArray.length; i++) {
        if( i == i.toUpperCase) {
            upperCaseArray.push(i);
        }
    }
    return upperCaseArray;
};