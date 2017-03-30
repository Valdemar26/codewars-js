/**
 * 016_two_to_one.js
 * https://www.codewars.com/kata/two-to-one/
 *
 */

/**
 * Take 2 strings s1 and s2 including only letters from ato z.
 * Return a new sorted string, the longest possible,
 * containing distinct letters, - each taken only once - coming from s1 or s2.
 *
 * Example:
 *          a = "xyaabbbccccdefww"
 *          b = "xxxxyyyyabklmopq"
 *          longest(a, b) -> "abcdefklmopqwxy"
 *
 *          a = "abcdefghijklmnopqrstuvwxyz"
 *          longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

function longest(s1, s2) {
  var joined = s1.concat(s2).split('').sort();

  newArray = [];
  var sortedLength = joined.length;

  for (var i = 0; i < sortedLength; i++) {
    if (!newArray.includes(joined[i])) {
      newArray.push(joined[i]);
    }
  }

  return newArray.join("");
}

/* clever solution */
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('');

/* another ES6 solution */
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}
