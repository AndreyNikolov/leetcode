function removeKdigits(num: string, k: number): string {
  const stack = [];

  for (let i = 0; i < num.length; i++) {
    const curr = num[i];

    while (stack.length && curr < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(curr);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  let result = stack.join("").replace(/^0+/, "");
  return result !== "" ? result : "0";
}
