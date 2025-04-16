function findTarget(root: TreeNode | null, k: number): boolean {
  /*
    let neededSet = new Set();
    let result = false;
    function dfs(node){
        if (!node) return 

        dfs(node.left);
        let current = node.val;
        if (neededSet.has(current)) {
            result = true;
        }
        let needed = k - current;
        neededSet.add(needed);

        dfs(node.right);

    }
    dfs(root)

    return result;
    */
  let neededSet = new Set();
  function dfs(node: TreeNode | null): boolean {
    if (!node) return false;

    let current = node.val;
    if (neededSet.has(current)) {
      return true;
    }
    let needed = k - current;
    neededSet.add(needed);

    return dfs(node.left) || dfs(node.right);
  }
  return dfs(root);
}
