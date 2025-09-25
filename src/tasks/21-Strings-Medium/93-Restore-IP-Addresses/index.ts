function restoreIpAddresses(s: string): string[] {
  const result: string[] = [];

  if (s.length > 12) return [];

  function dfs(i: number, dots: number, currIp: string): void {
    if (dots === 4 && i === s.length) {
      result.push(currIp.slice(0, -1));
      return;
    }
    if (dots > 4) return;

    for (let j = i; j < i + 3 && j < s.length; j++) {
      let curr = s.slice(i, j + 1);

      if (curr[0] === "0" && curr.length > 1) continue;

      if (parseInt(curr) <= 255) {
        dfs(j + 1, dots + 1, currIp + curr + ".");
      }
    }
  }

  dfs(0, 0, "");
  return result;
}
