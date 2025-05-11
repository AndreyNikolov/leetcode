function repeatedSubstringPattern(s: string): boolean {
  const sLen = s.length;
  if (sLen === 1) return false;

  for (let i = 1; i < sLen; i++) {
    if (sLen % i === 0) {
      const subStr = s.slice(0, i);
      const str = subStr.repeat(sLen / i);
      if (s === str) return true;
    }
  }

  return false;
}
