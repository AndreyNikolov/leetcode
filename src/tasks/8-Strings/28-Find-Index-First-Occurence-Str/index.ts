function strStr(haystack: string, needle: string): number {
  let index = -1;
  const needleL = needle.length;
  const haystackL = haystack.length;

  if (needleL <= haystackL) {
    for (let i = 0; i < haystackL - needleL + 1; i++) {
      const currWindow = haystack.slice(i, i + needleL);
      if (currWindow === needle) {
        index = i;
        break;
      }
    }
  }

  return index;
}
