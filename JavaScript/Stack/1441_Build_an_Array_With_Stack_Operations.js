/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
    let i = 1;
    n = Math.max(...target);
    while (i <= n) {
        target.includes(i) ? (target.push("Push"), target.splice(0, 1)) : target.push("Push", "Pop");
        i++;
    }
    return target;
};