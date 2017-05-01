/**
 * 040_fake_binary.js
 * https://www.codewars.com/kata/fake-binary/
 *
 */

/**
 * Description:
 * Given a string of digits, you should replace any digit below 5 with '0'
 * and any digit 5 and above with '1'. Return the resulting string.
 *
 * Examples:
 *          fakeBin('45385593107843568')  =>  '01011110001100111'
 *          fakeBin('509321967506747')    =>  '101000111101101');
 */

function fakeBin(x) {
    return x.split('').map(function(n) {
        return n < 5 ? 0 : 1
    }).join('');
}
