/**
 * 014_chain_evaluation.js
 * https://www.codewars.com/kata/chain-evaluation/
 *
 */

/**
 * Method chaining is a very interesting way to keep your program clean.
 *
 * As a part of this Kata, you need to create functions such that one
 * could evaluate the following expression:
 *      (3).add(5).multiply(2)
 * The above expression evaluates to be 16.
 *
 * You need to implement the following methods:
 *      - add
 *      - subtract
 *      - multiply
 *      - divide
 *      - square
 *
 * After you're done, one could chain these five methods to create chains of almost any length.
 *
 */

// TODO: Write some code here
Number.prototype.add = function(int) {
    return this.valueOf() + int;
};
Number.prototype.subtract = function(int) {
    return this.valueOf() - int;
};
Number.prototype.multiply = function(int) {
    return this.valueOf() * int;
};
Number.prototype.divide = function(int) {
    return this.valueOf() / int;
};
Number.prototype.square = function() {
    return this.valueOf() * this.valueOf();
};


/* clever solution */
Number.prototype.add      = function(n){ return this+n };
Number.prototype.subtract = function(n){ return this-n };
Number.prototype.multiply = function(n){ return this*n };
Number.prototype.divide   = function(n){ return this/n };
Number.prototype.square   = function(){ return this*this };


/* another nice solution */
(function(proto) {
    proto.add      = function(n) { return this + n };
    proto.subtract = function(n) { return this - n };
    proto.multiply = function(n) { return this * n };
    proto.divide   = function(n) { return this / n };
    proto.square   = function()  { return this * this };
})(Number.prototype);
