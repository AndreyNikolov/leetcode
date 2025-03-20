function wordPattern(pattern: string, s: string): boolean {
  const sArr = s.split(" ");

  if (pattern.length !== sArr.length) return false;

  const pMap = new Map();
  const sMap = new Map();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = sArr[i];

    if (
      (pMap.has(char) && pMap.get(char) !== word) ||
      (sMap.has(word) && sMap.get(word) !== char)
    ) {
      return false;
    }

    pMap.set(char, word);
    sMap.set(word, char);
  }

  return true;
}
