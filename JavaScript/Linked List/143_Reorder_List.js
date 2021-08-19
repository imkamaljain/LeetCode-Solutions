/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head === null || head.next === null) return;
    let mid = middle(head);
    let first = head;
    let second = reverse(mid.next);
    mid.next = null;
    while (second !== null) {
        let n1 = first.next;
        let n2 = second.next;
        first.next = second;
        second.next = n1;
        first = n1;
        second = n2;
    }
    head = first;
};

const middle = (node) => {
    let slow = node, fast = node;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

const reverse = (node) => {
    if (node === null || node.next === null) return node;
    let curr = node, prev = null, next = null;
    while (curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}