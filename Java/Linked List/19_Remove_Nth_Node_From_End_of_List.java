/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode front = head, back = head;
        while (front != null) {
            front = front.next;
            if (n-- < 0) {
                back = back.next;
            }
        }
        if (n == 0) {
            head = head.next;
        } else {
            back.next = back.next.next;
        }
        return head;
    }
}