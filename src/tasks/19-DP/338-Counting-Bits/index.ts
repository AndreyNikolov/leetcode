// counts 1s in the binary representation of a number
// Time complexity: O(log n)
function countOnes(n: number): number {
  let count = 0;
  while (n > 0) {
    if (n % 2 === 1) {
      count++;
    }
    n = Math.floor(n / 2); // Integer division
  }
  return count;
}

function countBits(n: number): number[] {
    const result = [0];
    let offset = 1;

    for (let i = 1; i <= n; i++) {
        if (i === offset * 2) {
            offset = i;
        }
        result[i] = 1 + result[i - offset];
    }

    return result;
};