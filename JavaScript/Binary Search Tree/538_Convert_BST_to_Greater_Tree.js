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
var convertBST = function (root) {
    let sum = 0;
    const reversePostOrder = (node) => {
        if (node) {
            reversePostOrder(node.right);
            node.val += sum;
            sum = node.val;
            reversePostOrder(node.left);
        }
    };
    reversePostOrder(root);
    return root;
};