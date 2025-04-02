function kthDistinct(arr: string[], k: number): string {
  const freq: Record<string, number> = {};
  for (let i = 0; i < arr.length; i++) {
    freq[arr[i]] = (freq[arr[i]] || 0) + 1;
  }

  for (const word of arr) {
    if (freq[word] === 1) {
      k--;
      if (k === 0) {
        return word;
      }
    }
  }
  return "";

  // const filteredFreq = Object.entries(freq).filter(([key,value]) => value === 1)
  // return filteredFreq.length >= k ? filteredFreq[k-1][0] : ''
}
