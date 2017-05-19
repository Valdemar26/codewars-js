/**
 * 031_duplicate_arguments.js
 * http://www.codewars.com/kata/duplicate-arguments/
 *
 */

/**
 * Complete the solution so that it returns true if it contains
 * any duplicate argument values. Any number of arguments may be passed
 * into the function. The solution should implement the most optimal
 * algorithm possible.
 *
 * For example:
 *              solution(1, 2, 3) // returns false
 *              solution(1, 2, 3, 2) // returns true
 *              solution('1', '2', '3', '2') // returns true
 *
 *  The array values passed in will only be strings or numbers.
 *  The only valid return values are true and false.
 *
 */

function solution(){
    var arr = Array.prototype.slice.call(arguments, 0);
    var uniq = arr.sort().filter(function(item, pos, ary) {
        return !pos || item !== ary[pos-1];
    });

    return arr.length !== uniq.length;
}