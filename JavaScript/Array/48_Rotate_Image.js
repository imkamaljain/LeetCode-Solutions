/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    const x = Math.floor(matrix.length / 2);
    const y = matrix.length - 1;
    for (let i = 0; i < x; i++) {
        for (let j = i; j < y - i; j++) {
            let k = matrix[i][j];
            matrix[i][j] = matrix[y - j][i];
            matrix[y - j][i] = matrix[y - i][y - j];
            matrix[y - i][y - j] = matrix[j][y - i];
            matrix[j][y - i] = k;
        }
    }
};