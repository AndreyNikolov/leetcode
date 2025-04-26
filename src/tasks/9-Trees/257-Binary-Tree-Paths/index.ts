function binaryTreePaths(root: TreeNode | null): string[] {
  const paths: string[] = [];

  function dfs(node: TreeNode | null, currentPath: string) {
    if (!node) return;

    currentPath =
      currentPath === "" ? node.val.toString() : `${currentPath}->${node.val}`;

    if (!node.left && !node.right) {
      paths.push(currentPath);
    }

    dfs(node.left, currentPath);
    dfs(node.right, currentPath);
  }
  dfs(root, "");

  return paths;
}
