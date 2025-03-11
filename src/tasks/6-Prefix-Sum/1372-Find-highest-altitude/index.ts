function largestAltitude(gain: number[]): number {
  let altitudes = [0];
  let result = 0;

  for (let i = 0; i < gain.length; i++) {
    const newPoint = altitudes[i] + gain[i];
    result = Math.max(result, newPoint);
    altitudes.push(newPoint);
  }

  return result;
}
