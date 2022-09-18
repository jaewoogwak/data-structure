let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

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
let needVisited = new Queue();
let count = 0;
let curRow;
let curCol;
let cnt;

function BFS() {
  // 탐색 시작
  while (needVisited.size() > 0) {
    [curRow, curCol, cnt] = needVisited.pop();
    for (let i = 0; i < 4; i++) {
      let nextRow = curRow + moveRow[i];
      let nextCol = curCol + moveCol[i];
      if (
        nextRow >= 0 &&
        nextRow < N &&
        nextCol >= 0 &&
        nextCol < M &&
        !visited[nextRow][nextCol] &&
        arr[nextRow][nextCol] != -1
      ) {
        visited[nextRow][nextCol] = true;
        arr[nextRow][nextCol] = 1;
        needVisited.push([nextRow, nextCol, cnt + 1]);
        count -= 1;
      }
    }
  }
  if (count == 0) return cnt;
  else return -1;
}

const moveRow = [-1, 1, 0, 0];
const moveCol = [0, 0, -1, 1];
let arr = [];
let M = parseInt(input[0].split(" ")[0]); // 6
let N = parseInt(input[0].split(" ")[1]); // 4
for (let i = 1; i < N + 1; i++) {
  arr.push(input[i].split(" ").map((el) => parseInt(el)));
}

let visited = new Array(N).fill(false).map((el) => new Array(M).fill(false));

// 익은 토마토 위치 파악
for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (arr[row][col] == 1) {
      needVisited.push([row, col, 0]);
      visited[row][col] = true;
    } else if (arr[row][col] == 0) {
      count += 1;
    }
  }
}
let day = BFS();
console.log(day == undefined ? -1 : day);

// console.log(visited);
// BFS(N);
// console.log(level);
