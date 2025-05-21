function longestPalindrome2(s: string): number {
  /* Slow solution with couting frequencies
  let freq: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    freq[s[i]] = (freq[s[i]] || 0) + 1;
  }

  let result = 0;
  let shouldAddOne = false;
  for (const [key, value] of Object.entries(freq)) {
    if (value % 2 === 0) {
      result += value;
    } else if (value % 2 === 1) {
      shouldAddOne = true;
      result += value - 1;
    }
  }

  return result + (shouldAddOne ? 1 : 0);
  */
  const charSet = new Set();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    if (charSet.has(s[i])) {
      charSet.delete(s[i]);
      result += 2;
    } else {
      charSet.add(s[i]);
    }
  }

  if (charSet.size) {
    result += 1;
  }

  return result;
}
