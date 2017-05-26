/**
 * 032_christmass_tree.js
 * http://www.codewars.com/kata/christmas-tree/
 *
 */

/**
 * Create a function christmasTree(height) that returns
 * a christmas tree of the correct height
 *
 * christmasTree(5) should return:
 *              solution(1, 2, 3) // returns false
 *              solution(1, 2, 3, 2) // returns true
 *              solution('1', '2', '3', '2') // returns true
 *
 *  The array values passed in will only be strings or numbers.
 *  The only valid return values are true and false.
 *
 */

 function christmasTree(height) {
   var tree = '';
   var spaces = Array(height).join(' ');

   for (var i = 0; i < height; i++) {
     var stars = Array((i * 2) + 2).join('*');
     if (tree !== '') tree += '\n';
     tree += spaces + stars + spaces;
     spaces = spaces.slice(0, -1);
   }

   return tree;
 }

 /* best solution */
 function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}
