class MinHeap {
  constructor(maxSize) {
    this.arr = new Array(maxSize).fill(null);
    this.maxSize = maxSize;
    this.heapSize = 0;
  }

  left(i) {
    return 2 * i + 1;
  }

  right(i) {
    return 2 * i + 2;
  }

  parent(i) {
    return Math.floor((i - 1) / 2);
  }

  peek() {
    return this.arr[0];
  }

  minHeapify(i) {
    const left = this.left(i);
    const right = this.right(i);
    let smallest = i;
    if (left < this.heapSize && this.arr[left] < this.arr[smallest]) {
      smallest = left;
    }
    if (right < this.heapSize && this.arr[right] < this.arr[smallest]) {
      smallest = right;
    }
    if (smallest !== i) {
      [this.arr[smallest], this.arr[i]] = [this.arr[i], this.arr[smallest]];
      this.minHeapify(smallest);
    }
  }

  pop() {
    if (this.heapSize <= 0) {
      return null;
    }
    if (this.heapSize === 1) {
      this.heapSize -= 1;
      return this.arr[0];
    }

    const root = this.arr[0];
    this.arr[0] = this.arr[this.heapSize - 1];
    this.heapSize -= 1;

    this.minHeapify(0);

    return root;
  }

  push(x) {
    if (this.heapSize === this.maxSize) {
      console.error("Heap overflow! Could not push.");
      return;
    }

    let i = this.heapSize;
    this.arr[i] = x;

    this.heapSize += 1;

    while (i !== 0 && this.arr[this.parent(i)] > this.arr[i]) {
      [this.arr[i], this.arr[this.parent(i)]] = [
        this.arr[this.parent(i)],
        this.arr[i],
      ];
      i = this.parent(i);
    }
  }

  print() {
    console.log(this.arr);
  }
}
