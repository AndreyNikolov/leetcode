function longestPalindrome(s: string): number {
  let longest = 0;
  const charSet = new Set();
  for (const char of s) {
    if (charSet.has(char)) {
      charSet.delete(char);
      longest += 2;
    } else {
      charSet.add(char);
    }
  }

  if (charSet.size) {
    longest++;
  }

  return longest;
}
