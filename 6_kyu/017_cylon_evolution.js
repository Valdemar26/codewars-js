/**
 * 017_cylon_evolution.js
 * http://www.codewars.com/kata/cylon-evolution/
 *
 */

/**
 * There are all types of cylons. The trick is, some look like humans.
 * Using prototypical inheritance, create a prototype for Cylon.
 * Cylons should have a model, and should have an attack function,
 * which will return the string "Destory all humans!"
 *
 * Since some cylons appear human, then make a child object called HumanSkin.
 * This should have a model, as Cylons do, and should have the same attack.
 * However, it should also have a function called infiltrate, which will return
 * the string "Infiltrate the colonies".
 *
 */


 function Cylon(model){
   this.model = model;
 }

 Cylon.prototype.attack = function() {
   return "Destroy all humans!";
 };

 function HumanSkin(model){
   Cylon.call(this, model);
 }

 HumanSkin.prototype = Object.create(Cylon.prototype);
 HumanSkin.prototype.constructor = HumanSkin;

 HumanSkin.prototype.infiltrate = function() {
   return "Infiltrate the colonies";
 };

 /* best practices */
 var Cylon = function (model){
  this.model = model;
};

Cylon.prototype.attack = function() {
  return "Destroy all humans!";
};

var HumanSkin = function (model) {
  Cylon.apply(this, arguments);
};

HumanSkin.prototype = Object.create(Cylon.prototype);
HumanSkin.prototype.constructor = HumanSkin;
HumanSkin.prototype.infiltrate = function() {
  return "Infiltrate the colonies";
};
