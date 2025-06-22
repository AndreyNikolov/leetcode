function sumOfLeftLeavesDFS1(root: TreeNode | null): number {
  function dfs(node: TreeNode | null, isLeft: boolean): number {
    if (!node) return 0;

    if (!node.left && !node.right) {
      return isLeft ? node.val : 0;
    }

    return dfs(node.left, true) + dfs(node.right, false);
  }

  return dfs(root, false);
}

function sumOfLeftLeavesDFS2(root: TreeNode | null): number {
  let sum = 0;

  function dfs(node: TreeNode | null, isLeft: boolean): void {
    if (!node) return;

    if (!node.left && !node.right && isLeft) sum += node.val;

    dfs(node.left, true);
    dfs(node.right, false);
  }

  dfs(root, false);
  return sum;
}
