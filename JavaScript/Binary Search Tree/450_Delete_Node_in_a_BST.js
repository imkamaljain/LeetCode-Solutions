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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root === null) return root;
    if (root.val > key) root.left = deleteNode(root.left, key);
    else if (root.val < key) root.right = deleteNode(root.right, key);
    else {
        if (root.left === null && root.right === null) {
            root = null;
            return root;
        }
        if (root.left === null) return root.right;
        if (root.right === null) return root.left;
        let temp = root.right;
        while (temp.left !== null) {
            temp = temp.left;
        }
        root.val = temp.val;
        root.right = deleteNode(root.right, temp.val);
    }
    return root;
};