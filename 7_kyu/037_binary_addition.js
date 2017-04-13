/**
 * 037_binary_addition.js
 * https://www.codewars.com/kata/binary-addition/train/javascript
 *
 */

/**
 * Implement a function that adds two numbers together and returns their
 * sum in binary. The conversion can be done before, or after the addition.
 *
 *  The binary number returned should be a string.
 *
 */

 function addBinary(a,b) {
	var sum = a + b;
	return parseInt(sum).toString(2);
}

/* best practices */
function addBinary(a,b){
  return (a+b).toString(2);
}
