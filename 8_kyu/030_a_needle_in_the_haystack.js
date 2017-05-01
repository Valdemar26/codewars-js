/**
 * 030_a_needle_in_the_haystack.js
 * https://www.codewars.com/kata/a-needle-in-the-haystack
 *
 */

/**
 * Can you find the needle in the haystack?
 * 'Знайти голку в стозі сіна'
 *
 * Write a function findNeedle() that takes an array full of junk but containing one "needle".
 * After your function finds the needle it should return a message (as a string) that says:
 * "found the needle at position " plus the index it found the needle.
 * So findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
 * should return 'found the needle at position 5'
 */

function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
}
