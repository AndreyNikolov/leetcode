function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  let mapA = new Map();

  for (let i = 0; i < s.length; i++) {
    const newVal = (mapA.get(s[i]) || 0) + 1;
    mapA.set(s[i], newVal);
  }

  for (let j = 0; j < t.length; j++) {
    if (!mapA.get(t[j])) return false;
    const newVal = mapA.get(t[j]) - 1;
    if (!newVal) {
      mapA.delete(t[j]);
    } else {
      mapA.set(t[j], newVal);
    }
  }

  return mapA.size === 0;
}
