function countGoodTriplets(
  arr: number[],
  a: number,
  b: number,
  c: number
): number {
  let count = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let first = arr[i];
      let second = arr[j];
      if (Math.abs(first - second) <= a) {
        let k = j + 1;
        while (k < arr.length) {
          let third = arr[k];
          if (Math.abs(second - third) <= b && Math.abs(first - third) <= c) {
            count++;
          }
          k++;
        }
      }
    }
  }

  return count;
}
