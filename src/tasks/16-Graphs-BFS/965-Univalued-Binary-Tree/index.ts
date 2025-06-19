function isUnivalTreeBFS(root: TreeNode): boolean {
  const uniValue = root.val;
  const queue = [root];

  while (queue.length) {
    const node = queue.shift()!;
    if (node.val !== uniValue) return false;

    if (node.left) {
      queue.push(node.left);
    }
    if (node.right) {
      queue.push(node.right);
    }
  }

  return true;
}
