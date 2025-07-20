function minPathSum(grid: number[][]): number {
    const M = grid.length;
    const N = grid[0].length;
    const dp = new Map<string, number>();

    function dfs(r: number, c: number): number {
        if (r >= M || c >= N) {
            return Infinity;
        }
        if (r === M - 1 && c === N - 1) {
            return grid[r][c];
        }

        const key = `${r},${c}`;
        if (dp.has(key)) {
            return dp.get(key)!;
        }

        const right = dfs(r, c + 1);
        const down = dfs(r + 1, c);
        const minSum = grid[r][c] + Math.min(right, down);
        dp.set(key, minSum);
        return minSum;
    }

    return dfs(0, 0);
};