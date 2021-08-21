/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        ListNode slow = head, fast = head, prevSlow = head, mid = null;
        while (fast != null && fast.next != null) {
            prevSlow = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        if (fast != null) {
            prevSlow = slow;
            slow = slow.next;
        }
        ListNode curr = slow, prev = null, next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        if (prevSlow != null && prevSlow.next != null) {
            prevSlow.next = prev;
            ListNode temp1 = head, temp2 = prevSlow.next;
            while (temp1 != null && temp2 != null) {
                if (temp1.val != temp2.val)
                    return false;
                temp1 = temp1.next;
                temp2 = temp2.next;
            }
        }
        return true;
    }
}