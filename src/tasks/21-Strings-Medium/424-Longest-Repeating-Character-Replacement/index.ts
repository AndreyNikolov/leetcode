function characterReplacement1(s: string, k: number): number {
  let result = 0;
  let count: Record<string, number> = {};

  let left = 0;
  let right = 0;
  let maxFreq = 0;

  while (right < s.length) {
    const curr = s[right];
    count[curr] = (count[curr] || 0) + 1;

    maxFreq = Math.max(maxFreq, count[curr]);

    if (right - left + 1 - maxFreq > k) {
      count[s[left]]--;
      left++;
    }

    result = Math.max(right - left + 1, result);
    right++;
  }

  return result;
}
