function plusOne(digits: number[]): number[] {
  const number = BigInt(digits.join(""));
  const result = number + BigInt(1);
  return result
    .toString()
    .split("")
    .map((el) => parseInt(el));
}
