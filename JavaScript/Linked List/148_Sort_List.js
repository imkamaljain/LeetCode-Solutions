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
var sortList = function (head) {
    if (!head || !head.next) return head;
    let fast = head, slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let middle = slow.next;
    slow.next = null;
    return merge(sortList(head), sortList(middle));
};

const merge = (left, right) => {
    if (!left) return right;
    if (!right) return left;
    let d = null;
    if (left.val < right.val) {
        d = left;
        d.next = merge(left.next, right);
    } else {
        d = right;
        d.next = merge(left, right.next);
    }
    return d;
}