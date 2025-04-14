function postorderTraversal(root: TreeNode | null): number[] {
  let result: number[] = [];
  function postorder(node: TreeNode | null, arr: number[]) {
    if (!node) return;
    postorder(node.left, arr);
    postorder(node.right, arr);
    arr.push(node.val);
  }

  postorder(root, result);
  return result;
}

function postorderTraversalIter(root: TreeNode | null): number[] {
  const result: number[] = [];
  if (!root) return result;

  const stack: [TreeNode | null, boolean][] = [[root, false]];

  while (stack.length) {
    const [curr, v] = stack.pop()!;

    if (curr) {
      if (v) {
        result.push(curr.val);
      } else {
        stack.push([curr, true]);
        stack.push([curr.right, false]);
        stack.push([curr.left, false]);
      }
    }
  }
  return result;
}
