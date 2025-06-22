function averageOfLevelsDFS(root: TreeNode | null): number[] {
  const levelData: [number, number][] = [];

  function dfs(node: TreeNode | null, level: number): void {
    if (!node) return;

    if (!levelData[level]) {
      // [sum, count]
      levelData[level] = [0, 0];
    }

    levelData[level][0] += node.val;
    levelData[level][1] += 1;

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  return levelData.map(([sum, count]) => sum / count);
}
