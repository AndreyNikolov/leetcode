/* Naive Counting
function islandPerimeter(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < cols; column++) {
      let cell = grid[row][column];
      if (cell === 1) {
        // check left or right
        if (!grid[row][column - 1]) {
          perimeter++;
        }
        //check top
        if (!grid[row - 1] || !grid[row - 1][column]) {
          perimeter++;
        }
        // check right
        if (!grid[row][column + 1]) {
          perimeter++;
        }
        //check bot
        if (!grid[row + 1] || !grid[row + 1][column]) {
          perimeter++;
        }
      }
    }
  }
  return perimeter;
}
*/

// DFS

function islandPerimeter(grid: number[][]): number {
  const visit = new Set();

  function dfs(i: number, j: number): number {
    if (
      i >= grid.length ||
      j >= grid[0].length ||
      i < 0 ||
      j < 0 ||
      grid[i][j] === 0
    ) {
      return 1;
    }

    if (visit.has(`${i}:${j}`)) {
      return 0;
    }

    visit.add(`${i}:${j}`);

    let perim = dfs(i, j + 1); // bottom
    perim += dfs(i + 1, j); // right
    perim += dfs(i, j - 1); // top
    perim += dfs(i - 1, j); // left

    return perim;
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return dfs(i, j);
      }
    }
  }

  return 0;
}
