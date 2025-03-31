function minOperations(s: string): number {
  let start0 = 0;

  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      if (s[i] === "1") {
        start0++;
      }
    } else {
      if (s[i] === "0") {
        start0++;
      }
    }
  }

  return Math.min(start0, s.length - start0);
}
