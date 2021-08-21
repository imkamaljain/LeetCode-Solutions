
var FreqStack = function () {
    this.freqStack = [];
    this.freqMap = {};
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function (x) {
    this.freqMap[x] = this.freqMap[x] + 1 || 1;
    const freq = this.freqMap[x];
    if (this.freqStack.length < freq) this.freqStack.push([x]);
    else this.freqStack[freq - 1].push(x);
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
    const last = this.freqStack[this.freqStack.length - 1];
    const res = last.pop();
    if (last.length === 0) this.freqStack.pop();
    this.freqMap[res] -= 1;
    return res;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */