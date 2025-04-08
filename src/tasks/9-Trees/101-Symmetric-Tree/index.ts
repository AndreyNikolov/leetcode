function isSymmetricRec(root: TreeNode): boolean {
  let left = root.left;
  let right = root.right;

  function isSymHelper(sub1: TreeNode | null, sub2: TreeNode | null): boolean {
    if (!sub1 && !sub2) return true;

    if (sub1 && sub2 && sub1.val === sub2.val) {
      return (
        isSymHelper(sub1.right, sub2.left) && isSymHelper(sub1.left, sub2.right)
      );
    }

    return false;
  }

  return isSymHelper(left, right);
}

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  const stack: [TreeNode | null, TreeNode | null][] = [[root.left, root.right]];

  while (stack.length) {
    const [left, right] = stack.pop()!;
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;

    stack.push([left.left, right.right]);
    stack.push([left.right, right.left]);
  }

  return true;
}
