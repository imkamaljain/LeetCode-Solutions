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
var reverseKGroup = function (head, k) {
    let curr = head, next = null, prev = null;
    let count = 0;
    while (count < k && curr !== null) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        count++;
    }
    let temp = next;
    count = 0;
    while (temp !== null) {
        temp = temp.next;
        count++;
    }
    head.next = (count < k || next === null) ? next : reverseKGroup(next, k);
    return prev;
};