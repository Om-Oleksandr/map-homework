class Stack {
  constructor(maxSize, ...items) {
    this.maxSize = maxSize;
    this._currentSize = 0;
    for (const value of items) {
      this.push(value);
    }
  }
  get maxSize() {
    return this._maxSize;
  }
  set maxSize(value) {
    if (typeof value !== "number") {
      throw new TypeError("value must be a number");
    }
    if (value <= 0 || value > MAX_SIZE_STACK) {
      throw new RangeError("Max size must be a less than " + MAX_SIZE_STACK);
    }
    this._maxSize = value;
  }
  get isEmpty() {
    return this._currentSize === 0;
  }
  get currentSize() {
    return this._currentSize;
  }
  push(value) {
    if (this._currentSize >= this.maxSize) {
      throw new RangeError("stack size overflowed");
    }
    this[`_${this._currentSize}`] = value;
    return ++this._currentSize;
  }
  pop() {
    if (this.isEmpty) {
      return;
    }
    const lastItem = this[`_${this._currentSize - 1}`];
    delete this[`_${this._currentSize - 1}`];

    this._currentSize--;
    return lastItem;
  }
  pick() {
    return this[`_${this._currentSize - 1}`];
  }
}

// try {
//   const stack = new Stack(5, 1, 2, 3, 5, 10);
//   stack.pop();
//   console.log(stack.pick());
// } catch (error) {
//   console.log(error);
// }
