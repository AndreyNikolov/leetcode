function hasPathSumDFS(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const queue: [TreeNode, number][] = [[root, targetSum - root.val]];

  while (queue.length) {
    const [node, value] = queue.shift()!;

    if (!node.left && !node.right && value === 0) return true;

    if (node.left) queue.push([node.left, value - node.left.val]);

    if (node.right) queue.push([node.right, value - node.right.val]);
  }

  return false;
}
