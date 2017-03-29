/**
 * 015_find_the_next_perfect_square.js
 * https://www.codewars.com/kata/find-the-next-perfect-square/
 *
 */

/**
 * Complete the findNextSquare method that finds the next integral
 * perfect square after the one passed as a parameter.
 * Recall that an integral perfect square is an integer n such that sqrt(n)
 * is also an integer.
 *
 * If the parameter is itself not a perfect square, than -1 should be returned.
 * You may assume the parameter is positive.
 *
 * Example:
 *          findNextSquare(121) --> returns 144
 *          findNextSquare(625) --> returns 676
 *          findNextSquare(114) --> returns -1 since 114 is not a perfect
 */

 function findNextSquare(sq) {
   // Return the next square if sq if a perfect square, -1 otherwise
   return Math.sqrt(sq) % 1 === 0 ? Math.pow((Math.sqrt(sq) + 1) ,2): -1;
 }

 /* clever solution */
 function findNextSquare(sq) {
  return Math.sqrt(sq)%1 ? -1 : Math.pow(Math.sqrt(sq)+1,2);
}
