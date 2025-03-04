function isAnagram(s: string, t: string): boolean {
  const sMap = new Map();

  const charsInS = s.split("");
  const charsInT = t.split("");

  for (let i = 0; i < charsInS.length; i++) {
    const curr = charsInS[i];
    if (sMap.has(curr)) {
      sMap.set(curr, sMap.get(curr) + 1);
    } else {
      sMap.set(curr, 1);
    }
  }

  for (let i = 0; i < charsInT.length; i++) {
    const curr = charsInT[i];
    if (sMap.has(curr)) {
      let found = sMap.get(curr);
      if (found > 1) {
        sMap.set(curr, found - 1);
      } else {
        sMap.delete(curr);
      }
    } else {
      return false;
    }
  }

  return sMap.size === 0;
}

function isAnagramSlow(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const charsInS = s.split("");
  const charsInT = t.split("");
  for (let i = 0; i < charsInS.length; i++) {
    const foundIndex = charsInT.indexOf(charsInS[i]);
    if (foundIndex > -1) {
      charsInT.splice(foundIndex, 1);
    }
  }

  return charsInT.length === 0;
}

function isAnagramSort(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
