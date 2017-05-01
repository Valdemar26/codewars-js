/**
 * 018_unlucky_number.js.js
 * https://www.codewars.com/kata/simple-fun-number-174-unlucky-number/
 *
 */

/**
 * Task
 * The number is considered to be unlucky if it does not have digits 4 and 7
 * and is divisible by 13. Please count all unlucky numbers not greater than n.

 *
 * Example:
 * For n = 20, the result should be 2 (numbers 0 and 13).
 * For n = 100, the result should be 7 (numbers 0, 13, 26, 39, 52, 65, and 91).
 *
 * Input/Output
 * [input] integer n
 *
 * 1 ≤ n ≤ 10^8(10^6 in Python)
 * [output] an integer
 *
 */

/* Process was terminated. It took longer than 12000ms to complete */
function unluckyNumber(n) {
    //coding and coding..
    var count = 0;
    for(var i = 0; i <= n; i++) {
        if(i % 13 !== 0 || /4/.test(i) || /7/.test(i) ) {
            count += 0;
        } else {
            count += 1;
        }
    }
    return count;
}