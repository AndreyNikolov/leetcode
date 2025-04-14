function minDiffInBST(root: TreeNode | null): number {
  let values: number[] = [];
  function dfs(node: TreeNode | null) {
    if (!node) return;
    values.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);
  values.sort((a, b) => a - b);

  let minDiff = Infinity;
  for (let i = 0; i < values.length - 1; i++) {
    let j = i + 1;
    minDiff = Math.min(Math.abs(values[i] - values[j]), minDiff);
  }

  return minDiff;
}
