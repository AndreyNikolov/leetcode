function isIsomorphic(s: string, t: string): boolean {
  const charSTMap: Record<string, string> = {};
  const charTSMap: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    const c1 = s[i];
    const c2 = t[i];
    if (
      (charSTMap[c1] && charSTMap[c1] !== c2) ||
      (charTSMap[c2] && charTSMap[c2] !== c1)
    ) {
      return false;
    }
    charSTMap[c1] = c2;
    charTSMap[c2] = c1;
  }

  return true;
}
