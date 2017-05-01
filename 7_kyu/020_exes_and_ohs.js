/**
 * 020_exes_and_ohs.js
 * https://www.codewars.com/kata/exes-and-ohs/
 *
 */

/**
 * Check to see if a string has the same amount of 'x's and 'o's.
 * The method must return a boolean and be case insensitive.
 * The string can contains any char.
 *
 * Example:
 *          XO("ooxx") => true
 *          XO("xooxx") => false
 *          XO("ooxXm") => true
 *          XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 *          XO("zzoo") => false
 */

 function XO(str){
     var matchedX = 0;
     var matchedO = 0;
     str.toLowerCase().split('').map(function(z) {
       if(z == 'x') {
         matchedX++;
       } else if(z == 'o') {
         matchedO++;
       } else {
       	 return false;
       }
     });
     return matchedX == matchedO ? true : false;
 }

 /* clever solution */
 function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
