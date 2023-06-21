/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  if (root === null) return true;

  return getHeight(root) == Infinity ? false : true;
};

function getHeight(node) {
  if (node === null) return 0;

  let left = getHeight(node.left) + 1;
  let right = getHeight(node.right) + 1;
  if (Math.abs(left - right) > 1) return Infinity;
  
  return Math.max(left, right);
}
