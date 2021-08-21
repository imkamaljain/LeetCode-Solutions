/**
 * @param {number} maxSize
 */
var CustomStack = function (maxSize) {
    this.maxSize = maxSize;
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function (x) {
    if (this.stack.length < this.maxSize) {
        this.stack.unshift(x);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function () {
    return this.stack.length > 0 ? this.stack.shift() : -1;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function (k, val) {
    if (k > this.stack.length)
        k = this.stack.length;
    for (let i = this.stack.length - 1; i >= this.stack.length - k; i--) {
        this.stack[i] += val;
    }
};

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */