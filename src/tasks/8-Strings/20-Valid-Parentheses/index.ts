function isValid(s: string): boolean {
  const stack = [];
  const bracketsMap: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  const openingBrackets = Object.values(bracketsMap);

  for (let i = 0; i < s.length; i++) {
    if (openingBrackets.includes(s[i])) {
      stack.push(s[i]);
    } else {
      // closing bracket
      const firstClosing = stack.pop();
      if (firstClosing !== bracketsMap[s[i]]) {
        return false;
      }
    }
  }

  return !stack.length;
}
