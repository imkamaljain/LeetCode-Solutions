/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length) return false;
    let m = matrix.length, n = matrix[0].length;
    let left = 0, right = m * n - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let row = Math.floor(mid / n), col = Math.floor(mid % n);
        if (target === matrix[row][col]) return true;
        if (target < matrix[row][col]) right = mid - 1;
        else left = mid + 1;
    }
    return false;
};