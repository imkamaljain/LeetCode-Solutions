/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const paths = path.split('/');
    const res = [];
    for (let i = 0; i < paths.length; i++) {
        if (paths[i] === '..') res.pop();
        else if (paths[i] === '' || paths[i] === '.') continue;
        else res.push(paths[i]);
    }
    return '/' + res.join('/');
};