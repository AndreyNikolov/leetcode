function compress(chars: string[]): number {
  let insert = 0;
  let i = 0;

  while (i < chars.length) {
    let group = 1;

    while (i + group < chars.length && chars[i + group] === chars[i]) {
      group++;
    }

    //write char
    chars[insert] = chars[i];
    insert++;

    if (group > 1) {
      const groupStr = `${group}`;
      for (let ch of groupStr) {
        chars[insert] = ch;
        insert++;
      }
    }

    // move to next group
    i += group;
  }

  return insert;
}
