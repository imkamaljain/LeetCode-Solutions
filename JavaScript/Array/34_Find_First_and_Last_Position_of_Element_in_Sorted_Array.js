/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let indexes = [];
    nums.forEach((val, i) => val === target ? indexes.push(i) : null);
    return indexes.length < 1 ? [-1, -1] : [indexes[0], indexes[indexes.length - 1]];
};