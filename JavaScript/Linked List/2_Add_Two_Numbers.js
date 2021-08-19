/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let sumList = null, prev = null, curr = null;
    let sum = 0, carry = 0;
    while (l1 !== null || l2 !== null) {
        sum = carry + (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0);
        carry = (sum >= 10) ? 1 : 0;
        sum = sum % 10;
        curr = new ListNode(sum);
        if (sumList === null) sumList = curr;
        else prev.next = curr;
        prev = curr;
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) curr.next = new ListNode(carry);
    return sumList;
};