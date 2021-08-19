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
var mergeTwoLists = function (l1, l2) {
    if (!l1 && !l2) return null;
    if (!l1) return l2;
    if (!l2) return l1;
    let l = null;
    if (l1.val <= l2.val) {
        l = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        l = new ListNode(l2.val);
        l2 = l2.next;
    }
    let temp = l;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            temp.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            temp.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        temp = temp.next;
    }
    while (l1) {
        temp.next = new ListNode(l1.val);
        l1 = l1.next;
        temp = temp.next;
    }
    while (l2) {
        temp.next = new ListNode(l2.val);
        l2 = l2.next;
        temp = temp.next;
    }
    return l;
};