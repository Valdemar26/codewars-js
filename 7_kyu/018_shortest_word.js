/**
 * 018_shortest_word.js
 * https://www.codewars.com/kata/shortest-word/
 *
 */

/**
 *  Simple, given a string of words, return the length of the
 *  shortest word(s).
 *
 *  String will never be empty and you do not need to account
 *  for different data types.
 *
 * Example:
 *          "bitcoin take over the world maybe who knows perhaps" -->  3
 */

 function findShort(s){
   shortestArray = [];
   s.split(' ').map(function(x) {
     shortestArray.push(x.length);
   });
   return Math.min.apply(null, shortestArray);
 }

/* ES6 solution */
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}
