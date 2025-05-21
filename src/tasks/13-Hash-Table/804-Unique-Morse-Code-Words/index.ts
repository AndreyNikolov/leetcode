function uniqueMorseRepresentations2(words: string[]): number {
  const morse = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];

  let result = new Set();

  for (let i = 0; i < words.length; i++) {
    const code = words[i]
      .split("")
      .map((el) => morse[el.charCodeAt(0) - "a".charCodeAt(0)])
      .join("");
    result.add(code);
  }

  return result.size;
}
