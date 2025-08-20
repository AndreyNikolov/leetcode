function maxIncreaseKeepingSkyline(grid: number[][]): number {
  const n = grid.length;

  const rowMax = new Array(n).fill(0);
  const colMax = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rowMax[i] = Math.max(rowMax[i], grid[i][j]);
      colMax[j] = Math.max(colMax[j], grid[i][j]);
    }
  }
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const max = Math.min(rowMax[i], colMax[j]);
      if (max > grid[i][j]) result += max - grid[i][j];
    }
  }
  return result;
}
