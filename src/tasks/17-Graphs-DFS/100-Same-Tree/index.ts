function isSameTreeDFS(p: TreeNode | null, q: TreeNode | null): boolean {
  function dfs(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (!node1 && !node2) return true;

    if (!node1 || !node2 || node1.val !== node2.val) return false;

    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right);
  }

  return dfs(p, q);
}
