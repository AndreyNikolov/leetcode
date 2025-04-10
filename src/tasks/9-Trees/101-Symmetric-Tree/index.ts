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
  if (!root) return false;
  let left = root.left;
  let right = root.right;
  let queue = [[left, right]];
  while (queue.length > 0) {
    let [left, right] = queue.shift()!;
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;

    queue.push([left.right, right.left], [left.left, right.right]);
  }

  return true;
}
