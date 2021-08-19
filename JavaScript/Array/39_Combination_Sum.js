/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let res = [];
    const getCombinations = (n, arr, start) => {
        if (n < 0) return;
        if (n === 0) {
            res.push([...arr]);
            return;
        }
        for (let i = start; i < candidates.length; i++) {
            getCombinations(n - candidates[i], [...arr, candidates[i]], i);
        }
    };
    getCombinations(target, [], 0);
    return res;
};