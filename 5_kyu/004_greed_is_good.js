/**
 * 004_greed_is_good.js
 * https://www.codewars.com/kata/greed-is-good/train/javascript
 *
 */

/**
 * Greed is a dice game played with five six-sided dice.
 * Your mission, should you choose to accept it, is to score a throw
 * according to these rules. You will always be given an array with
 * five six-sided dice values.
 *
 * Three 1's => 1000 points
 * Three 6's =>  600 points
 * Three 5's =>  500 points
 * Three 4's =>  400 points
 * Three 3's =>  300 points
 * Three 2's =>  200 points
 * One   1   =>  100 points
 * One   5   =>   50 point
 *
 * A single die can only be counted once in each roll.
 * For example, a "5" can only count as part of a triplet
 * (contributing to the 500 points) or as a single 50 points,
 * but not both in the same roll.
 *
 * Example scoring
 *                Throw       Score
 *                5 1 3 4 1   50 + 2 * 100 = 250
 *                1 1 1 3 1   1000 + 100 = 1100
 *                2 4 4 5 4   400 + 50 = 450
 *
 */



 function score( dice ) {
   // Fill me in!
   var points = 0;
   var count1 = 0;
   var count6 = 0;
   var count5 = 0;
   var count4 = 0;
   var count3 = 0;
   var count2 = 0;

   for(var i = 0; i < dice.length; i++) {
     if(dice[i] == 1) {count1 += 1;}
     else if(dice[i] == 6) {count6 += 1;}
     else if(dice[i] == 5) {count5 += 1;}
     else if(dice[i] == 4) {count4 += 1;}
     else if(dice[i] == 3) {count3 += 1;}
     else if(dice[i] == 2) {count2 += 1;}
   }

   if(count1 == 3 && count1 != 1) {points += 1000;}
   else if(count1 == 1 && count1 != 3) {points += 100;}
   else if(count5 == 1 && count5 != 3) {points += 50;}
   else if(count5 == 3 && count5 != 1) {points += 500;}
   else if(count6 == 3) {points += 600;}
   else if(count4 == 3) {points += 400;}
   else if(count3 == 3) {points += 300;}
   else if(count2 == 3) {points += 200;}

   return points;
 }
