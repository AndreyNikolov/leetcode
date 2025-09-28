function complexNumberMultiply(num1: string, num2: string): string {
  function parse(str: string): [number, number] {
    const [real, imag] = str.slice(0, -1).split("+");
    return [parseInt(real), parseInt(imag)];
  }

  const [a, b] = parse(num1); //a + bi
  const [c, d] = parse(num2); //c + di

  // (a+bi) * (c+di) = (ac - bd) + (ad + bc)i
  const real = a * c - b * d;
  const imag = a * d + b * c;

  return `${real}+${imag}i`;
}
