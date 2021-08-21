/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode rotateRight(ListNode head, int k) {
        if (head == null || k == 0)
            return head;
        ListNode temp = head;
        int l = 1;
        while (temp.next != null) {
            temp = temp.next;
            l++;
        }
        temp.next = head;
        int count = l - k % l;
        while (count > 0) {
            temp = temp.next;
            count--;
        }
        head = temp.next;
        temp.next = null;
        return head;
    }
}