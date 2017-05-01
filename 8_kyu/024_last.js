/**
 * 024_last.js
 * http://www.codewars.com/kata/last
 *
 */

/**
 * The the last element of a list.
 */

function last(list) {
    if (typeof list === 'string' && arguments.length === 1)
        return list[list.length - 1];
    else if (Array.isArray(list))
        return list[list.length - 1];
    else
        return arguments[arguments.length - 1];
}

/* best practise */
function last(list){
    var last = arguments[arguments.length - 1];
    return last[last.length - 1] || last;
}
