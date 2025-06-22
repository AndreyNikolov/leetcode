function maxDepthDFS1(root: TreeNode | null): number {
  let maxDepth = 0;
  function dfs(node: TreeNode | null, depth: number) {
    if (!node) return;
    const newDepth = depth + 1;
    maxDepth = Math.max(maxDepth, newDepth);

    dfs(node.left, newDepth);
    dfs(node.right, newDepth);
  }
  dfs(root, 0);
  return maxDepth;
}

function maxDepthDFS2(root: TreeNode | null): number {
  if (!root) return 0;

  const leftDepth = maxDepthDFS2(root.left);
  const rightDepth = maxDepthDFS2(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}
