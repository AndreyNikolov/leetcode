function floodFill2(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const curr = image[sr][sc];
  const seen = new Set();

  function dfs(i: number, j: number): void {
    if (
      i < 0 ||
      j < 0 ||
      i >= image.length ||
      j >= image[0].length ||
      image[i][j] !== curr
    )
      return;

    if (seen.has(`${i}-${j}`)) return;
    seen.add(`${i}-${j}`);

    if (image[i][j] === curr) {
      image[i][j] = color;
    }

    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i, j + 1);
    dfs(i - 1, j);
  }
  dfs(sr, sc);

  return image;
}
