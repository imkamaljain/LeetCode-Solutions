/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function (s, k) {
    let stack = [];
    s = s.split('');
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] !== s[i - 1]) {
            stack.push(1);
        } else {
            stack[stack.length - 1]++;
            if (stack[stack.length - 1] === k) {
                stack.pop();
                s.splice(i - k + 1, k);
                i -= k;
            }
        }
    }
    return s.join('');
};