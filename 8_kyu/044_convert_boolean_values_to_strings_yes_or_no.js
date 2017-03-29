/**
 * 044_convert_boolean_values_to_strings_yes_or_no.js
 * https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no/
 *
 */

/**
 * Complete the bool_to_word (Javascript: boolToWord ) method.
 * Given: a boolean valueReturn: a 'Yes' string for true and a 'No' string for false
 *
 */

function boolToWord( bool ){
    //...
    return bool == true ? 'Yes' : 'No';
}

/* clever solution */
function boolToWord( bool ){
    return bool ? 'Yes':'No';
}
