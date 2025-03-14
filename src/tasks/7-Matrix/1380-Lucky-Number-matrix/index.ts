function luckyNumbers(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = [];

  const rowMin = [];

  for (let i = 0; i < rows; i++) {
    rowMin.push(Math.min(...matrix[i]));
  }

  const colMax = matrix[0];
  for (let i = 1; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] > colMax[j]) {
        colMax[j] = matrix[i][j];
      }
    }
  }

  for (let i = 0; i < rowMin.length; i++) {
    if (colMax.includes(rowMin[i])) {
      result.push(rowMin[i]);
    }
  }

  return result;
}
