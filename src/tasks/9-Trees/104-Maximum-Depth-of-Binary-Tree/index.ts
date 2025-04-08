function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
function maxDepthRec(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(maxDepthRec(root.left), maxDepthRec(root.right));
}

function maxDepthBFS(root: TreeNode | null): number {
  if (!root) return 0;

  let depth = 0;
  let queue: TreeNode[] = [root];

  while (queue.length > 0) {
    let levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    depth++;
  }

  return depth;
}

function maxDepthDFS(root: TreeNode | null): number {
  let maxDepth = 0;
  let stack: [TreeNode | null, number][] = [[root, 1]];

  while (stack.length) {
    let [node, depth] = stack.pop()!;
    if (node) {
      maxDepth = Math.max(depth, maxDepth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return maxDepth;
}
