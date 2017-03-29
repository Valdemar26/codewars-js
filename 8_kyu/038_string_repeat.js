/**
 * 038_string_repeat.js
 * https://www.codewars.com/kata/string-repeat/
 *
 */

/**
 * Description:
 * Write a function called repeatStr which repeats the given string
 * exactly n times.
 *
 * Examples:
 *          repeatStr(6, "I") // "IIIIII"
 *          repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 */

 function repeatStr (n, s) {
   return Array(n+1).join(s);
 }

 /* clever solution */
 function repeatStr (n, s) {
  return s.repeat(n);
 }
