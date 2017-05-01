/**
 * 002_are_you_playing_banjo.js
 * http://www.codewars.com/kata/are-you-playing-banjo
 *
 */

/**
 * Create a function which answers the question "Are you playing Banjo?".
 * If your name starts with the letter "R" or lower case "r", you are playing
 * Banjo!
 *
 * The function takes a name as its only argument, and returns one of the
 * following strings:
 *
 * `C# name + "plays banjo" name + "does not play banjo"`
 *
 * Names given are always valid strings.
 */

function areYouPlayingBanjo(name) {
    // Implement me
    if(name.charAt(0).toLowerCase() === 'r') {
        return (name + ' plays banjo');
    } else {
        return (name + ' does not play banjo');
    }
    return name;
}

/* author solution */

function areYouPlayingBanjo(name) {
    // Implement me
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + ' banjo';
}
