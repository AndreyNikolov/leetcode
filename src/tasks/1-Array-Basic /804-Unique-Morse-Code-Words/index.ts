const letterCodes = [
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

function transformWordToMorse(word: string) {
  const chars = word.split("");

  return chars
    .map((el) => {
      const morseIndex = el.charCodeAt(0) - 97;
      return letterCodes[morseIndex];
    })
    .join("");
}

function uniqueMorseRepresentations(words: string[]): number {
  const result = new Set();

  for (let i = 0; i < words.length; i++) {
    const transformation = transformWordToMorse(words[i]);
    if (!result.has(transformation)) {
      result.add(transformation);
    }
  }

  return result.size;
}
