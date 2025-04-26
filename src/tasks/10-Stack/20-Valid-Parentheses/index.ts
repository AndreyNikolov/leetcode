var isValid2 = function (s: string) {
  let matching: Record<string, string> = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  let stack = [];
  let closing = Object.keys(matching);
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (closing.includes(curr)) {
      let first = stack.pop();
      if (matching[curr] !== first) return false;
    } else {
      stack.push(curr);
    }
  }

  return stack.length === 0;
};
