function exist(board: string[][], word: string): boolean {
  const rows = board.length;
  const cols = board[0].length;
  const path = new Set();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (word[0] === board[i][j]) {
        const found = dfs(i, j, 0);
        if (found) return true;
      }
    }
  }

  function dfs(rowI: number, colI: number, index: number): boolean {
    if (index === word.length) return true;
    if (
      rowI < 0 ||
      colI < 0 ||
      rowI >= rows ||
      colI >= cols ||
      index > word.length ||
      word[index] !== board[rowI][colI] ||
      path.has(`${rowI}:${colI}`)
    )
      return false;

    path.add(`${rowI}:${colI}`);

    const result =
      dfs(rowI - 1, colI, index + 1) || //search top
      dfs(rowI, colI + 1, index + 1) || //search right
      dfs(rowI + 1, colI, index + 1) || //search bottom
      dfs(rowI, colI - 1, index + 1); //search left

    path.delete(`${rowI}:${colI}`);
    return result;
  }

  return false;
}
