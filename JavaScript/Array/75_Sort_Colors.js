/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let i = 0, l = 0, g = nums.length - 1;
    while (i <= g) {
        if (nums[i] === 0)
            swap(nums, i++, l++);
        else if (nums[i] === 2)
            swap(nums, i, g--);
        else
            i++;
    }

};

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}