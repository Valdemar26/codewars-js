/**
 * 007_ready_for_prime_time.js
 * https://www.codewars.com/kata/ready-for-prime-time/
 *
 */

/**
 * We need prime numbers and we need them now!
 *
 * Write a method that takes a maximum bound and returns all primes
 * starting with 0 up-to and including the maximum bound.
 *
 * For example:
 *              prime(11); =>  [2,3,5,7,11]
 *
 *
 */

function prime(num) {
  // Generate an array containing every prime number between 0 and the num specified (inclusive)
	var primeNum = [];
  for(var i = 2; i <= num; i++) {
  	if( prime2(i) ) {
    	primeNum.push(i);
    }
  }
  return primeNum;
}

function prime2(num) {
	for(var i = 2; i < num; i++) {
  	if(num % i === 0) {
    	return false;
    }
  }
  return true;
}

/* clever solution */
function prime(num) {
  var primes = [];
  loop: for (var i = 2; i <= num; i++) {
    for (var j = 0; j <= primes.length; j++)
      if (i % primes[j] === 0) continue loop;
    primes.push(i);
  }
  return primes;
}
