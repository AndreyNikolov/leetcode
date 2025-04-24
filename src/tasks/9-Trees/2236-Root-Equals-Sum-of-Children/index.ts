function checkTree(root: TreeNode | null): boolean {
  if (!root) return false;
  return root.val === (root.left?.val ?? 0) + (root.right?.val ?? 0);
}
