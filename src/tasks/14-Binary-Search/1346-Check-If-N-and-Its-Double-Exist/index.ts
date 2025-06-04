function checkIfExist(arr: number[]): boolean {
  /*
    arr.sort((a, b) => a - b)

    for (let i = 0; i<arr.length; i++) {
        const target = arr[i] * 2;
        const isFound = binarySearch(arr.slice(i), target)
        if (isFound) return true

    }

    return false;
    */
  const nums = new Set();
  for (const num of arr) {
    if (nums.has(2 * num) || (num % 2 === 0 && nums.has(num / 2))) return true;

    nums.add(num);
  }
  return false;
}

function binarySearchInt(arr: number[], target: number): boolean {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}
