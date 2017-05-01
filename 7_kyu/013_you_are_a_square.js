/**
 * 013_you_are_a_square.js
 * https://www.codewars.com/kata/youre-a-square/
 *
 */

/**
 * A square of squares
 *
 *
 * Given an integral number, determine if it's a square number:
 *
 * In mathematics, a square number or perfect square is an integer
 * that is the square of an integer; in other words, it is the product
 * of some integer with itself.
 *
 * The tests will always use some integral number,
 * so don't worry about that in dynamic typed languages.
 *
 * Examples:
 *          isSquare(-1) // => false
 *          isSquare( 3) // => false
 *          isSquare( 4) // => true
 *          isSquare(25) // => true
 *          isSquare(26) // => false
 */

 var isSquare = function(n){
   return Math.sqrt(n) % 1 === 0 ? true: false;
 };

 /* clever solution */
 function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}
