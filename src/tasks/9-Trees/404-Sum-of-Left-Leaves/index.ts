function sumOfLeftLeaves(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, isLeft: boolean): number {
    if (!node) return 0;

    if (!node.left && !node.right) {
      return isLeft ? node.val : 0;
    }

    return dfs(node.left, true) + dfs(node.right, false);
  }

  return dfs(root, false);
}
