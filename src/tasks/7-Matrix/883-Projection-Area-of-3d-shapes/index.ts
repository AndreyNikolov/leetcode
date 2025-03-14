function projectionArea(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  //xy - count all elements, that are not null
  //xz - vector with the highest(lasrgest) elements from each row
  //yz - vector with the largest(largest) elements for each column
  let xy = 0;
  let xz = new Array(rows).fill(0);
  let yz = new Array(cols).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const curr = grid[i][j];
      if (curr > 0) {
        xy++;
      }
      if (curr > xz[i]) {
        xz[i] = curr;
      }
      if (curr > yz[j]) {
        yz[j] = curr;
      }
    }
  }

  return (
    xy +
    xz.reduce((acc, val) => acc + val, 0) +
    yz.reduce((acc, val) => acc + val, 0)
  );
}
