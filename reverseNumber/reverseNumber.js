/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let numsArr = String(x).split('');
    if (x < 0) {
        numsArr.shift();
        numsArr.reverse()
        numsArr.unshift('-')
    } else {
        numsArr.reverse();
    }
    return parseInt(numsArr.reduce((a, b) => a + b))
};