class Queue {
  constructor() {
    this.storage = {};
    this.front = 0;
    this.rear = 0;
  }
  show() {
    return Object.values(this.storage);
  }
  size() {
    // *rear === undefined ? length === 0 : length > 0
    if (this.storage[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }
  push(value) {
    if (this.size() === 0) {
      this.storage["0"] = value;
    } else {
      this.rear += 1;
      this.storage[this.rear] = value;
    }
  }
  pop(value) {
    let out;
    if (this.size() === 0) {
      return -1;
    } else if (this.front === this.rear) {
      out = this.storage[this.front];
      delete this.storage[this.front];
      this.front = 0;
      this.rear = 0;
    } else {
      out = this.storage[this.front];
      delete this.storage[this.front];
      this.front += 1;
    }
    return out;
  }
  empty() {
    if (this.size() === 0) return 1;
    else return 0;
  }
  getfront() {
    if (this.size() === 0) return -1;
    else return this.storage[this.front];
  }
  back() {
    if (this.size() === 0) return -1;
    else return this.storage[this.rear];
  }
}
