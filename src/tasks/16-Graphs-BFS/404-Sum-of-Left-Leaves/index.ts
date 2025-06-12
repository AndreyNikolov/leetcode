function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;

  let leftLeavesSum = 0;
  const queue: [TreeNode, boolean][] = [[root, false]];

  while (queue.length) {
    const [node, isLeft] = queue.shift()!;

    if (isLeft && !node.left && !node.right) leftLeavesSum += node.val;

    if (node.left) queue.push([node.left, true]);
    if (node.right) queue.push([node.right, false]);
  }

  return leftLeavesSum;
}
