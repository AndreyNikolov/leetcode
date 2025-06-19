function isCousinsBFS(root: TreeNode, x: number, y: number): boolean {
  const queue: [number, TreeNode, TreeNode | null][] = [[0, root, null]];

  let xFound = false;
  let yFound = false;

  let xParent = null;
  let yParent = null;

  let xDepth = 0;
  let yDepth = 0;

  while (queue.length) {
    const [level, node, parent] = queue.shift()!;

    if (!node) continue;

    if (node.val === x) {
      xFound = true;
      xParent = parent;
      xDepth = level;
    }

    if (node.val === y) {
      yFound = true;
      yParent = parent;
      yDepth = level;
    }

    if (node.left) queue.push([level + 1, node.left, node]);
    if (node.right) queue.push([level + 1, node.right, node]);

    if (xFound && yFound) break;
  }

  return xFound && yFound && xDepth === yDepth && xParent !== yParent;
}
