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
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const result = [];
  let depth = 0;
  
  getValue(root, depth, result);
  
  return(result);
};

function getValue(node, depth, result) {
  if (node === null) return;
  if (result[depth] === undefined) result.push([]);
  result[depth].push(node.val);
  getValue(node.left, depth += 1, result);
  getValue(node.right, depth, result);
}