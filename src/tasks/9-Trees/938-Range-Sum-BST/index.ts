function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  let result = 0;

  /* Slow solution for BT, missed the S
    function dfs(node) {
        if (!node) return;

        dfs(node.left);
        if (node.val <= high && node.val >= low) {
            result += node.val
        }
        dfs(node.right)
    }

    dfs(root);
    */
  const queue = [root];
  while (queue.length) {
    const current = queue.shift();
    if (!current) continue;

    if (current.val >= low && current.val <= high) {
      result += current.val;
    }
    if (current.val < high) queue.push(current.right);
    if (current.val > low) queue.push(current.left);
  }
  return result;
}
