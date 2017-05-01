/**
 * 008_vowel_count.js
 * https://www.codewars.com/kata/vowel-count/
 *
 */

/**
 * Return the number (count) of vowels in the given string.
 * We will consider 'a', 'e', 'i', 'o', and 'u' as vowels for this Kata.
 *
 * for example:
 *          getCount("abracadabra") => 5
 *
 */

 function getCount(str) {
   var vowelsCount = 0;

   // enter your majic here
   str.split('').map(function(x) {
     if(x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u') {
       vowelsCount++;
     }
   });

   return vowelsCount;
 }

/* clever solution */
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
