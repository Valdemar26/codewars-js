/**
 * 053_string_repeat.js
 * http://www.codewars.com/kata/string-repeat/
 *
 */

/**
 * Write a function called repeatStr which repeats the given string string exactly n times.
 *
 * Examples:
 *          repeatStr(6, "I") // "IIIIII"
 *          repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
 *
 */

function repeatStr (n, s) {
    return String(Array(n+1).join(s));
}

/* best practices */
function repeatStr (n, s) {
    return s.repeat(n);
}