function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const visited = new Set();
  const oldColor = image[sr][sc];

  function dfs(i: number, j: number): void {
    if (
      i < 0 ||
      j < 0 ||
      i >= image.length ||
      j >= image[0].length ||
      image[i][j] !== oldColor
    )
      return;
    if (image[i][j] === oldColor) {
      image[i][j] = color;
    }
    if (visited.has(`${i}:${j}`)) return;

    visited.add(`${i}:${j}`);

    dfs(i - 1, j); // top
    dfs(i, j - 1); //left
    dfs(i, j + 1); //right
    dfs(i + 1, j); //bottom
  }

  dfs(sr, sc);
  return image;
}
