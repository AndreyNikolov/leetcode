function minDepthDFS(root: TreeNode | null): number {
  if (!root) return 0;

  if (root.left === null) {
    // return 1 + depth of traversal to right
    return 1 + minDepth(root.right);
  }
  // check if there is no right node:
  if (root.right === null) {
    // return 1 + septh of traversal to left
    return 1 + minDepth(root.left);
  }
  return 1 + Math.min(minDepth(root.left), minDepth(root.right));
}

function minDepth(root: TreeNode | null): number {
  // BFS => Breadth First Search
  if (!root) return 0;

  const queue: TreeNode[] = [root];
  let height = 0;
  while (queue.length) {
    const n = queue.length;
    height++;
    for (let i: number = 0; i < n; i++) {
      const node: TreeNode = queue.shift()!;
      if (!node.left && !node.right) return height;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return 0;
}
