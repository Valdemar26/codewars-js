http://www.codewars.com/kata/sum-of-odd-cubed-numbers/train/javascript

function cubeOdd(arr) {
    if(arr.includes(!Number)) {
        return false
    }
    let arrOdd = [];
    arr.map(function(x) {
        return x % 2 === 0 ? false : arrOdd.push(x*x*x) ;
    });
    let sum = arrOdd.reduce( (v, i) => (v + i) );
    return sum;
}
