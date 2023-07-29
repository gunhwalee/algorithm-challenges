/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify head in-place instead.
 */
const reorderList = (head: ListNode | null): void => {
  const stack: ListNode[] = [];
  let node: ListNode = head;

  while (node) {
    stack.push(node);
    node = node.next;
  }

  node = head;
  let length: number = stack.length;

  for (let i = 0; i < length; i += 1) {
    if (i % 2) {
      node.next = stack.pop();
    } else {
      node.next = stack.shift();
    }
    
    node = node.next;
  }
  
  node.next = null;
};