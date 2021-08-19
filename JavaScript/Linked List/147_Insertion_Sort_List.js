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
var insertionSortList = function (head) {
    let sorted = new ListNode(0);
    while (head) {
        const temp = head;
        head = head.next;
        let curr = sorted;
        while (curr) {
            if (!curr.next || temp.val <= curr.next.val) {
                [curr.next, temp.next] = [temp, curr.next];
                break;
            }
            curr = curr.next;
        }
    }
    return sorted.next;
};