/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode prev = null, curr = head, next = null;
        if (head == null || head.next == null) return head;
        while (curr != null && curr.next != null) {
            next = curr.next;
            curr.next = next.next;
            next.next = curr;
            if (prev == null)
                head = next;
            else
                prev.next = next;
            prev = curr;
            curr = curr.next;
        }
        return head;
    }
}