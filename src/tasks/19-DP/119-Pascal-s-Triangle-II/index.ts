var getRow = function(rowIndex:number): number[] {
    if (rowIndex < 0) return [];
    const result = [[1], [1, 1]];

    for (let i = 2; i<=rowIndex; i++) {
        const curr = [];

        for (let j = 0; j<= i; j++) {
            if (j === 0 || j === i) {
                curr.push(1)
            } else {
                curr.push(result[i-1][j-1] + result[i-1][j])
            }
        }
        result.push(curr)
    }

    return result[rowIndex]
};