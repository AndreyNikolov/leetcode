class MyHashSet {
  private hashTable: (number[] | undefined)[];
  private hashModule = Math.pow(10, 4); // 10,000 bucket size

  constructor() {
    this.hashTable = new Array(this.hashModule).fill(undefined);
  }

  getBucketIndex(key: number): number {
    return key % this.hashModule;
  }

  add(key: number): void {
    const index = this.getBucketIndex(key);
    if (this.hashTable[index] === undefined) {
      this.hashTable[index] = [key];
      return;
    }

    const curr = this.hashTable[index];
    if (curr && !curr.includes(key)) {
      this.hashTable[index] = [...curr, key];
    }
  }

  remove(key: number): void {
    const index = this.getBucketIndex(key);
    const curr = this.hashTable[index];
    if (curr === undefined) {
      return;
    }

    const internalIndex = curr.indexOf(key);
    if (internalIndex !== -1) {
      curr.splice(internalIndex, 1);
      if (curr.length === 0) {
        this.hashTable[index] = undefined;
      }
    }
  }

  contains(key: number): boolean {
    const index = this.getBucketIndex(key);
    const curr = this.hashTable[index];
    return curr !== undefined && curr.includes(key);
  }
}
