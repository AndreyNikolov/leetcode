function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;
    const dp = new Map<string, number>();

    function dfs(r: number, c: number): number {
        if (r >= M || c >= N || obstacleGrid[r][c] === 1) {
            return 0;
        }
        if (r === M - 1 && c === N - 1) {
            return 1;
        }

        const key = `${r},${c}`;
        if (dp.has(key)) {
            return dp.get(key)!;
        }

        const paths = dfs(r + 1, c) + dfs(r, c + 1);
        dp.set(key, paths);
        return paths;
    }

    return dfs(0, 0);
};