function isBalancedDFS(root: TreeNode | null): boolean {
  if (!root) return true;

  function dfs(node: TreeNode | null): [boolean, number] {
    if (!node) return [true, 0];

    const [leftBalanced, leftHeight] = dfs(node.left);
    const [rightBalanced, rightHeight] = dfs(node.right);

    const height = Math.max(leftHeight, rightHeight) + 1;
    const isBalanced =
      leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

    return [isBalanced, height];
  }

  return dfs(root)[0];
}
