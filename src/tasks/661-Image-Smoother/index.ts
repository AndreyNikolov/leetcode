/**
 * @param {number[][]} img
 * @return {number[][]}
 */

function getAdjacentCellsFromMatrix(
  rowIndex: number,
  columnIndex: number,
  matrix: number[][]
): number[] {
  /*
        const currentPoint = matrix[rowIndex][columnIndex]
        const aboveRowIndex = rowIndex - 1;
        const belowRowIndex = rowIndex + 1;
        const leftColumnIndex = columnIndex - 1;
        const rightColumnIndex = columnIndex + 1;
    */

  const resultCells = [];

  for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
    for (let j = columnIndex - 1; j <= columnIndex + 1; j++) {
      if (matrix[i] !== undefined && matrix[i][j] !== undefined) {
        resultCells.push(matrix[i][j]);
      }
    }
  }
  return resultCells;
}

function smoothCell(subMatrix: number[]): number {
  const sum = subMatrix.reduce((acc, curr) => acc + curr, 0);
  return Math.floor(sum / subMatrix.length);
}

var imageSmoother = function (img: number[][]): number[][] {
  // first traverse all rows
  const result = Array(img.length)
    .fill(null)
    .map(() => Array(img[0].length).fill(null));
  for (let rowIndex = 0; rowIndex < img.length; rowIndex++) {
    const row = img[rowIndex];
    // then go trough cells
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      result[rowIndex][columnIndex] = smoothCell(
        getAdjacentCellsFromMatrix(rowIndex, columnIndex, img)
      );
    }
  }

  return result;
};
