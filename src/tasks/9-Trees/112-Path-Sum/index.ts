function hasPathSumDFS(root: TreeNode | null, targetSum: number): boolean {
  function dfs(root: TreeNode | null, currentSum: number): boolean {
    // base case
    if (!root) {
      return false;
    }

    currentSum += root.val;
    if (!root.left && !root.right) return currentSum === targetSum;

    return dfs(root.left, currentSum) || dfs(root.right, currentSum);
  }

  return dfs(root, 0);
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  const queue: [TreeNode, number][] = [[root, 0]];

  while (queue.length) {
    let n = queue.length;

    for (let i = 0; i < n; i++) {
      let [node, sum] = queue.shift()!;
      sum += node.val;
      if (!node.left && !node.right && sum === targetSum) {
        return true;
      }
      if (node.left) {
        queue.push([node.left, sum]);
      }
      if (node.right) {
        queue.push([node.right, sum]);
      }
    }
  }

  return false;
}
