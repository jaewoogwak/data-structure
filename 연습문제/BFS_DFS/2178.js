let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let arr = [];
let visited = new Array(N).fill(false).map(() => new Array(M).fill(false));
const moveRow = [1, 0, -1, 0];
const moveCol = [0, 1, 0, -1];
for (let i = 1; i < N + 1; i++) {
  arr.push(input[i].split("").map((el) => parseInt(el)));
}
let count = 1;
let level = 0;

function BFS(row, col) {
  let needVisited = [];
  needVisited.push([row, col]);
  visited[row][col] = true;
  if (visited[N - 1][M - 1]) return;
  // 탐색 시작
  while (needVisited.length > 0) {
    let size = needVisited.length;
    // console.log(`----- level ${level} -----`);
    for (let q = 0; q < size; q++) {
      let [currRow, currCol] = needVisited.shift();
      // console.log(currRow, currCol);
      let nextRow = currRow;
      let nextCol = currCol;
      for (let i = 0; i < 4; i++) {
        nextRow = currRow + moveRow[i];
        nextCol = currCol + moveCol[i];
        if (
          0 <= nextRow &&
          nextRow < N &&
          0 <= nextCol &&
          nextCol < M &&
          !visited[nextRow][nextCol] &&
          arr[nextRow][nextCol] == 1
        ) {
          visited[nextRow][nextCol] = true;
          needVisited.push([nextRow, nextCol]);
        }
      }
    }

    level++;
    if (visited[N - 1][M - 1]) return;
  }
}
BFS(0, 0);
console.log(level + 1);
