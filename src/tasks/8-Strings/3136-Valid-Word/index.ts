function isChar(char: string): boolean {
  return (
    ("a".charCodeAt(0) <= char.charCodeAt(0) &&
      "z".charCodeAt(0) >= char.charCodeAt(0)) ||
    ("A".charCodeAt(0) <= char.charCodeAt(0) &&
      "Z".charCodeAt(0) >= char.charCodeAt(0))
  );
}

function isDigit(char: string): boolean {
  const code = char.charCodeAt(0);
  return code >= "0".charCodeAt(0) && code <= "9".charCodeAt(0);
}

const VOWES = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

function isValid(word: string): boolean {
  if (word.length < 3) return false;
  let hasVowel = false;
  let hasConsonant = false;

  for (let i = 0; i < word.length; i++) {
    const curr = word[i];
    if (isChar(curr)) {
      if (VOWES.has(curr) && !hasVowel) {
        hasVowel = true;
      } else if (!VOWES.has(curr) && !hasConsonant) {
        hasConsonant = true;
      }
    } else if (isDigit(curr)) {
      continue;
    } else {
      return false;
    }
  }
  return hasVowel && hasConsonant;
}