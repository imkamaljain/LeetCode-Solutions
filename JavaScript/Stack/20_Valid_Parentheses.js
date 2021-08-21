/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    if (s.length % 2 !== 0) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].includes(s.charAt(i))) {
            stack.push(s.charAt(i));
        } else {
            if (stack.length === 0) return false;
            if (!validType(stack.pop(), s.charAt(i))) return false;
        }
    }
    return stack.length === 0 ? true : false;
};

const validType = (a, b) => {
    if (a === '(' && b === ')') return true;
    if (a === '{' && b === '}') return true;
    if (a === '[' && b === ']') return true;
    return false;
}