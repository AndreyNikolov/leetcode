function decrypt(code: number[], k: number): number[] {
  let result = new Array(code.length).fill(0);
  if (k === 0) {
    return result;
  }

  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      for (let j = i + 1; j < i + k + 1; j++) {
        result[i] += code[j % code.length];
      }
    } else {
      for (let j = i - Math.abs(k); j < i; j++) {
        result[i] += code[(j + code.length) % code.length];
      }
    }
  }
  return result;
}
