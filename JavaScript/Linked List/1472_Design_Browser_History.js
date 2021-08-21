/**
 * @param {string} homepage
 */
var BrowserHistory = function (homepage) {
    this.webpages = [homepage];
    this.count = 1;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
    if (this.count !== this.webpages.length) {
        this.webpages = this.webpages.slice(0, this.count);
    }
    this.count++;
    this.webpages.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
    this.count = (this.count - steps - 1 < 0) ? 1 : this.count - steps;
    return this.webpages[this.count - 1];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
    this.count = (this.count + steps > this.webpages.length) ? this.webpages.length : this.count + steps;
    return this.webpages[this.count - 1];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */