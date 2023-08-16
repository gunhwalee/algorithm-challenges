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

const buildTree = (preorder: number[], inorder: number[]): TreeNode | null => {
  if (!preorder.length || !inorder.length) return null;

  const node: TreeNode = new TreeNode(preorder[0]);
  const mid: number = inorder.indexOf(preorder[0]);

  node.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  node.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return node;
};