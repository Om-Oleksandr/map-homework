class ListIterator {
  constructor(list) {
    this.list = list;
    this.currentElement = null;
  }
  next() {
    this.currentElement = this.currentElement
      ? this.currentElement.next
      : this.list.head;
    return {
      value: this.currentElement ? this.currentElement.value : undefined,
      done: this.currentElement === null,
    };
  }
}

class ListItem {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
}

class List {
  constructor(...args) {
    this.length = 0;
    this.head = null;
    this.tail = null;
    for (const elem of args) {
      this.push(elem);
    }
  }
  unshift(value) {
    const item = new ListItem(value);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      this.head.prev = item;
      item.next = this.head;
      this.head = item;
    }
    return ++this.length;
  }
  push(value) {
    const item = new ListItem(value);
    if (this.length === 0) {
      this.head = item;
      this.tail = item;
    } else {
      this.tail.next = item;
      item.prev = this.tail;
      this.tail = item;
    }
    return ++this.length;
  }
  
  [Symbol.iterator]() {
    return new ListIterator(this);
  }
}
const list = new List(4, [1, 2], { property: 12 }, "hello", false);
