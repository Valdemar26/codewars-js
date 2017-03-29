/**
 * 026_sum_of_positive.js
 * http://www.codewars.com/kata/sum-of-positive
 *
 */

/**
 * You get an array of numbers, return the sum of all of the positives ones.
 * Example [1,-4,7,12] => 1 + 7 + 12 = 20.
 * Note: array may be empty, in this case return 0.
 */

function positiveSum(arr) {
    var summ = 0;
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            summ += arr[i];
        } else {
            summ += 0;
        }
    }
    return summ;
}

/* clever solution */

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}
