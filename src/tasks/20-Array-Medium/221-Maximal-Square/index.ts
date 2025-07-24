function maximalSquare(matrix: string[][]): number {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let cache: Record<string, number> = {};

  function dfs(i: number, j: number) {
    if (i >= rows || j >= cols) return 0;
    const key = `${i}:${j}`;

    if (cache[key] === undefined) {
      const right = dfs(i, j + 1);
      const bottom = dfs(i + 1, j);
      const diag = dfs(i + 1, j + 1);

      cache[key] = 0;
      if (matrix[i][j] === "1") {
        cache[key] = 1 + Math.min(right, bottom, diag);
      }
    }

    return cache[key];
  }

  dfs(0, 0);

  return Math.max(...Object.values(cache)) ** 2;
}
