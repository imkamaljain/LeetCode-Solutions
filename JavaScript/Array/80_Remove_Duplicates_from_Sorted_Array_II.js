/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, j = 0;
    for (; i < nums.length; i++) {
        if (nums[i] !== nums[i + 2]) {
            nums[j] = nums[i];
            j++;
        }
    }
    return j;
};