/**
 * 032_count_positives_sum_negatives.js
 * https://www.codewars.com/kata/count-of-positives-slash-sum-of-negatives
 *
 */

/**
 *Given an array of integers.
 * Return an array, where the first element is the count of positives numbers and the second element
 * is sum of negative numbers.
 *
 * For example:
 *              input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
 *              return [10, -65].
 *
 * The passed array should NOT be changed.
 * Read more here https://en.wikipedia.org/wiki/Side_effect_(computer_science).
 */

function countPositivesSumNegatives(input) {
    if (input === null || input.length < 1) {
      return [];
    }
    var array = [0, 0];

    for(var i = 0; i < input.length; i++) {
      if(input[i] <= 0) {
        array[1] += input[i];
      } else {
        array[0] += 1;
      }
    }
    return array;
}

/* best practices */
function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0)
      return [];

    var positive = 0;
    var negative = 0;

    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }

    return [positive, negative];
}
