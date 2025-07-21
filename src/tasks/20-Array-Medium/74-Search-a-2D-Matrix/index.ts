function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    let top = 0;
    let bottom = m - 1;
    let targetRowIndex = -1;

    while (top <= bottom) {
        const mid = Math.floor((top + bottom) / 2);
        if (matrix[mid][0] > target) {
            bottom = mid - 1;
        } else if (matrix[mid][n - 1] < target) {
            top = mid + 1;
        } else {
            targetRowIndex = mid;
            break;
        }
    }

    if (targetRowIndex === -1) return false;
    const targetRow = matrix[targetRowIndex];

    let left = 0;
    let right = targetRow.length - 1;

    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (targetRow[mid] === target) return true;

        if (targetRow[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }


    return false;
};