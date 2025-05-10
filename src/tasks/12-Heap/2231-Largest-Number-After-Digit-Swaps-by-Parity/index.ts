function largestInteger(num: number): number {
  const digits = num.toString().split("").map(Number);
  const odds: number[] = [];
  const evens: number[] = [];

  for (const d of digits) {
    if (d % 2 === 0) {
      evens.push(d);
    } else {
      odds.push(d);
    }
  }

  odds.sort((a, b) => b - a);
  evens.sort((a, b) => b - a);

  const result = digits.map((d) => {
    if (d % 2 === 0) {
      return evens.shift();
    } else {
      return odds.shift();
    }
  });

  return parseInt(result.join(""));
}

// TODO- Solve with max heap
