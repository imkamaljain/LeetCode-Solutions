/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let ans = 0, prev = 0, curr = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        curr = Math.max(curr, i + nums[i]);
        if (i === prev) {
            prev = curr;
            ans++;
        }
    }
    return ans;
};