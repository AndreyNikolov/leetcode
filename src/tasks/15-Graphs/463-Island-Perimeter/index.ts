function islandPerimeter2(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  const seen = new Set();

  function dfs(rowI: number, colI: number): number {
    // base case
    if (
      rowI < 0 ||
      colI < 0 ||
      rowI >= rows ||
      colI >= cols ||
      grid[rowI][colI] === 0
    ) {
      //out of bounds
      return 1;
    }

    if (seen.has(`${rowI}-${colI}`)) {
      return 0;
    }
    seen.add(`${rowI}-${colI}`);

    let top = dfs(rowI - 1, colI);
    let right = dfs(rowI, colI + 1);
    let bottom = dfs(rowI + 1, colI);
    let left = dfs(rowI, colI - 1);

    return top + right + bottom + left;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }

  return 0;
}
