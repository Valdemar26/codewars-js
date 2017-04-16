/**
 * 037_binary_addition.js
 * https://www.codewars.com/kata/two-fighters-one-winner/
 *
 */

/**
 * Create a function that returns the name of the winner
 * in a fight between two fighters.
 *
 *  Each fighter takes turns attacking the other and whoever kills
 * the other first is victorious. Death is defined as having health <= 0.
 *
 * Each fighter will be a Fighter object/instance.
 * See the Fighter class below in your chosen language.
 *
 * Both health and damagePerAttack (damage_per_attack for python)
 * will be integers larger than 0. You can mutate the Fighter objects.
 *
 * Example:
 *
 * declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew") => "Lew"
 */

 function declareWinner(f1,f2,first) {
  if(first == f1.name){
    while(f1.health > 0 && f2.health > 0){
      if(f2.health - f1.damagePerAttack <= 0) return f1.name;
      if(f1.health - f2.damagePerAttack <= 0) return f2.name;
      f2.health -= f1.damagePerAttack;
      f1.health -= f2.damagePerAttack;
    }
  }
  if(first == f2.name){
    while(f1.health > 0 && f2.health > 0){
      if(f1.health - f2.damagePerAttack <= 0) return f2.name;
      if(f2.health - f1.damagePerAttack <= 0) return f1.name;
      f1.health -= f2.damagePerAttack;
      f2.health -= f1.damagePerAttack;
    }
  }
}

/* best practices */
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}
