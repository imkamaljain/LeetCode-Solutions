/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) return '';
    return '' + root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    data = data.split(',');
    const helper = (data) => {
        const val = data.shift();
        if (!val) return null;
        let root = new TreeNode(val);
        root.left = helper(data);
        root.right = helper(data);
        return root;
    };
    return helper(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */