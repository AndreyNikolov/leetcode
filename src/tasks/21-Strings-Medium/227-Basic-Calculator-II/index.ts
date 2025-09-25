function calculate(s: string): number {
  const stack: number[] = [];
  let preSign = "+";
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!isNaN(Number(char)) && char !== " ") {
      num = num * 10 + Number(char);
    }
    if (isNaN(Number(char)) || i === s.length - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop()! * num);
          break;
        default:
          stack.push((stack.pop()! / num) | 0);
      }
      num = 0;
      preSign = char;
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}
