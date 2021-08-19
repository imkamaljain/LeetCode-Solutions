/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    var n1 = head, n2 = head.next, n3 = head.next.next;
    n2.next = n1;
    n1.next = swapPairs(n3);
    return n2;
};