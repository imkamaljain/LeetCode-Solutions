/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let stack = [];
    s = s.split('');
    for (let i in s) {
        if (s[i] === '(') stack.push(i);
        else if (s[i] === ')') stack.length > 0 ? stack.pop() : s[i] = '';
    }
    for (const i of stack) {
        s[i] = '';
    }
    return s.join('');
};