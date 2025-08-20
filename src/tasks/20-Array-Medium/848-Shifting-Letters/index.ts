function shiftLetter(char: string, shifts: number): string {
  let letterCode = char.charCodeAt(0) - "a".charCodeAt(0);
  return String.fromCharCode(((letterCode + shifts) % 26) + "a".charCodeAt(0));
}

function shiftingLetters(s: string, shifts: number[]): string {
  const split = s.split("");

  for (let i = shifts.length - 1; i >= 0; i--) {
    if (i < shifts.length - 1) {
      shifts[i] += shifts[i + 1];
    }
    split[i] = shiftLetter(split[i], shifts[i]);
  }

  return split.join("");
}
