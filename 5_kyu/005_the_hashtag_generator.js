/**
 * 005_the_hashtag_generator.js
 * https://www.codewars.com/kata/the-hashtag-generator/
 *
 */

/**
 * The marketing team are spending way too much time typing in hashtags.
 * Let's help them with out own Hashtag Generator!
 *
 * Here's the deal:
 *    If the final result is longer than 140 chars it must return false.
 *    If the input is a empty string it must return false.
 *    It must start with a hashtag (#).
 *    All words must have their first letter capitalized.
 *
 * Example Input to Output:
 *  " Hello there thanks for trying my Kata" => "#HelloThereThanksForTryingMyKata"
 *  " Hello World " => "#HelloWorld"
 */

 function generateHashtag (str) {
    return (str.length <= 140 && str.length !== 0) ?'#' + str.trim().split(' ').map(function(item) {
      return ( item.charAt(0).toUpperCase() + item.slice(1) );
    }).join('') : false;
 }

/* another solution */
 function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
