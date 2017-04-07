/**
 * 027_silly_case.js
 * https://www.codewars.com/kata/sillycase/
 *
 */

/**
 * Create a function that takes a string and returns that string with the
 * first half lowercased and the last half uppercased.
 *
 * eg: foobar == fooBAR
 *
 * If it is an odd number then 'round' it up to find which letters to uppercase.
 * See example below.
 *
 * Examples:
 *          sillycase("brian")
 *                     --^-- midpoint
 *                     bri    first half (lower-cased)
 *                        AN  second half (upper-cased)
 */

function sillycase(silly) {
    silly = silly.split('');
    for(var i = 0; i < silly.length; i++) {
        (i < silly.length / 2) ? silly[i] = silly[i].toLowerCase(): silly[i] = silly[i].toUpperCase();
    }
    return silly.join('');
}

/* best practices */
function sillycase(silly) {
    var c = Math.round(silly.length / 2);
    return silly.substr(0, c).toLowerCase() + silly.substr(c).toUpperCase();
}

/* another solution */
function sillycase(silly) {
    var mid = Math.ceil(silly.length / 2);
    return silly.slice(0, mid).toLowerCase() + silly.slice(mid).toUpperCase();
}
