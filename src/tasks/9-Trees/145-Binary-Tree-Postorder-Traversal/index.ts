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
