/**
 * 002_rot_13.js
 * https://www.codewars.com/kata/rot13-1/
 *
 */

/**
 * ROT13 is a simple letter substitution cipher that replaces a letter
 * with the letter 13 letters after it in the alphabet.
 * ROT13 is an example of the Caesar cipher.
 *
 * Create a function that takes a string and returns the string ciphered
 * with Rot13. If there are numbers or special characters included in the string,
 * they should be returned as they are. Only letters from the latin/english alphabet
 * should be shifted, like in the original Rot13 "implementation".
 *
 * Read more about Rot-13 at wiki: https://uk.wikipedia.org/wiki/ROT13
 *
 * Please note that using "encode" in Python is considered cheating.
 */

/* short solution */
function rot13(message){
  message.replace(/[a-zA-Z]/g,function(c){
    return String.fromCharCode((c<="Z" ? 90 : 122) >= (c=c.charCodeAt(0)+13) ? c : c-26);
  });
}

/* another solution */
function rot13(message){
  var res = [];
  for (var i = 0; i < message.length; i++) {
    if (message.charCodeAt(i) + 13 > 122) {
    	res.push(String.fromCharCode(96 + message.charCodeAt(i) - 122 + 13));
    }
    else {
    	res.push(String.fromCharCode(message.charCodeAt(i) + 13));
    }
  }
  return res.join('');
}


/* crazy solution :) */
 function rot13(message){
   //your code here
   return message.replace(/./g, function(z) {
     return rot13.pairs[z];
   });
 }

rot13.pairs = {
  A: 'N',
  B: 'O',
  C: 'P',
  D: 'Q',
  E: 'R',
  F: 'S',
  G: 'T',
  H: 'U',
  I: 'V',
  J: 'W',
  K: 'X',
  L: 'Y',
  M: 'Z',
  N: 'A',
  O: 'B',
  P: 'C',
  Q: 'D',
  R: 'E',
  S: 'F',
  T: 'G',
  U: 'H',
  V: 'I',
  W: 'J',
  X: 'K',
  Y: 'L',
  Z: 'M',
  a: 'n',
  b: 'o',
  c: 'p',
  d: 'q',
  e: 'r',
  f: 's',
  g: 't',
  h: 'u',
  i: 'v',
  j: 'w',
  k: 'x',
  l: 'y',
  m: 'z',
  n: 'a',
  o: 'b',
  p: 'c',
  q: 'd',
  r: 'e',
  s: 'f',
  t: 'g',
  u: 'h',
  v: 'i',
  w: 'j',
  x: 'k',
  y: 'l',
  z: 'm'
};
