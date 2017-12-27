/**
 * 048_sum_the_random_string.js
 * https://www.codewars.com/kata/sum-up-the-random-string/
 *
 */

/**
 * Given a random string consisting of numbers, letters, symbols,
 * you need to sum up the numbers in the string.
 *
 * Note:
 *
 * Consecutive integers should be treated as a single number. eg, 2015 should be treated
 * as a single number 2015, NOT four numbers.
 * All the numbers should be treaded as positive integer. eg, 11-14 should be treated
 * as two numbers 11 and 14. Same as 3.14, should be treated as two numbers 3 and 14.
 * If no number was given in the string, it should return 0
 * Example:
 *
 * str = "In 2015, I want to know how much does iPhone 6+ cost?"
 * The numbers are 2015, 6
 *
 * Sum is 2021.
 *
 *
 */

/* my solution, but doesn't work */
function sumFromString(str){
    return str.split('')
        .filter( data => typeof data === 'object')
        .reduce( (accum, item) => { return accum + item});
}

/* best solution */
function sumFromString(str) {
    return (str.match(/\d+/g) || []).map(Number).reduce((a, b) => a + b, 0)
}