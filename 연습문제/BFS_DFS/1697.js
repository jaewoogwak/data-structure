let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let N = parseInt(input[0].split(" ")[0]);
let K = parseInt(input[0].split(" ")[1]);
let visited = new Array(100000).fill(false);
let movePos = [1, -1, 2];
let level = 0;

function BFS(pos) {
  let needVisited = [];
  needVisited.push(pos);
  visited[pos] = true;
  if (visited[K]) return;
  // 탐색 시작
  while (needVisited.length > 0) {
    let size = needVisited.length;
    // console.log(`----- level ${level} -----`);
    for (let q = 0; q < size; q++) {
      curPos = needVisited.shift();
      // console.log("curPos", curPos);

      for (let i = 0; i < 3; i++) {
        let nextPos = i == 2 ? curPos * movePos[i] : curPos + movePos[i];
        if (nextPos >= 0 && nextPos <= 100000 && !visited[nextPos]) {
          visited[nextPos] = true;
          needVisited.push(nextPos);
        }
      }
    }
    level++;
    if (visited[K]) return;
  }
}
BFS(N);
console.log(level);
