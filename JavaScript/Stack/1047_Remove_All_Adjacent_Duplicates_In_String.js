/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
    let ans = [];
    S.split('').forEach(char => {
        ans[ans.length - 1] === char ? ans.pop() : ans.push(char);
    });
    return ans.join('');
};