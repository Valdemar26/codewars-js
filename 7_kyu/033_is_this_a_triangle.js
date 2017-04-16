/**
 * 033_is_this_a_triangle.js
 * https://www.codewars.com/kata/is-this-a-triangle/
 *
 */

/**
 * Implement a method that accepts 3 integer values a, b, c.
 * The method should return true if a triangle can be built with
 * the sides of given length and false in any other case.
 *
 * (In this case, all triangles must have surface greater
 * than 0 to be accepted).
 *
 */

 function isTriangle(a,b,c) {
    var numArr = [a, b, c];
 	  var num = numArr.sort(function(x,y) {return x - y;});
    return num[0] + num[1] > num[2] ? true : false;
 }

 /* best practices */
 function isTriangle(a,b,c) {
   return a + b > c && a + c > b && c + b > a;
}

/* clever solution */
function isTriangle(a,b,c) {
  [a, b, c] = [a, b, c].sort((x, y) => x-y);
  return a+b > c;
}
