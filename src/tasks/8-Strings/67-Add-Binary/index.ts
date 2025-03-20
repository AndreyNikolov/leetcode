function addBinary(a: string, b: string): string {
  let result = "";
  let carry = 0;
  const iterLength = Math.max(a.length, b.length);
  const reverseA = a.split("").reverse().join("");
  const reverseB = b.split("").reverse().join("");

  for (let i = 0; i < iterLength; i++) {
    const bitA = reverseA[i] !== undefined ? parseInt(reverseA[i]) : 0;
    const bitB = reverseB[i] !== undefined ? parseInt(reverseB[i]) : 0;

    let bitC = bitA + bitB + carry;
    result = `${bitC % 2}` + result;
    carry = bitC > 1 ? 1 : 0;
  }

  if (carry) {
    result = "1" + result;
  }

  return result;
}
