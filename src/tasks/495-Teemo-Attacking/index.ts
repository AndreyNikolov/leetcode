function findPoisonedDuration(timeSeries: number[], duration: number): number {
  // base case if duration == 0
  if (duration === 0) return 0;

  let totalDuration = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    const startTick = timeSeries[i];
    const endDurationTick = startTick + duration - 1;
    const nextAttackTick = timeSeries[i + 1];

    if (endDurationTick >= nextAttackTick) {
      totalDuration += nextAttackTick - startTick;
    } else {
      totalDuration += endDurationTick - startTick + 1;
    }
  }

  return totalDuration;
}
