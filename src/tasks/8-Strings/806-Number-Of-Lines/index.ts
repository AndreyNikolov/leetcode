function numberOfLines(widths: number[], s: string): number[] {
  let lineCount = 1;
  let lineWidth = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    const currentWidth = widths[curr.charCodeAt(0) - 97];

    lineWidth += currentWidth;
    if (lineWidth > 100) {
      lineCount++;
      lineWidth = currentWidth;
    }
    // if (lineWidth + currentWidth > 100) {
    //     lineCount++;
    //     lineWidth = currentWidth
    // } else if (lineWidth + currentWidth === 100) {
    //     lineCount++;
    //     lineWidth = i === s.length - 1 ? 100 : 0;
    // } else {
    //     lineWidth += currentWidth
    // }
  }

  return [lineCount, lineWidth];
}
