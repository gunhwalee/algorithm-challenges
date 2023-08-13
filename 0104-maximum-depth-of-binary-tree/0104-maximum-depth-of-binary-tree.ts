/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;
  let maxDepth: number = 0;

  const helper = (node: TreeNode, depth: number): void => {
    if (!node) return;
    
    maxDepth = Math.max(maxDepth, depth);
    
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  };
  
  helper(root, 1);
  
  return maxDepth;
};