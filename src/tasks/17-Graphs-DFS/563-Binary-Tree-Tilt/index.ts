function findTiltDFS(root: TreeNode | null): number {
  let tiltSum = 0;

  function dfs(node: TreeNode | null): number {
    if (!node) return 0;
    if (!node.left && !node.right) return node.val;

    const leftTilt = dfs(node.left);
    const rightTilt = dfs(node.right);

    tiltSum += Math.abs(leftTilt - rightTilt);

    return node.val + leftTilt + rightTilt;
  }
  dfs(root);

  return tiltSum;
}
