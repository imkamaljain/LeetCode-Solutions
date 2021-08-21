/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
var getAllElements = function (root1, root2) {
    return mergeSort(traversal(root1), traversal(root2));
};

const traversal = (root, arr = []) => {
    if (!root) return [];
    traversal(root.left, arr);
    arr.push(root.val);
    traversal(root.right, arr);
    return arr;
};

const mergeSort = (arr1, arr2) => {
    let res = [];
    let i1 = 0, i2 = 0;
    while (i1 < arr1.length && i2 < arr2.length) {
        arr1[i1] < arr2[i2] ? res.push(arr1[i1++]) : res.push(arr2[i2++]);
    }
    while (i1 < arr1.length) res.push(arr1[i1++]);
    while (i2 < arr2.length) res.push(arr2[i2++]);
    return res;
};