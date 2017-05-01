/**
 * 001_find_the_odd_int.js
 * https://www.codewars.com/kata/find-the-odd-int/
 *
 */

/**
 * Given an array, find the int that appears an odd number of times.
 *
 * There will always be only one integer that appears an odd number of times.
 *
 * For example:
 * [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]  =>  5
 * [1,1,2,-2,5,2,4,4,-1,-2,5]                 => -1
 * [1,1,1,1,1,1,10,1,1,1,1]                   => 10
 * [5,4,3,2,1,5,4,3,2,10,10]                  =>  1
 */

function findOdd(A) {
    //happy coding!
    var x = 0;
    for(var i = 0; i < A.length; i++) {
        x = x^A[i];
    }
    return x;
}

/* another solution */
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
        obj[el] ? obj[el]++ : obj[el] = 1;
    });

    for(prop in obj) {
        if(obj[prop] % 2 !== 0) return Number(prop);
    }
}
