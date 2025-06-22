function leafSimilarDFS(
  root1: TreeNode | null,
  root2: TreeNode | null
): boolean {
  function dfs(node: TreeNode | null, leafs: number[]) {
    if (!node) return;

    if (!node.left && !node.right) {
      leafs.push(node.val);
    }

    dfs(node.left, leafs);
    dfs(node.right, leafs);
  }

  const leaf1: number[] = [];
  const leaf2: number[] = [];

  dfs(root1, leaf1);
  dfs(root2, leaf2);

  if (leaf1.length !== leaf2.length) return false;

  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i] !== leaf2[i]) return false;
  }

  return true;
}
