/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null || k === 0) return head;
    let temp = head, len = 1;
    while (temp.next !== null) {
        temp = temp.next;
        len++;
    }
    temp.next = head;
    let count = len - k % len;
    while (count > 0) {
        temp = temp.next;
        count--;
    }
    head = temp.next;
    temp.next = null;
    return head;
};