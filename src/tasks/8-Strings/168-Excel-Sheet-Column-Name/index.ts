function convertToTitle(columnNumber: number): string {
  let result = "";

  while (columnNumber > 0) {
    const offset = (columnNumber - 1) % 26;
    result = String.fromCharCode(offset + "A".charCodeAt(0)) + result;
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }

  return result;
}
