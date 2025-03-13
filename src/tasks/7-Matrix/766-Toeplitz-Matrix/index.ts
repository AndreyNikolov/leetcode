function isToeplitzMatrix(matrix: number[][]): boolean {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;

  /* Hashmap approach - easiest to undersdand
    const groups: Record<number, number> = {};
    
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (!(r - c in groups)) {
                groups[r - c] = matrix[r][c];
            } else if (groups[r - c] !== matrix[r][c]) {
                return false;
            }
        }
    }
    
    return true;
    */

  /* Slow DFS traversal
    
    let isToeplitz = true;
    
    if (matrix.length === 1) return isToeplitz

    for (let i = matrix.length - 1; i>=0; i--) {
        // start from bottom left to top left
        dfs(i, 0, matrix[i][0]);
    }

    for (let j = 0; j<matrix[0].length; j++) {
        // top left to top right
        dfs(0, j, matrix[0][j]);
    }

    function dfs(i,j, expected) {
        if (i < 0 || j < 0 || i>=matrix.length || j>=matrix[0].length) {
            // unreachable node
            return;
        }

        if (matrix[i][j] !== expected) {
            isToeplitz = false;
            return
        
        }

        dfs(i+1, j+1, expected);
    }
    

    return isToeplitz;
    */
}
