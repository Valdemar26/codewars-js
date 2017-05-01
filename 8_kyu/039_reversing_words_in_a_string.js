/**
 * 039_reversing_words_in_a_string.js
 * https://www.codewars.com/kata/reversing-words-in-a-string/
 *
 */

/**
 * Description:
 * You need to write a function that reverses the words in a given string.
 * A word can also fit an empty string. If this is not clear enough,
 * here are some examples:
 *
 * Examples:
 *          reverse('Hello World') === 'World Hello'
 *          reverse('Hi There.') === 'There. Hi'
 */

 function reverse(string){
   //your code here
   return string.split(' ').reverse().join(' ');
   /* split() розбиває строку по розділителю (' '), тобто по пробілу. .join() з"єднує  */
 }
