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
var deleteDuplicates = function (head) {
    let newHead = new ListNode();
    let curr = newHead, duplicate = 0;
    while (head !== null) {
        if (head.next && head.val === head.next.val) {
            duplicate++;
        } else {
            if (duplicate === 0) {
                curr.next = head;
                curr = curr.next;
            }
            duplicate = 0;
        }
        head = head.next;
    }
    curr.next = null;
    return newHead.next;
};