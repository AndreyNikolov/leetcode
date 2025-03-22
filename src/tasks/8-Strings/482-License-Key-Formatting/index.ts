function licenseKeyFormatting(s: string, k: number): string {
  const sFormatted = s.replaceAll("-", "");
  const result = [];
  let current = 0;
  for (let i = sFormatted.length - 1; i >= 0; i--) {
    result.push(sFormatted[i].toUpperCase());
    current++;
    if (current === k && i !== 0) {
      result.push("-");
      current = 0;
    }
  }
  return result.reverse().join("");
}
