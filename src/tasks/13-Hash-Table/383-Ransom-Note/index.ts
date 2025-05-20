function canConstruct2(ransomNote: string, magazine: string): boolean {
  if (ransomNote.length > magazine.length) return false;

  const charsFreq = new Array(26).fill(0);

  for (let i = 0; i < Math.max(ransomNote.length, magazine.length); i++) {
    if (ransomNote[i]) {
      charsFreq[ransomNote[i].charCodeAt(0) - "a".charCodeAt(0)]--;
    }

    if (magazine[i]) {
      charsFreq[magazine[i].charCodeAt(0) - "a".charCodeAt(0)]++;
    }
  }

  return !charsFreq.some((el) => el < 0);
}
