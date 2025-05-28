function findEvenNumbers(digits: number[]): number[] {
  const freq = new Array(10).fill(0);
  for (const digit of digits) {
    freq[digit]++;
  }

  const result: number[] = [];

  for (let num = 100; num <= 998; num += 2) {
    const a = Math.floor(num / 100);
    const b = Math.floor(num / 10) % 10;
    const c = num % 10;

    freq[a]--;
    freq[b]--;
    freq[c]--;

    if (freq[a] >= 0 && freq[b] >= 0 && freq[c] >= 0) {
      result.push(num);
    }

    freq[a]++;
    freq[b]++;
    freq[c]++;
  }

  return result;
}
