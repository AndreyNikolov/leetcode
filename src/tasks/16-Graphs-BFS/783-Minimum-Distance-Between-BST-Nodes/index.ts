function minDiffInBSTBFS(root: TreeNode): number {
  const traversal = [root.val];
  const queue: TreeNode[] = [];
  if (root.left) {
    queue.push(root.left);
  }

  if (root.right) {
    queue.push(root.right);
  }

  while (queue.length) {
    const curr = queue.shift()!;
    traversal.push(curr.val);
    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }
  }
  traversal.sort((a, b) => a - b);
  let minimumDiff = Infinity;
  for (let i = 0; i < traversal.length - 1; i++) {
    minimumDiff = Math.min(
      Math.abs(traversal[i] - traversal[i + 1]),
      minimumDiff
    );
  }
  return minimumDiff;
}
