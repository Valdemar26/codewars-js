/**
 * 048_remove_string_spaces.js
 * https://www.codewars.com/kata/remove-string-spaces/
 *
 */

/**
 * Simple, remove the spaces from the string, then return the resultant string.
 *
 */

function noSpace(x){
    return x.replace(/\s/g, '').trim();
}

/* clever solution */
function noSpace(x){
    return x.replace(/\s/g, '');
}