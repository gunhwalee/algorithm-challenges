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

const diameterOfBinaryTree = (root: TreeNode | null): number => {
  let max: number = 0;

  const helper = (node: TreeNode | null): number => {
    if (node === null) return 0;

    const left = helper(node.left);
    const right = helper(node.right);

    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }

  helper(root);
  return max;
};