/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.stack = [];
    this.dfs = (root) => {
        if (!root) return;
        if (root.right) this.dfs(root.right);
        this.stack.push(root.val);
        if (root.left) this.dfs(root.left);
    };
    this.dfs(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.stack.pop();
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */