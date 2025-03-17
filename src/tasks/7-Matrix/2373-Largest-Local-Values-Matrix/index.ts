function largestLocal(grid: number[][]): number[][] {
  // n*n
  const n = grid.length;
  const result = new Array(n - 2)
    .fill(null)
    .map(() => new Array(n - 2).fill(null));

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[0].length; j++) {
      result[i][j] = findMaxLocal(i + 1, j + 1);
    }
  }

  function findMaxLocal(centerI: number, centerJ: number) {
    let highest = 0;

    for (let i = centerI - 1; i <= centerI + 1; i++) {
      for (let j = centerJ - 1; j <= centerJ + 1; j++) {
        if (grid[i][j] > highest) {
          highest = grid[i][j];
        }
      }
    }
    return highest;
  }

  return result;
}
