function dayOfYear(date: string): number {
  const [year, month, day] = date.split("-").map((el) => parseInt(el));
  let result = day;
  if ((year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) && month > 2) {
    result += 1;
  }

  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (let i = 1; i < month; i++) {
    result += months[i - 1];
  }

  return result;
}
