function isSymmetricDFS(root: TreeNode): boolean {
  function dfs(left: TreeNode | null, right: TreeNode | null): boolean {
    if (!left && !right) return true;

    if (!left || !right || left.val !== right.val) return false;

    return dfs(left.left, right.right) && dfs(left.right, right.left);
  }

  return dfs(root.left, root.right);
}

function isSymmetricDFSIter(root: TreeNode): boolean {
  const queue = [[root.left, root.right]];
  while (queue.length) {
    const [left, right] = queue.shift()!;
    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;

    queue.push([left.left, right.right]);
    queue.push([left.right, right.left]);
  }

  return true;
}
