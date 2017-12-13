/**
 * 004_nesting_structure_comparison.js
 * https://www.codewars.com/kata/nesting-structure-comparison/
 *
 */

/**
 * Complete the function/method (depending on the language) to return true/True
 * when its argument is an array that has the same nesting structure as the first array.
 *
 * // should return true
 * [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
 *
 * // should return false
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
 * [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
 *
 * // should return true
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
 *
 * // should return false
 * [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );
 *
 */

Array.prototype.sameStructureAs = function (other) {

    if (this.length !== other.length) {
        return false;
    }
    for (var i = 0; i < this.length; i++) {
        if (isArray(this[i]) && isArray(other[i])) {
            if (!this[i].sameStructureAs(other[i])) { return false; }
        } else if (!isArray(this[i]) && isArray(other[i])) {
            return false;
        } else if (isArray(this[i]) && !isArray(other[i])) {
            return false;
        }
    }
    return true

};

/* best practise */
Array.prototype.sameStructureAs = function (other) {
    return (this.length === other.length) ? this.every(function(el, i){
            return Array.isArray(el) ? el.sameStructureAs(other[i]) : true;
        }) : false;
};