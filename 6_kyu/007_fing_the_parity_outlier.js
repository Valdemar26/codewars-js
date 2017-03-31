/**
 * 007_find_the_parity_outlies.js
 * https://www.codewars.com/kata/find-the-parity-outlier/
 *
 */

 /**
  * You are given an array (which will have a length of at least 3, but could be
  *  very large) containing integers. The array is either entirely comprised
  * of odd integers or entirely comprised of even integers except for a single
  * integer N. Write a method that takes the array as an argument and returns N.
  *
  * For example:
  *  [2, 4, 0, 100, 4, 11, 2602, 36] => 11
  *  [160, 3, 1719, 19, 11, 13, -21] => 160
  */

  function findOutlier(integers){
    //your code here
    var evenArr = [];
    var oddArr = [];
    integers.map(function(z) {
      if(z % 2 === 0) {
        evenArr.push(z);
      } else {
        oddArr.push(z);
      }
    });
    return evenArr.length > oddArr.length ? Number(oddArr): Number(evenArr);
  }

/* clever solution ES6*/
function findOutlier(int){
  var even = int.filter(a => a % 2 === 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length==1 ? even[0] : odd[0];
}

/*the same at ES5*/
function findOutlier(int) {
  var even = int.filter(function(z) {
    return z % 2 === 0;
  });
  var odd = int.filter(function(z) {
    return z % 2 !== 0;
  });
  return even.length == 1 ? even[0] : odd[0];
}
