var reversePrefixStack = function (word: string, ch: string) {
  const reverse = [];
  let foundIndex = -1;
  for (let i = 0; i < word.length; i++) {
    reverse.unshift(word[i]);
    if (word[i] === ch) {
      foundIndex = i;
      break;
    }
  }

  if (foundIndex === -1) return word;

  return reverse.join("") + word.slice(foundIndex + 1);
};
