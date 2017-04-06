/**
 * 023_candy_problem.js
 * https://www.codewars.com/kata/candy-problem/
 *
 */

/**
 * "It's the end of trick-or-treating and we have a list/array representing how much candy
 * each child in our group has made out with. We don't want the kids to start arguing,
 * and using our parental intuition we know trouble is brewing as many of the children
 * in the group have received different amounts of candy from each home.
 *
 * So we want each child to have the same amount of candies, only we can't exactly take
 * any candy away from the kids, that would be even worse. Instead we decide to give each
 * child extra candy until they all have the same amount.
 *
 * Task
 * Your job is to find out how much candy each child has, and give them each additional candy
 * until they too have as much as the child(ren) with the most candy. You also want to keep
 * a total of how much candy you've handed out because reasons."
 *
 * Your job is to give all the kids the same amount of candies as the kid with the most candies
 * and then return the total number candies that have been given out. If there are no kids,
 * or only one, return -1.
 *
 * In the first case (look below) the most candies are given to second kid
 * (i.e second place in list/array), 8. Because of that we will give the first kid 3 so he can
 * have 8 and the third kid 2 and the fourth kid 4, so all kids will have 8 candies.
 * So we end up handing out 3 + 2 + 4 = 9.
 *
 * Examples:
 *          candies ([5,8,6,4]) // return 9
 *          candies ([1,2,4,6]) // return 11
 *          candies ([]) // return -1
 *          candies ([1,6]) // return 5
 *
 */

function candies(kids){
    // ...
    var count = 0;
    var max = Math.max.apply(null, kids);
    if(kids.length <= 1) {
        return -1;
    } else {
        for(var i = 0; i < kids.length; i++) {
            count += (max - kids[i]);
        }
    }
    return count;
}

/* clever solution */
function candies(kids){
    if (kids.length < 2) return -1;

    var max = Math.max.apply(null, kids);
    var extraCandies = kids.reduce(function (total, kid) {
        return total + max - kid;
    }, 0);
    return extraCandies;
}
