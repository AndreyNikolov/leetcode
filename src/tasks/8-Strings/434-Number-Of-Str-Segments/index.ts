function countSegments(s: string): number {
  return s
    .trim()
    .split(" ")
    .filter((el) => el).length;
}
