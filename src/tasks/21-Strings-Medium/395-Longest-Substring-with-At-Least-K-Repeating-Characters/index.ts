function longestSubstring(s: string, k: number): number {
  function search(start: number, end: number): number {
    if (end < start) return 0; //base case
    const frequency = new Array(26).fill(0);

    for (let i = start; i <= end; i++) {
      const index = s.charCodeAt(i) - "a".charCodeAt(0);
      frequency[index]++;
    }

    let result = end - start + 1; // assume result is max length
    for (let i = start; i <= end; i++) {
      const index = s.charCodeAt(i) - "a".charCodeAt(0);
      if (frequency[index] !== 0 && frequency[index] < k) {
        result = Math.max(search(start, i - 1), search(i + 1, end));
        break;
      }
    }

    return result;
  }

  return search(0, s.length - 1);
}
