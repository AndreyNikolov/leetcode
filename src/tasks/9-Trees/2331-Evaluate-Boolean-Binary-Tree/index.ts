function evaluateTree(root: TreeNode | null): boolean {
  if (!root) return true;

  if (!root.left && !root.right) return Boolean(root.val);

  if (root.val === 2)
    return evaluateTree(root.left) || evaluateTree(root.right);

  return evaluateTree(root.left) && evaluateTree(root.right);
}
