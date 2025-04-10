function preorderTraversalDFS(root: TreeNode | null): number[] {
  let result: number[] = [];
  function preorder(node: TreeNode | null, arr: number[]) {
    if (!node) return;
    arr.push(node.val);
    preorder(node.left, arr);
    preorder(node.right, arr);
  }

  preorder(root, result);
  return result;
}

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  let result = [];
  let current: TreeNode | null = root;
  let stack = [];
  while (current || stack.length) {
    if (current) {
      result.push(current.val);
      if (current.right) {
        stack.push(current.right);
      }
      current = current.left;
    } else {
      current = stack.pop()!;
    }
  }
  return result;
}
