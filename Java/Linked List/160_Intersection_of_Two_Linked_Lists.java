/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode nodeA = headA, nodeB = headB;
        int lenA = 0, lenB = 0;
        while (nodeA != null) {
            nodeA = nodeA.next;
            lenA++;
        }
        while (nodeB != null) {
            nodeB = nodeB.next;
            lenB++;
        }
        nodeA = headA;
        nodeB = headB;
        if (lenA > lenB) {
            int n = lenA - lenB;
            while (n != 0) {
                nodeA = nodeA.next;
                n--;
            }
        } else {
            int n = lenB - lenA;
            while (n != 0) {
                nodeB = nodeB.next;
                n--;
            }
        }
        while (nodeA != null) {
            if (nodeA == nodeB)
                break;
            nodeA = nodeA.next;
            nodeB = nodeB.next;
        }
        if (nodeA != null)
            return nodeA;
        else
            return null;
    }
}