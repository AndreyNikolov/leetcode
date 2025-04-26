function evalRPN(tokens: string[]): number {
  const stack = [];
  const operations = ["+", "-", "*", "/"];

  for (let i = 0; i < tokens.length; i++) {
    if (operations.includes(tokens[i])) {
      let result = 0;
      let b = stack.pop()!;
      let a = stack.pop()!;
      switch (tokens[i]) {
        case "+":
          result = a + b;
          break;

        case "-":
          result = a - b;
          break;

        case "*":
          result = a * b;
          break;

        case "/":
          result = Math.trunc(a / b);
          break;

        default:
          break;
      }
      stack.push(result);
    } else {
      stack.push(parseInt(tokens[i]));
    }
  }
  return stack[0];
}
