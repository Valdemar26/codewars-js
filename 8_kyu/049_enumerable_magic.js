/**
 * 020_numerical_palindrome_number_2.js
 * https://www.codewars.com/kata/enumerable-magic-number-1-true-for-all/
 *
 */

/**
 * Create a method all which takes an array and a predicate (function pointer),
 * and returns true if the predicate returns true for every element in the array.
 * Otherwise, it should return false. If the array is empty, it should return true,
 * since technically nothing failed the test.
 *
 */

 function all( arr, fun ){
   // ...
   return  arr.every(fun);
 }
