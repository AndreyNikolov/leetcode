function islandPerimeterDFS(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }

  function dfs(rowI: number, colI: number): number {
    if (
      rowI < 0 ||
      colI < 0 ||
      rowI >= rows ||
      colI >= cols ||
      grid[rowI][colI] === 0
    )
      return 1;
    if (visited.has(`${rowI}:${colI}`)) return 0;

    visited.add(`${rowI}:${colI}`);

    return (
      dfs(rowI - 1, colI) +
      dfs(rowI, colI + 1) +
      dfs(rowI + 1, colI) +
      dfs(rowI, colI - 1)
    );
  }

  return 0;
}
