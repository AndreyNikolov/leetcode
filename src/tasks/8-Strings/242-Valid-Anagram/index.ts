function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const sMapFreq: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (sMapFreq[c] !== undefined) {
      sMapFreq[c] += 1;
    } else {
      sMapFreq[c] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    const c = t[j];

    if (!sMapFreq[c]) return false;

    sMapFreq[c] -= 1;

    if (sMapFreq[c] === 0) {
      delete sMapFreq[c];
    }
  }

  return Object.keys(sMapFreq).length === 0;
}

function isAnagramSort(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
