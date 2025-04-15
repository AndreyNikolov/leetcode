function diameterOfBinaryTree(root: TreeNode | null): number {
  let result = 0;
  function dfs(node: TreeNode | null): number {
    if (!node) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    result = Math.max(result, left + right);

    return 1 + Math.max(left, right);
  }

  dfs(root);
  return result;
}
