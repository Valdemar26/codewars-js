/**
 * 025_multiplication_table.js
 * https://www.codewars.com/kata/multiplication-table/
 *
 */

/**
 * Your task, is to create NxN multiplication table, of size provided in parameter.
 *
 * for example, when given size is 3:
 *                                      1 2 3
 *                                      2 4 6
 *                                      3 6 9
 *
 * for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]
 */

function groupByCommas(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g , ',');
}