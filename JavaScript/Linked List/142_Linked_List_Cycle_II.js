/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head, fast = head;
    while (slow && fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) return getCycleNode(slow, head);
    }
    return null;
};

const getCycleNode = (slow, head) => {
    while (slow != head) {
        head = head.next;
        slow = slow.next;
    }
    return slow;
};