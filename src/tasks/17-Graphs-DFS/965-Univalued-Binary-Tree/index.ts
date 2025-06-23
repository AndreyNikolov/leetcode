function isUnivalTreeDFS(root: TreeNode): boolean {
  function dfs(node: TreeNode | null, value: number): boolean {
    if (!node) return true;

    if (!node.left && !node.right) return node.val === value;

    return dfs(node.left, value) && dfs(node.right, value);
  }

  return dfs(root, root.val);
}
