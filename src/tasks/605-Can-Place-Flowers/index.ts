function canPlaceFlower(
  leftPot: number | undefined,
  rightPod: number | undefined
) {
  return !leftPot && !rightPod;
}

function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let nRemains = n;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      canPlaceFlower(flowerbed[i - 1], flowerbed[i + 1])
    ) {
      flowerbed[i] = 1;
      nRemains -= 1;
    }
  }
  return nRemains < 1;
}
