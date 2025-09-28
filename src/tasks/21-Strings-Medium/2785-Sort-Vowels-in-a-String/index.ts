function sortVowels(s: string): string {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  const sorted = [...s]
    .filter((ch) => vowels.has(ch))
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  let idx = 0;
  const result = [];

  for (let ch of s) {
    if (vowels.has(ch)) {
      result.push(sorted[idx++]);
    } else {
      result.push(ch);
    }
  }

  return result.join("");
}
