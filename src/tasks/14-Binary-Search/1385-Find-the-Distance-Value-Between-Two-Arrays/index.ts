function isRangePresent(arr: number[], low: number, high: number): boolean {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] >= low && arr[mid] <= high) return true;
    else if (arr[mid] < low) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  arr2.sort((a, b) => a - b);

  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    if (!isRangePresent(arr2, arr1[i] - d, arr1[i] + d)) {
      result++;
    }
  }

  return result;
}
