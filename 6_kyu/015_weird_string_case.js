/**
 * 015_weird_string_case.js
 * https://www.codewars.com/kata/weird-string-case/
 *
 */

/**
 * Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns
 * the same string with all even indexed characters in each word upper cased,
 * and all odd indexed characters in each word lower cased. The indexing just explained
 * is zero based, so the zero-ith index is even, therefore that character should be upper cased.
 *
 * The passed in string will only consist of alphabetical characters and spaces(' ').
 * Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
 *
 * Examples:
 *          toWeirdCase( "String" );//=> returns "StRiNg"
 *          toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

function toWeirdCase(string) {
    string = string.toLowerCase(); // all words to lower case
    var array = string.split(' '); // get array of words
    var newArray = [];
    for(var i = 0; i < array.length; i++) {
        var word = array[i]; // we get a word
        for(var j = 0; j < word.length; j++) {
            if(j % 2 === 0) {
                var letter = word.charAt(j).toUpperCase(); // all even letters to upper case
            } else {
                letter = word.charAt(j);
            }
            newArray.push(letter);
        }
            if(i < array.length - 1) {
            newArray.push(' '); // push whitespace between words
            }
    }
    return String(newArray.join(''));
}

/* best practices */
function toWeirdCase(string){
    return string.split(' ').map(function(word){
        return word.split('').map(function(letter, index){
            return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
    }).join(' ');
}

/* clever solution */
function toWeirdCase(string){
    return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}
