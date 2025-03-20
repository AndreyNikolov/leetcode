function canConstruct(ransomNote: string, magazine: string): boolean {
  const mFreq: Record<string, number> = {};

  for (const char of magazine) {
    mFreq[char] = (mFreq[char] || 0) + 1;
  }

  for (const char of ransomNote) {
    if (!mFreq[char]) return false;
    mFreq[char]--;
  }

  return true;
}
