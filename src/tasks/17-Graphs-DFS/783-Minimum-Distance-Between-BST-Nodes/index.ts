function minDiffInBSTDFS(root: TreeNode | null): number {
  let values: number[] = [];
  function dfs(node: TreeNode | null): void {
    if (!node) return;
    values.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  values.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 0; i < values.length - 1; i++) {
    minDiff = Math.min(values[i + 1] - values[i], minDiff);
  }

  return minDiff;
}
