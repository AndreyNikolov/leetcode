function inorderTraversalDFS(root: TreeNode | null): number[] {
  let result: number[] = [];

  function inorder(root: TreeNode | null) {
    if (!root) return;

    inorder(root.left);
    result.push(root.val);
    inorder(root.right);
  }
  inorder(root);
  return result;
}

function inorderTraversalDFSIter(root: TreeNode | null): number[] {
  let result = [];
  let stack: (TreeNode | null)[] = [];
  let current: TreeNode | null = root;

  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop()!;
    result.push(current.val);
    current = current.right;
  }

  return result;
}
