function diagonalSum(mat: number[][]): number {
  const n = mat.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    if (i !== n - i - 1) {
      sum += mat[i][n - i - 1];
    }
  }

  return sum;
}
