function isAlienSorted2(words: string[], order: string): boolean {
  if (words.length === 1) return true;

  const dict: Record<string, number> = {};
  for (let i = 0; i < order.length; i++) {
    dict[order[i]] = i;
  }

  for (let j = 0; j < words.length - 1; j++) {
    const curr = words[j];
    const next = words[j + 1];

    for (let k = 0; k < Math.max(curr.length, next.length); k++) {
      if (k === next.length) {
        return false;
      }

      const c1 = curr[k];
      const c2 = next[k];

      if (c1 !== c2) {
        if (dict[c1] > dict[c2]) {
          return false;
        }
        break;
      }
    }
  }

  return true;
}
