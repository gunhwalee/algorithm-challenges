/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
  
  while (head && head.next) {
    if (head.val === "X") return true;
    head.val = "X";
    head = head.next;
  }
  
  return false;
};