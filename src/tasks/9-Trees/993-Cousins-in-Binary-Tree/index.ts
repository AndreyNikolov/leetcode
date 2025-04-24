function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  let resultHash: Record<number, { depth: number; parent: number | null }> = {};
  function dfs(node: TreeNode | null, depth: number, parentVal: null | number) {
    if (!node) return;

    depth++;

    if (node.val === x || node.val === y) {
      resultHash[node.val] = { depth, parent: parentVal };
    }

    dfs(node.left, depth, node.val);
    dfs(node.right, depth, node.val);
  }
  dfs(root, 0, null);
  return (
    resultHash[x].depth === resultHash[y].depth &&
    resultHash[x].parent != resultHash[y].parent
  );
}
