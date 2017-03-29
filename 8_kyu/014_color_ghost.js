/**
 * 014_color_ghost.js
 * http://www.codewars.com/kata/color-ghost
 *
 */

/**
 * Create a class Ghost
 *
 * Ghost objects are instantiated without any arguments.
 *
 * Ghost objects are given a random color attribute of white" or "yellow" or
 * "purple" or "red" when instantiated.
 *
 * ghost = new Ghost();
 * ghost.color // => "white" or "yellow" or "purple" or "red"
 */

function Ghost() {
    var ghostColor = Math.random();
    if (ghostColor < 0.25) {
        this.color = 'white';
    } else if (ghostColor < 0.5) {
        this.color = 'yellow';
    } else if (ghostColor < 0.75) {
        this.color = 'purple';
    } else {
        this.color = 'red';
    }
}

/* Shorter */
var Ghost = function() {
    this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};
