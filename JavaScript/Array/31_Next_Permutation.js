/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let pivot = -1;
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i - 1] < nums[i]) {
            pivot = i - 1;
            break;
        }
    }
    if (pivot === -1) {
        nums.reverse();
        return;
    }
    for (let i = nums.length - 1; i > pivot; i--) {
        if (nums[pivot] < nums[i]) {
            [nums[pivot], nums[i]] = [nums[i], nums[pivot]];
            break;
        }
    }
    let low = pivot + 1, high = nums.length - 1;
    while (low < high) {
        [nums[low], nums[high]] = [nums[high], nums[low]];
        low++;
        high--;
    }
};