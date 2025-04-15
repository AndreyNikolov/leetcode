function averageOfLevels(root: TreeNode | null): number[] {
  const result: number[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let length = queue.length;
    let levelSum = 0;
    for (let i = 0; i < length; i++) {
      let current = queue.shift()!;
      levelSum += current.val;
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    result.push(levelSum / length);
  }

  return result;
}
