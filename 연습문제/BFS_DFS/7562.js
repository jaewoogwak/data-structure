let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function BFS(curRow, curCol, nextRow, nextCol, I, visited, level) {
  // console.log("Start", curRow, curCol, nextRow, nextCol, I);
  let needVisited = [];
  needVisited.push([curRow, curCol]);
  visited[curRow][curCol] = true;
  if (visited[nextRow][nextCol]) return;
  // 탐색 시작
  while (needVisited.length > 0) {
    let size = needVisited.length;
    // console.log(`----- level ${level} -----`);
    for (let q = 0; q < size; q++) {
      let [curRow, curCol] = needVisited.shift();
      // console.log("curPos", curRow, curCol);

      for (let i = 0; i < 8; i++) {
        let nextRow = curRow + moveRow[i];
        let nextCol = curCol + moveCol[i];
        if (
          nextRow >= 0 &&
          nextRow < I &&
          nextCol >= 0 &&
          nextCol < I &&
          !visited[nextRow][nextCol]
        ) {
          visited[nextRow][nextCol] = true;
          needVisited.push([nextRow, nextCol]);
        }
      }
    }
    level++;
    if (visited[nextRow][nextCol]) return level;
  }
}

const moveRow = [2, 1, -1, -2, -2, -1, 1, 2];
const moveCol = [1, 2, 2, 1, -1, -2, -2, -1];

let T = parseInt(input[0].split(" ")[0]);

for (let t = 0; t < T; t++) {
  let I = parseInt(input[1 + t * 3].split(" ")[0]);
  let [curRow, curCol] = input[2 + t * 3].split(" ").map((el) => parseInt(el));
  let [nextRow, nextCol] = input[3 + t * 3]
    .split(" ")
    .map((el) => parseInt(el));
  let visited = new Array(I).fill(false).map((el) => new Array(I).fill(false));
  // console.log(visited);
  let level = BFS(curRow, curCol, nextRow, nextCol, I, visited, 0);
  if (level == undefined) level = 0;
  console.log(level);
}
