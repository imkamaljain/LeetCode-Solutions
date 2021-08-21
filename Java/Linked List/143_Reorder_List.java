/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode reverse(ListNode temp) {
        if (temp == null || temp.next == null) return temp;
        ListNode curr = temp, prev = null, next = null;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    public void reorderList(ListNode head) {
        if (head != null && head.next != null) {
            ListNode slow = head, fast = head;
            while (fast != null && fast.next != null) {
                slow = slow.next;
                fast = fast.next.next;
            }
            ListNode first = head;
            ListNode second = reverse(slow.next);
            slow.next = null;
            while (second != null) {
                ListNode n1 = first.next;
                ListNode n2 = second.next;
                first.next = second;
                second.next = n1;
                first = n1;
                second = n2;
            }
            head = first;
        }
    }
}