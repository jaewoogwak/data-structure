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
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let q = new Queue();
const count = input[0];
let cmd = "";
let output = [];
for (let i = 0; i < count; i++) {
  cmd = input[i + 1].split(" ")[0];
  switch (cmd) {
    case "push":
      q.push(input[i + 1].split(" ")[1]);
      break;
    case "pop":
      output.push(q.pop());
      break;
    case "size":
      output.push(q.size());
      break;
    case "empty":
      output.push(q.empty());
      break;
    case "front":
      output.push(q.getfront());
      break;
    case "back":
      output.push(q.back());
      break;

    default:
      break;
  }
}
console.log(output.join("\n"));
