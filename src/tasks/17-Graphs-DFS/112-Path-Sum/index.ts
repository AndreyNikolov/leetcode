function hasPathSumDFS(root: TreeNode | null, targetSum: number): boolean {
  function dfs(node: TreeNode | null, sum: number): boolean {
    if (!node) return false;
    const newSum = sum - node.val;
    if (!node.left && !node.right && newSum === 0) return true;

    return dfs(node.left, newSum) || dfs(node.right, newSum);
  }

  return dfs(root, targetSum);
}
