function backspaceCompare(s: string, t: string): boolean {
  function buildStr(s: string) {
    const chars = s.split("");
    const result = [];

    for (let i = 0; i < chars.length; i++) {
      if (chars[i] !== "#") {
        result.push(chars[i]);
      } else {
        result.pop();
      }
    }
    return result.join("");
  }
  return buildStr(s) === buildStr(t);
}
