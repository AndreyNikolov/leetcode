function isHappy(n: number): boolean {
  const numbers = new Set();

  while (true) {
    // we have a cycle
    if (numbers.has(n)) break;
    numbers.add(n);

    let nStr = n.toString();
    let sum = 0;
    for (let i = 0; i < nStr.length; i++) {
      sum += Math.pow(Number(nStr[i]), 2);
    }

    if (sum === 1) return true;
    n = sum;
  }

  return false;
}
