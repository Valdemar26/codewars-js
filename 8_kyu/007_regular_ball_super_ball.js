/**
 * 007_regular_ball_super_ball.js
 * http://www.codewars.com/kata/regular-ball-super-ball
 *
 */

/**
 * Create a class Ball.
 *
 * Ball objects should accept one argument for "ball type" when instantiated.
 * If no arguments are given, ball objects should instantiate with a ball type
 * of "regular."
 */

var Ball = function(ballType) {
    // your code goes here
    this.ballType = ballType || 'regular';
};

/* Alternate */
var Ball = function(ballType) {
    !ballType ? this.ballType = 'regular' : this.ballType = ballType;
};
