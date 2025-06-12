function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  //BFS
  if (!p && !q) return true;
  const queue = [[p, q]];

  while (queue.length) {
    const [left, right] = queue.shift()!;

    if (!left || !right) {
      if (left !== right) return false;
      continue;
    }

    if (left.val !== right.val) return false;

    queue.push([left.left, right.left]);
    queue.push([left.right, right.right]);
  }

  return true;
}
