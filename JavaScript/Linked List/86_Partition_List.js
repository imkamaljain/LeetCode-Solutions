/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    const less = new ListNode(), more = new ListNode();
    let curr = head, currLess = less, currMore = more;
    while (curr) {
        if (curr.val < x) currLess = currLess.next = curr;
        else currMore = currMore.next = curr;
        curr = curr.next;
    }
    currLess.next = more.next;
    currMore.next = null;
    return less.next;
};