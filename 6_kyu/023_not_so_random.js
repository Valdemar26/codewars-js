/**
 * 023_not_so_rando.js
 * https://www.codewars.com/kata/simple-fun-number-158-not-so-random/
 *
 */

/**
 * You are a magician. You're going to perform a trick.
 *
 * You have b black marbles and w white marbles in your magic hat,
 * and an infinite supply of black and white marbles that you can
 * pull out of nowhere.
 *
 * You ask your audience to repeatedly remove a pair of marbles
 * from your hat and, for each pair removed, you add one marble
 * to the hat according to the following rule until there
 * is only 1 marble left.
 *
 */

 function notSoRandom(b, w) {
   //coding and coding..
   return Math.round(Math.random()) ? 'Black' : 'White';

 }
