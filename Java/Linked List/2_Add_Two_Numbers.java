/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode sumList = null, prev = null, curr = null;
        int sum = 0, carry = 0;
        while (l1 != null || l2 != null) {
            sum = carry + (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0);
            carry = (sum >= 10) ? 1 : 0;
            sum = sum % 10;
            curr = new ListNode(sum);
            if (sumList == null)
                sumList = curr;
            else
                prev.next = curr;
            prev = curr;
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
        }
        if (carry > 0)
            curr.next = new ListNode(carry);
        return sumList;
    }
}