/**
 * 039_friend_or_foe.js
 * https://www.codewars.com/kata/friend-or-foe/
 *
 */

/**
 * Make a program that filters a list of strings and returns a list with only
 * your friends name in it.
 *
 * If a name has 4 letters in it, you can be sure that it has to be
 * a friend of yours!
 *
 * Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 *
 */

 function friend(friends){
  //your code here
  var arr = [];
  friends.map(function(z) {
  	if(z.length === 4) {
    	arr.push(z);
    } else {return false;}
  });
  return arr;
}

/* best practices */
function friend(friends){
  return friends.filter(n => n.length === 4);
}
