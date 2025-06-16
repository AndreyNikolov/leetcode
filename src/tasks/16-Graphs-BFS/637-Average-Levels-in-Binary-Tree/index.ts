function averageOfLevels(root: TreeNode | null): number[] {
  const result = [];
  const queue = [root];
  while (queue.length) {
    const count = queue.length;

    let currSum = 0;
    for (let i = 0; i < count; i++) {
      const node = queue.shift()!;
      currSum += node.val;

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    result.push(currSum / count);
  }
  return result;
}
