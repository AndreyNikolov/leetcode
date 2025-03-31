function countMatches(
  items: string[][],
  ruleKey: string,
  ruleValue: string
): number {
  return items.filter((el) => {
    if (ruleKey === "type") {
      return el[0] === ruleValue;
    } else if (ruleKey === "color") {
      return el[1] === ruleValue;
    } else if (ruleKey === "name") {
      return el[2] === ruleValue;
    }
  }).length;
}
