/**
 * 057_reversed_sequence.js
 * https://www.codewars.com/kata/reversed-sequence/
 *
 */

/**
 * Description:
 * Get the number n to return the reversed sequence from n to 1.
 * Example : n=5 >> [5,4,3,2,1]
 *
 */

const reverseSeq = (n) => {
    let arr = [];
    for(let i = n; i > 0; i--) {
        arr.push(i);
    }
    return arr;
};

/* best practise */
const reverseSeq = length => Array.from({length}, () => length--);

/*
* reverseSeq(5) =>  [5, 4, 3, 2, 1];
* */