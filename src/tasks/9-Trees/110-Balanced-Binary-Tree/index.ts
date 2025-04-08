function isBalanced(root: TreeNode | null): boolean {
  function dfs(root: TreeNode | null): [boolean, number] {
    if (!root) return [true, 0];

    const [leftBalanced, leftHeight] = dfs(root.left);
    const [rightBalanced, rightHeight] = dfs(root.right);

    const balanced =
      leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1;

    const height = 1 + Math.max(leftHeight, rightHeight);

    return [balanced, height];
  }

  return dfs(root)[0];
}
