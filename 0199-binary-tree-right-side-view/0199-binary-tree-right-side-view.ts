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

const rightSideView = (root: TreeNode | null): number[] => {
  const result: number[] = [];
  const helper = (node: TreeNode, depth: number): void => {
    if (!node) return;
    
    result[depth] = node.val;
    
    helper(node.left, depth + 1);
    helper(node.right, depth + 1);
  };
  
  helper(root, 0);
  return result;
};