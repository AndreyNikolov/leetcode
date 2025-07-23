function numIslands(grid: string[][]): number {
  const [rows, cols] = [grid.length, grid[0].length];
  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const visited = new Set();

  const dfs = (i: number, j: number): void => {
    const stack = [[i, j]];
    visited.add(`${i},${j}`);

    while (stack.length > 0) {
      const [x, y] = stack.pop()!;
      for (const [dx, dy] of directions) {
        const [newX, newY] = [x + dx, y + dy];
        if (
          newX >= 0 &&
          newX < rows &&
          newY >= 0 &&
          newY < cols &&
          grid[newX][newY] === "1" &&
          !visited.has(`${newX},${newY}`)
        ) {
          visited.add(`${newX},${newY}`);
          stack.push([newX, newY]);
        }
      }
    }
  };

  let islandCount = 0;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
        dfs(i, j);
        islandCount++;
      }
    }
  }

  return islandCount;
  /*
    const rows = grid.length;
    const cols = grid[0].length;
    const visited = new Set();
    let islands = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && !visited.has(`${i}:${j}`)) {
                dfs(i, j);
                islands++;
            }
        }
    }

    function dfs(r, c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols) return;
        if (grid[r][c] === '0' || visited.has(`${r}:${c}`)) return;

        visited.add(`${r}:${c}`);

        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    }

    return islands;
    */
}
