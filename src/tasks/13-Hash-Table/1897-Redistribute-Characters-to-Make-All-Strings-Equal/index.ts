function makeEqual(words: string[]): boolean {
  let freq: Record<string, number> = {};

  for (let i = 0; i < words.length; i++) {
    for (const char of words[i]) {
      freq[char] = (freq[char] || 0) + 1;
    }
  }

  for (const charFreq of Object.values(freq)) {
    if (charFreq % words.length !== 0) return false;
  }

  return true;
}
