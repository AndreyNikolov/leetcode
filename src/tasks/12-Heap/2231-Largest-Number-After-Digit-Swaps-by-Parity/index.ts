import { MaxHeap } from "../MaxHeap";

function largestIntegerSlow(num: number): number {
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

function largestInteger(num: number): number {
  const digits = String(num).split("");
  const oddHeap = new MaxHeap<number>(digits.length);
  const evenHeap = new MaxHeap<number>(digits.length);

  for (let i = 0; i < digits.length; i++) {
    const digit = parseInt(digits[i]);
    if (digit % 2 === 0) {
      evenHeap.push(digit);
    } else {
      oddHeap.push(digit);
    }
  }

  for (let i = 0; i < digits.length; i++) {
    if (parseInt(digits[i]) % 2 === 0) {
      digits[i] = evenHeap.pop()!.toString();
    } else {
      digits[i] = oddHeap.pop()!.toString();
    }
  }

  return parseInt(digits.join(""));
}
