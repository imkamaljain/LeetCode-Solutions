/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
    let low = 0, high = nums.length - 1;
    while (low < high) {
        let mid = low + parseInt((high - low) / 2);
        if (nums[mid] === nums[high]) high--;
        else if (nums[mid] < nums[high]) {
            if (target > nums[mid] && target <= nums[high]) low = mid + 1;
            else high = mid;
        } else {
            if (target > nums[mid] || target < nums[low]) low = mid + 1;
            else high = mid;
        }
    }
    return nums[low] === target;
};