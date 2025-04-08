function inorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = [];
  helper(root, res);
  return res;
}

function helper(root: TreeNode | null, res: number[]) {
  if (root !== null) {
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
  }
}

function inorderTraversalIterative(root: TreeNode | null): number[] {
  let res: number[] = [];
  let stack: (TreeNode | null)[] = [];
  let curr: TreeNode | null = root;
  while (curr !== null || stack.length !== 0) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop()!;
    res.push(curr.val);
    curr = curr.right;
  }
  return res;
}
