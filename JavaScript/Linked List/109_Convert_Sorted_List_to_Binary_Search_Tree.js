/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
    if (!head) return null;
    let mid = head, fast = head;
    while (fast && fast.next) {
        mid = mid.next;
        fast = fast.next.next;
    }
    if (mid === head) return new TreeNode(head.val, null, null);
    let curr = head;
    while (curr.next !== mid) {
        curr = curr.next;
    }
    curr.next = null;
    let node = new TreeNode(mid.val);
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(mid.next);
    return node;
};