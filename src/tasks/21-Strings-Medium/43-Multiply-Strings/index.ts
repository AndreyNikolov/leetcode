function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  const N = num1.length + num2.length;
  const result = new Array(N).fill(0);

  const n1 = num1.split("").reverse();
  const n2 = num2.split("").reverse();

  for (let i = 0; i < n2.length; i++) {
    for (let j = 0; j < n1.length; j++) {
      const mul = parseInt(n1[j]) * parseInt(n2[i]) + result[i + j];
      result[i + j] = mul % 10;
      result[i + j + 1] += Math.floor(mul / 10);
    }
  }

  while (result.length > 1 && result.at(-1) === 0) {
    result.pop();
  }

  return result.reverse().join("");
}
