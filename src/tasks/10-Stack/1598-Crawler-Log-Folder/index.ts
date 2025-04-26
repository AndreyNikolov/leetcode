function minOperations(logs: string[]): number {
  const stack = [];

  for (let i = 0; i < logs.length; i++) {
    const curr = logs[i];

    if (curr === "../" || curr === "./") {
      curr === "../" && stack.pop();
    } else {
      stack.push(curr);
    }
  }

  return stack.length;
}
