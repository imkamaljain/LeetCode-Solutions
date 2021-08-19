/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const set = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const val = board[i][j];
            if (val !== '.') {
                const rowIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                if (set.has('r' + i + val) || set.has('c' + j + val) || set.has('b' + rowIndex + val)) {
                    return false;
                } else {
                    set.add('r' + i + val);
                    set.add('c' + j + val);
                    set.add('b' + rowIndex + val);
                }
            }
        }
    }
    return true;
};