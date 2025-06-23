function sumRootToLeafDFS(root: TreeNode | null): number {
  let result = 0;

  function dfs(node: TreeNode | null, currSum: number): void {
    if (!node) return;

    currSum = currSum * 2 + node.val;
    if (!node.left && !node.right) {
      result += currSum;
    }

    dfs(node.left, currSum);
    dfs(node.right, currSum);
  }

  dfs(root, 0);
  return result;
}
