/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
const splitListToParts = function(head, k) {
  let size = 0;
  let node = head;
  
  while (node) {
    size++;
    node = node.next;
  }
  
  node = head;
  let prev = null;
  
  const result = new Array(k).fill(null);
  const quotient = Math.floor(size / k);
  let remainder = size % k;
  
  for (let i = 0; i < k; i++) {
    result[i] = node;
    const count = quotient + ((remainder > 0) ? 1 : 0);

    for (let j = 0; j < count; j++) {
      prev = node;
      node = node.next;
    }
    
    if (prev) prev.next = null;
    remainder--;
  }

  return result;
};