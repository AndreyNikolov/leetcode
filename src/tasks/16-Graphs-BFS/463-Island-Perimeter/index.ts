function islandPerimeterBFS(grid: number[][]): number {
  let perimeter = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;

        for (let [di, dj] of directions) {
          let newI = i + di;
          let newJ = j + dj;

          if (
            newI >= 0 &&
            newI < grid.length &&
            newJ >= 0 &&
            newJ < grid[0].length &&
            grid[newI][newJ] === 1
          ) {
            perimeter--;
          }
        }
      }
    }
  }

  return perimeter;
}
