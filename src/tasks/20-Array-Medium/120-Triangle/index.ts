function minimumTotal(triangle: number[][]): number {
    const dp = [...triangle[triangle.length-1]]

    for (let i = triangle.length-2; i>= 0; i--) {
        const currRow = triangle[i];

        for (let j = 0; j< currRow.length; j++) {
            dp[j] = currRow[j] + Math.min(dp[j], dp[j+1])
        }
    }

    return dp[0]
};