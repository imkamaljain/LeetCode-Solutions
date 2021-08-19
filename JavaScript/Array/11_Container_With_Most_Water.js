/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let res = 0, left = 0, right = height.length - 1;
    while (left < right) {
        let smallestSide = Math.min(height[left], height[right]);
        let area = (right - left) * smallestSide;
        res = Math.max(res, area);
        if (height[left] < height[right]) left++;
        else right--;
    }
    return res;
};