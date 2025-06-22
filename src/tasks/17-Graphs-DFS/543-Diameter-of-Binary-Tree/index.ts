function diameterOfBinaryTreeDFS(root: TreeNode | null): number {
  let maxDiameter = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    if (!node.left && !node.right) return 1;

    const leftDepth = dfs(node.left);
    const rightDepth = dfs(node.right);
    maxDiameter = Math.max(leftDepth + rightDepth, maxDiameter);

    return 1 + Math.max(leftDepth, rightDepth);
  }
  dfs(root);
  return maxDiameter;
}
