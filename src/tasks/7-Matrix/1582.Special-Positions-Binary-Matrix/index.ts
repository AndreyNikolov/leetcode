function numSpecial(mat: number[][]): number {
  const rows = mat.length;
  const cols = mat[0].length;

  const rowCount = new Array(rows).fill(0);
  const colCount = new Array(cols).fill(0);

  let result = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // i - row index
      // j - col index
      if (mat[i][j] === 1) {
        rowCount[i] += 1;
        colCount[j] += 1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
        result += 1;
      }
    }
  }

  return result;
}
