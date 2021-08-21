/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode oddEvenList(ListNode head) {
        ListNode temp = head, oddHead = null, odd = null, evenHead = null, even = null;
        int i = 1;
        while (temp != null) {
            if (i % 2 != 0) {
                if (oddHead == null) {
                    oddHead = temp;
                    odd = temp;
                } else {
                    odd.next = temp;
                    odd = odd.next;
                }
            } else {
                if (evenHead == null) {
                    evenHead = temp;
                    even = temp;
                } else {
                    even.next = temp;
                    even = even.next;
                }
            }
            temp = temp.next;
            i++;
        }
        if (oddHead == null && evenHead == null) {
            return null;
        }
        if (odd != null)
            odd.next = evenHead;
        if (even != null)
            even.next = null;
        return oddHead;
    }
}