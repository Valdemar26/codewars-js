/**
 * 033_summation.js
 * https://www.codewars.com/kata/grasshopper-summation
 *
 */

 /**Summation
 * Write a program that finds the summation of every number between 1 and num.
 * The number will always be a positive integer greater than 0.
 *
 * For example:
 * summation(2) -> 3
 *                 1 + 2
 * summation(8) -> 36
 *                 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

 var summation = function (num) {
   // Code here
   var sum = 0;
   for(var i = 0; i <= num; i++) {
     sum += i;
   }
   return sum;
 };

/* clever solution */
const summation = n => n * (n + 1) / 2;
