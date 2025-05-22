function hasGroupsSizeX(deck: number[]): boolean {
  let freqCount: Record<number, number> = {};
  for (let i = 0; i < deck.length; i++) {
    freqCount[deck[i]] = (freqCount[deck[i]] || 0) + 1;
  }

  const freq = Object.values(freqCount);
  const divisor = freq.reduce((acc, val) => gcd(acc, val));

  return divisor > 1;
}
