function uncommonFromSentences(s1: string, s2: string): string[] {
  const s1Arr = s1.split(" ");
  const s2Arr = s2.split(" ");

  const sFreq = new Map();

  for (let i = 0; i < s1Arr.length; i++) {
    sFreq.set(s1Arr[i], (sFreq.get(s1Arr[i]) || 0) + 1);
  }

  for (let i = 0; i < s2Arr.length; i++) {
    sFreq.set(s2Arr[i], (sFreq.get(s2Arr[i]) || 0) + 1);
  }

  let result: string[] = [];
  sFreq.forEach((value, key) => {
    if (value === 1) result.push(key);
  });

  return result;
}
