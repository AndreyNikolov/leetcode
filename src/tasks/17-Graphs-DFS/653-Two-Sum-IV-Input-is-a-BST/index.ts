function findTargetDFS(root: TreeNode | null, k: number): boolean {
  /*
  const seen = new Set();
  function helper(node: TreeNode | null): boolean {
    if (!node) return false;
    if (seen.has(k - node.val)) return true;
    seen.add(node.val);
    return helper(node.left) || helper(node.right);
  }

  return helper(root);
  */
  const needed = new Set();

  const stack = [root];

  while (stack.length) {
    const curr = stack.pop()!;
    if (needed.has(curr.val)) return true;

    needed.add(k - curr.val);
    if (curr.left) stack.push(curr.left);
    if (curr.right) stack.push(curr.right);
  }

  return false;
}
