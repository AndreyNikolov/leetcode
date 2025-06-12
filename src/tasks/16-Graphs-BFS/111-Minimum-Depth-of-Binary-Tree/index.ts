function minDepthDFS(root: TreeNode | null): number {
  if (!root) return 0;
  let currDepth = 0;
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    currDepth++;
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift();
      if (node) {
        if (!node.left && !node.right) return currDepth;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }

  return currDepth;
}
