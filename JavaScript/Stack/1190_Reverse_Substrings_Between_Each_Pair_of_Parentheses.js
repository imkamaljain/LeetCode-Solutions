/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function (s) {
    let stack = [[]];
    for (let c of s) {
        if (c === '(') {
            stack.push([]);
        } else if (c === ')') {
            const str = stack.pop().reverse();
            stack[stack.length - 1].push(...str);
        } else {
            stack[stack.length - 1].push(c);
        }
    }
    return stack.pop().join('');
};