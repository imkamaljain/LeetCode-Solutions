/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let pos = intervals.length;
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] > newInterval[0]) {
            pos = i;
            break;
        }
    }
    intervals.splice(pos, 0, newInterval);
    return intervals.reduce((acc, [c, d], i) => {
        let prev = acc.pop();
        if (!prev) return [...acc, [c, d]];
        const [a, b] = prev;
        if (b < c) return [...acc, prev, [c, d]];
        return [...acc, [a, Math.max(b, d)]];
    }, []);
};