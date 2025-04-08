function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  //base case
  if (!p && !q) return true;
  if (p && q && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
  // if one of two is null or they are not equal
  return false;
}
