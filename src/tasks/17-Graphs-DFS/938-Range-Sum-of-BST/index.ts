function rangeSumBSTDFS(
  root: TreeNode | null,
  low: number,
  high: number
): number {
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    let nodeVal = 0;
    if (node.val >= low && node.val <= high) nodeVal = node.val;

    return nodeVal + dfs(node.left) + dfs(node.right);
  }

  return dfs(root);
}
