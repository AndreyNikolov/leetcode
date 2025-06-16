function floodFilBFS(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const startColor = image[sr][sc];
  const rows = image.length;
  const cols = image[0].length;
  const directions = [
    [0, 1], // Right
    [0, -1], // Left
    [1, 0], // Down
    [-1, 0], // Up
  ];
  const visited = new Set();

  const queue = [[sr, sc]];
  while (queue.length > 0) {
    const [r, c] = queue.shift()!;
    if (visited.has(`${r}-${c}`)) continue;
    visited.add(`${r}-${c}`);
    image[r][c] = color;

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 &&
        nr < rows &&
        nc >= 0 &&
        nc < cols &&
        image[nr][nc] === startColor
      ) {
        queue.push([nr, nc]);
      }
    }
  }
  return image;
}
