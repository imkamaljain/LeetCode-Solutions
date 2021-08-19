/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    const helper = (n) => {
        if (n === nums.length - 1) {
            res.push([...nums]);
            return;
        }
        let set = new Set();
        for (let i = n; i < nums.length; i++) {
            if (!set.has(nums[i])) {
                [nums[n], nums[i]] = [nums[i], nums[n]];
                helper(n + 1);
                [nums[n], nums[i]] = [nums[i], nums[n]];
                set.add(nums[i]);
            }
        }
    };
    helper(0);
    return res;
};