function minDepthDFS(root: TreeNode | null): number {
  if (!root) return 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    if (!node.left && !node.right) return 1;

    if (!node.left) return 1 + dfs(node.right);
    if (!node.right) return 1 + dfs(node.left);

    return Math.min(dfs(node.left), dfs(node.right)) + 1;
  }

  return dfs(root);
}
