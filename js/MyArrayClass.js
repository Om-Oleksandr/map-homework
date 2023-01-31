class MyArrayIterator {
  constructor(myArrayInstance) {
    this.collection = myArrayInstance;
    this.currentIndex = 0;
  }
  next() {
    return {
      value: this.collection[this.currentIndex++],
      done: this.currentIndex > this.collection.length,
    };
  }
}

class MyArray {
  constructor() {
    this.length = 0;
    for (let index = 0; index < arguments.length; index++) {
      this.push(arguments[index]);
    }
  }
  push() {
    for (let index = 0; index < arguments.length; index++) {
      this[this.length++] = arguments[index];
    }
    return this.length;
  }
  pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  reverse() {
    const newMyArray = new MyArray();
    for (let index = this.length - 1; index >= 0; index--) {
      newMyArray.push(this[index]);
    }
    for (let index = 0; index < this.length; index++) {
      this[index] = newMyArray[index];
    }
    return newMyArray;
  }
  forEach(func) {
    for (let index = 0; index < this.length; index++) {
      func(this[index], index, this);
    }
  }
  some(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this)) {
        return true;
      }
    }
    return false;
  }
  every(func) {
    for (let index = 0; index < this.length; index++) {
      if (func(this[index], index, this) === false) {
        return false;
      }
    }
    return true;
  }
  concat(instanceMyArray) {
    if (MyArray.isMyArray(instanceMyArray) === false) {
      throw new TypeError("must be instance MyArray");
    }
    const concatArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      concatArray.push(this[i]);
    }
    for (let i = 0; i < instanceMyArray.length; i++) {
      concatArray.push(instanceMyArray[i]);
    }
    return concatArray;
  }
  flat(depth = 1) {
    let result = new MyArray();
    this.forEach((elem) => {
      if (MyArray.isMyArray(elem) && depth) {
        result = result.concat(elem.flat(depth - 1));
      } else if (elem !== undefined) {
        result.push(elem);
      }
    });
    return result;
  }
  [Symbol.iterator]() {
    return new MyArrayIterator(this);
  }
  static isMyArray(obj) {
    return obj instanceof MyArray;
  }
}