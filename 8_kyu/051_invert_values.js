/**
 * 051_invert_values.js
 * https://www.codewars.com/kata/invert-values/
 *
 */

/**
 * Given a set of numbers, return the additive inverse of each. Each positive
 * becomes negatives, and the negatives become positives.
 *
 * Python/JS/PHP/Java:
 *                      invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 *                      invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
 *                      invert([]) == []
 *
 */

function invert(array) {
    return array.map(function(z) {
        if(z===0) {return 0;}
        else {
            return z <0 ? -z: -z;
        }
    });
}

/* best practices */
function invert(array) {
    return array.map(x => x === 0 ? 0 : -x);
}