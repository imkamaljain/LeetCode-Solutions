/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [], res = Array(T.length).fill(0);
    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[stack[stack.length - 1]] < T[i]) {
            let ind = stack.pop();
            res[ind] = i - ind;
        }
        stack.push(i);
    }
    return res;
};