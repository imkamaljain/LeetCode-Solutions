/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
    let curr = head;
    let next = head.next;
    let answer = [];
    while (curr !== null && next !== null) {
        if (next.val > curr.val) {
            answer.push(next.val);
            curr = curr.next;
            next = curr.next;
        } else {
            if (next.next !== null) {
                next = next.next;
            } else {
                answer.push(0);
                curr = curr.next;
                next = curr.next;
            }
        }
    }
    answer.push(0);
    return answer;
};