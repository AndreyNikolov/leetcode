function findAnagrams(s: string, p: string): number[] {
  if (s.length < p.length) return [];
  const result: number[] = [];

  const pCount: Record<string, number> = {};
  for (const ch of p) {
    pCount[ch] = (pCount[ch] || 0) + 1;
  }

  const sCount: Record<string, number> = {};
  let left = 0;

  for (let right = 0; right < s.length; right++) {
    const curr = s[right];
    sCount[curr] = (sCount[curr] || 0) + 1;

    // shrink window if it exceeds p.length
    if (right - left + 1 > p.length) {
      const leftChar = s[left];
      sCount[leftChar]--;
      if (sCount[leftChar] === 0) delete sCount[leftChar];
      left++;
    }

    // check anagram when window matches length
    if (right - left + 1 === p.length) {
      let isAnagram = true;
      for (const key in pCount) {
        if (sCount[key] !== pCount[key]) {
          isAnagram = false;
          break;
        }
      }
      if (isAnagram) result.push(left);
    }
  }

  return result;
}
