function countSeniors(details: string[]): number {
  return details.filter((el) => {
    return parseInt(el.slice(11, 13)) > 60;
  }).length;
}
