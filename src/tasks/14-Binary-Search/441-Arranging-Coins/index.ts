function arrangeCoins(n: number): number {
  let left = 1;
  let right = n;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let coinsNeeded = (mid / 2) * (mid + 1);

    if (coinsNeeded === n) return mid;
    else if (coinsNeeded > n) {
      right = mid - 1;
    } else if (coinsNeeded < n) {
      left = mid + 1;
      result = Math.max(result, mid);
    }
  }

  return result;
  /*
   O(n)
   let sum = 0;
   let row = 0; 

   while (sum < n) {
        row++;
        sum += row;
   }

   if (sum === n) {
        return row;
    }

    return row - 1; 
    */
}
