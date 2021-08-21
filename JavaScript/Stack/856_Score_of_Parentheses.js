/**
 * @param {string} S
 * @return {number}
 */
var scoreOfParentheses = function (S) {
    let stack = [];
    for (const char of S) {
        if (char === '(') {
            stack.push(-1);
        } else {
            if (stack[stack.length - 1] === -1) {
                stack.pop();
                stack.push(1);
            } else {
                let sum = 0;
                while (stack.length && stack[stack.length - 1] !== -1) {
                    sum += stack.pop();
                }
                stack.pop();
                stack.push(sum * 2);
            }
        }
    }
    return stack.reduce((acc, val) => acc + val, 0);
};