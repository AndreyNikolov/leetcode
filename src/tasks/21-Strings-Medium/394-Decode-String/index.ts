// const isDigitL = (s) => !isNaN(Number(s));
// const isLetter = (s) => /^[a-z]$/.test(s);

function decodeString(s: string): string {
  const numStack: number[] = [];
  const charStack: string[] = [];

  let currNum = 0;
  let str = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!isNaN(Number(s))) {
      currNum = currNum * 10 + Number(char);
    } else if (/^[a-z]$/.test(char)) {
      str += char;
    } else if (char === "[") {
      numStack.push(currNum);
      currNum = 0;

      charStack.push(str);
      str = "";
    } else if (char === "]") {
      // do a compute
      const num = numStack.pop()!;
      const prevStr = charStack.pop();
      str = prevStr + str.repeat(num);
    }
  }

  return str;
}
