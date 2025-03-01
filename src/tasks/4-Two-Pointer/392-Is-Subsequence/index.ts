function isSubsequence(s: string, t: string): boolean {
  /* with extra memory
    let jIndex = 0;

    for (let i = 0; i < s.length; i++) {
      const charS = s[i];
      let isFound = false;

      for (let j = jIndex; j < t.length; j++) {
        const charT = t[j];

        if (charS === charT) {
          isFound = true;
          jIndex = j + 1;
          break;
        }
      }

      if (!isFound) return false;
    }

    return true;
  */

  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i += 1;
    }
    j += 1;
  }

  return i === s.length;
}
