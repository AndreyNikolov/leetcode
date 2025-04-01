function reversePrefix(word: string, ch: string): string {
  for (let i = 0; i < word.length; i++) {
    if (word[i] === ch) {
      let remaining = word.slice(i + 1);
      let swap = "";
      for (let j = i; j >= 0; j--) {
        swap += word[j];
      }

      return swap + remaining;
    }
  }

  return word;
}
