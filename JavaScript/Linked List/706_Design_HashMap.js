/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
    this.indexes = [];
    this.values = [];
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
    if (this.indexes[key] === undefined) {
        this.values.push(value);
        this.indexes[key] = this.values.length - 1;
    } else {
        this.values[this.indexes[key]] = value;
    }
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
    return this.indexes[key] === undefined ? -1 : this.values[this.indexes[key]];
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
    if (this.indexes[key] !== undefined) {
        this.values[this.indexes[key]] = undefined;
        this.indexes[key] = undefined;
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */