/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    if (!heights.length) return 0;
    let stack = [], max = 0;
    for (let i = 0; i <= heights.length; i++) {
        let curr = (i === heights.length) ? -1 : heights[i];
        while (stack.length !== 0 && curr < heights[stack[stack.length - 1]]) {
            let h = heights[stack.pop()];
            let w = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            max = Math.max(max, h * w);
        }
        stack.push(i);
    }
    return max;
};