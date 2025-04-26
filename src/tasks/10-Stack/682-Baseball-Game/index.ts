function calPoints(operations: string[]): number {
  const stack: number[] = [];

  for (let i = 0; i < operations.length; i++) {
    const curr = operations[i];

    if (curr === "+") {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
    } else if (curr === "D") {
      stack.push(stack[stack.length - 1] * 2);
    } else if (curr === "C") {
      stack.pop();
    } else {
      stack.push(parseInt(curr));
    }
  }

  return stack.reduce((acc, curr) => acc + curr, 0);
}
