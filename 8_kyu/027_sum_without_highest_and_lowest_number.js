/**
 * 027_sum_without_highest_and_lowest_number.js
 * https://www.codewars.com/kata/sum-without-highest-and-lowest-number
 *
 */

/**
 * Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
 * (The highest/lowest element is respectively only one element at each edge, even if there are more
 * than one with the same value!)
 *
 * Example:
 * { 6, 2, 1, 8, 10 } => 16
 * { 1, 1, 11, 2, 3 } => 6
 */

function sumArray(array) {
    var summ = 0;
    for(var i = 0; i < array.length; i++) {
        var max = function( array ){
            return Math.max.apply( Math, array );
        };
        var min = function(array) {
            return Math.min.apply(Math, array);
        };
        summ += array[i];
    }
    return summ - max - min;
}
