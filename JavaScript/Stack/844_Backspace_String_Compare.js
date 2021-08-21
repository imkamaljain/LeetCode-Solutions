/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
    backspaceRemove = (str => {
        let stack = [];
        for (let char of str) {
            char === '#' ? stack.pop() : stack.push(char);
        }
        return stack.join('');
    });
    return backspaceRemove(S) === backspaceRemove(T);
};