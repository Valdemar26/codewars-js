/**
 * 034_find_max_and_min_values_of_a_list.js
 * https://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list
 *
 */

/**
 * Description:
 * Your task is to make two functions, max and min that take a(n) array/vector of integers list
 * as input and outputs, respectively, the largest and lowest number in that array/vector.
 *
 * Examples
 *        max([4,6,2,1,9,63,-134,566]) returns 566
 *        min([-52, 56, 30, 29, -54, 0, -110]) returns -110
 *        max([5]) returns 5
 *        min([42, 54, 65, 87, 0]) returns 0

 */

 var min = function(list){
   return Math.min.apply(this, list);
};

var max = function(list){
    return Math.max.apply(this, list);
};

/* ES6 clever solution */
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
