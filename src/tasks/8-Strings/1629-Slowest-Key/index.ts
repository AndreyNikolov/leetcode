function slowestKey(releaseTimes: number[], keysPressed: string): string {
  let result = "";
  let maxDuration = 0;

  for (let i = 0; i < releaseTimes.length; i++) {
    const previous = i === 0 ? 0 : releaseTimes[i - 1];
    const current = releaseTimes[i];

    if (current - previous > maxDuration) {
      result = keysPressed[i];
      maxDuration = current - previous;
    } else if (current - previous === maxDuration) {
      result = keysPressed[i] > result ? keysPressed[i] : result;
    }
  }

  return result;
}
