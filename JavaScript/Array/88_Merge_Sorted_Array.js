/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (m === 0) {
        nums1.length = 0;
        nums1.push(...nums2);
    }
    if (m !== 0 && n !== 0) {
        nums1.splice(m, n, ...nums2);
        nums1.sort((a, b) => a - b);
    }
};