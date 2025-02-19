function validMountainArray(arr: number[]): boolean {
  if (arr.length < 3) return false;

  let climbingCount = 0;
  let downCount = 0;

  let climbElement = arr[0];
  let downRoot = null;

  let isClimbing = true;
  for (let i = 1; i < arr.length; i++) {
    if (isClimbing) {
      if (climbElement < arr[i]) {
        climbingCount += 1;
        climbElement = arr[i];
      } else {
        if (climbingCount === 0) return false;
        if (climbElement === arr[i]) return false;
        isClimbing = false;
        downRoot = arr[i];
        downCount += 1;
      }
    } else {
      // going down
      if (downRoot && downRoot > arr[i]) {
        downRoot = arr[i];
        downCount += 1;
      } else {
        return false;
      }
    }
  }

  if (downCount === 0) return false;

  return true;
}
