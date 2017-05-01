/**
 * 012_beginner_series_sum_of_numbers.js
 * https://www.codewars.com/kata/beginner-series-number-3-sum-of-numbers/
 *
 */

/**
 * Given two integers, which can be positive and negative,
 * find the sum of all the numbers between including them too and return it.
 * If both numbers are equal return a or b.
 *
 * Note! a and b are not ordered!
 *
 * Example:
 *          GetSum(1, 0) == 1   // 1 + 0 = 1
 *          GetSum(1, 2) == 3   // 1 + 2 = 3
 *          GetSum(0, 1) == 1   // 0 + 1 = 1
 *          GetSum(1, 1) == 1   // 1 Since both are same
 *          GetSum(-1, 0) == -1 // -1 + 0 = -1
 *          GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
 */

 function GetSum( a,b ) {
    //Good luck!
    var max = Math.max(a, b);
    var min = Math.min(a, b);
    return a == b ? a :  ((max-min)+1) * (max + min) / 2;
 }

/* another nice solution */
function GetSum(a,b) {
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
