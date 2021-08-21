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
 * @return {TreeNode}
 */
var increasingBST = function (root) {
    let newRoot = new TreeNode();
    let curr = newRoot;
    const inorder = (node) => {
        if (!node) return null;
        inorder(node.left);
        node.left = null;
        curr.right = node;
        curr = curr.right;
        inorder(node.right);
    };
    inorder(root);
    return newRoot.right;
};