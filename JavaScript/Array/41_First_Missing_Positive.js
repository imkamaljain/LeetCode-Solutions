/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    nums.sort((a, b) => a - b);
    return nums.reduce((acc, val) => acc === val ? acc + 1 : acc, 1);
};