function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let contentKids = 0;
  let cookieIndex = 0;

  while (contentKids < g.length && cookieIndex < s.length) {
    if (s[cookieIndex] >= g[contentKids]) {
      contentKids += 1;
    }
    cookieIndex += 1;
  }
  return contentKids;
}
