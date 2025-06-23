function isUnivalTreeDFS(root: TreeNode): boolean {
  const startingVal = root.val;
  function dfs(node: TreeNode | null): boolean {
    if (!node) return true;

    return node.val === startingVal && dfs(node.left) && dfs(node.right);
  }

  return dfs(root);
}
