function maxDepth(s: string): number {
  const stack = [];
  let maxDepth = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr === "(") {
      stack.push(curr);
    }
    if (curr === ")") {
      maxDepth = Math.max(maxDepth, stack.length);
      stack.pop();
    }
  }

  return maxDepth;
}
