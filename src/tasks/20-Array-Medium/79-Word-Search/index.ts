function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const cols = board[0].length;
    
    const visited = new Set();

    for (let i = 0; i<rows; i++) {
        for (let j = 0; j< cols; j++) {
            if (word[0] === board[i][j]) {
                const found = dfs(i, j, 0)
                if (found) return true
            }
        }
    }

    function dfs(r:number, c:number, i:number): boolean {
        if (r < 0 || c < 0 || r >= rows || c >= cols || visited.has(`${r}:${c}`)) return false
        if (board[r][c] !== word[i]) return false
        if (i === word.length - 1) return true;

        visited.add(`${r}:${c}`)
        const result = dfs(r - 1, c, i+1) || dfs(r, c + 1, i+1) || dfs(r + 1, c, i+1) || dfs(r, c - 1, i +1)
        visited.delete(`${r}:${c}`)
        return result
    }

    return false
};