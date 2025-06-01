function findFirstNegativeBS(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < 0) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result; // -1 if no negative found
}

function findFirstNegative(arr: number[]): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) return i;
  }
  return -1;
}

function countNegatives(grid: number[][]): number {
  let result = 0;
  const m = grid[0].length;

  for (const row of grid) {
    let index = findFirstNegative(row);
    if (index > -1) {
      result += m - index;
    }
  }

  return result;
}
