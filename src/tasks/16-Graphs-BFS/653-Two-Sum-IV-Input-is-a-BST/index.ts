function findTargetLame(root: TreeNode | null, k: number): boolean {
  const seen = new Set();
  function helper(node: TreeNode | null): boolean {
    if (!node) return false;
    if (seen.has(k - node.val)) return true;
    seen.add(node.val);
    return helper(node.left) || helper(node.right);
  }

  return helper(root);
}
