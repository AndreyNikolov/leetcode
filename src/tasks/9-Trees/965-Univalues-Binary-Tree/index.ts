function isUnivalTree(root: TreeNode | null): boolean {
  if (!root) return false;

  function dfs(node: TreeNode | null, value: number | null): boolean {
    if (!node) return true;

    return (
      node.val === value && dfs(node.left, value) && dfs(node.right, value)
    );
  }

  return dfs(root, root.val);
}
