function isSubtree(root: TreeNode | null, subRoot: TreeNode): boolean {
  const possible: TreeNode[] = [];
  function dfs(node: TreeNode | null) {
    if (!node) return;
    if (node.val === subRoot.val) {
      possible.push(node);
    }
    dfs(node.left);
    dfs(node.right);
  }
  dfs(root);

  function areTreeEquals(
    root1: TreeNode | null,
    root2: TreeNode | null
  ): boolean {
    if (!root1 && !root2) return true;

    if (root1 && root2 && root1.val === root2.val) {
      return (
        areTreeEquals(root1.left, root2.left) &&
        areTreeEquals(root1.right, root2.right)
      );
    }

    return false;
  }

  for (let i = 0; i < possible.length; i++) {
    if (areTreeEquals(possible[i], subRoot)) return true;
  }

  return false;
}
