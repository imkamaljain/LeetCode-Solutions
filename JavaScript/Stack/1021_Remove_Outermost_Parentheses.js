/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
    let res = "";
    for (let count = 0, i = 0; i < S.length; i++) {
        if (S[i - 1] === "(" && S[i] === "(") {
            count++;
        } else if (S[i - 1] === ")" && S[i] === ")") {
            count--;
        }
        if (count > 0) {
            res += S[i];
        }
    }
    return res;
};