class MyHashMap {
  private hashMap: (number[][] | undefined)[];
  private bucketSize = Math.pow(10, 4); // 10,000 bucket size

  constructor() {
    this.hashMap = new Array(this.bucketSize).fill(undefined);
  }

  getBucketIndex(key: number): number {
    return key % this.bucketSize;
  }

  put(key: number, value: number): void {
    const bucketIndex = this.getBucketIndex(key);
    if (this.hashMap[bucketIndex] !== undefined) {
      const currentTuples = this.hashMap[bucketIndex];
      const found = currentTuples.find((el) => el[0] === key);
      if (found) {
        found[1] = value;
      } else {
        this.hashMap[bucketIndex] = [...currentTuples, [key, value]];
      }
    } else {
      this.hashMap[bucketIndex] = [[key, value]];
    }
  }

  get(key: number): number {
    const bucketIndex = this.getBucketIndex(key);
    if (this.hashMap[bucketIndex] !== undefined) {
      const currentTuples = this.hashMap[bucketIndex];
      for (let i = 0; i < currentTuples.length; i++) {
        if (currentTuples[i][0] === key) {
          return currentTuples[i][1];
        }
      }
    }
    return -1;
  }

  remove(key: number): void {
    const bucketIndex = this.getBucketIndex(key);
    if (this.hashMap[bucketIndex] !== undefined) {
      const currentTuples = this.hashMap[bucketIndex];
      const found = currentTuples.find((el) => el[0] === key);
      if (found) {
        const indexToBeRemoved = this.hashMap[bucketIndex].indexOf(found);
        this.hashMap[bucketIndex].splice(indexToBeRemoved, 1);
      }
    }
  }
}
