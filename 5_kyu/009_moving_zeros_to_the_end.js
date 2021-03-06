/**
 * 009_moving_zeros_to_the_end.js
 * http://www.codewars.com/kata/moving-zeros-to-the-end
 *
 */

/**
 * Write an algorithm that takes an array and moves all of the zeros to the
 * end, preserving the order of the other elements.
 * moveZeros([false, 1 , 0 , 1 , 2 , 0 , 1 , 3, 'a']);
 * // [false, 1 , 1 , 2 , 1 , 3 , 'a', 0 , 0]
 */

 var moveZeros = function (arr) {
   var zeros = 0;
   var array = arr.filter(function(e) {
     if(e === 0) zeros++;
     return e !== 0;
   });

   for(var i = 0; i < zeros; i++) {
     array.push(0);
   }

/* clever solution */
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
