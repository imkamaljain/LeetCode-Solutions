/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var mostCompetitive = function (nums, k) {
    let res = [];
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        while (res.length && nums[i] < res[res.length - 1]) {
            if (k - res.length < n - i) res.pop();
            else break;
        }
        if (res.length < k) res.push(nums[i]);
    }
    return res;
};