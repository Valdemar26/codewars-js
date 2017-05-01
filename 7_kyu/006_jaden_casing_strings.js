/**
 * 006_jaden_casing_strings.js
 * https://www.codewars.com/kata/jaden-casing-strings/
 *
 */

/**
 * Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010)
 * and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter.
 * When writing on Twitter, he is known for almost always capitalizing every word.
 *
 * Your task is to convert strings to how they would be written by Jaden Smith.
 * The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way
 * he originally typed them.
 *
 *      Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
 *      Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
 *
 */

String.prototype.toJadenCase = function () {
    var returnString = [];
    var words = this.split(' ').map(function(x) {
        return returnString.push(x[0].toUpperCase() + x.slice(1).toLowerCase());
    });
    return returnString.join(' ');
};

/* clever solution */
String.prototype.toJadenCase = function () {
    return this.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
};
