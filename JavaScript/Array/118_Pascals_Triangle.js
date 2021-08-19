/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    var res = [];
    for (let i = 1; i <= numRows; i++) {
        res.push(Array(i).fill(1));
        for (let j = 1; j < i - 1; j++) {
            res[i - 1][j] = res[i - 2][j - 1] + res[i - 2][j];
        }
    }
    return res;
};