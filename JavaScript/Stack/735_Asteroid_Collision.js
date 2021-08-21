/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let stack = [];
    let i = 0;
    while (i < asteroids.length) {
        if (asteroids[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
            stack.push(asteroids[i++]);
        } else if (asteroids[i] + stack[stack.length - 1] < 0) {
            stack.pop();
        } else if (asteroids[i] + stack[stack.length - 1] === 0) {
            stack.pop();
            i++;
        } else {
            i++;
        }
    }
    return stack;
};